const std = @import("std");
const aio = @import("../aio.zig");
const Operation = @import("ops.zig").Operation;
const IoUring = @import("IoUring.zig");
const Fallback = @import("Fallback.zig");
const log = std.log.scoped(.aio_linux);

pub const IO = switch (aio.options.fallback) {
    .auto => FallbackSupport, // prefer IoUring, support fallback during runtime
    .force => Fallback, // use only the fallback backend
    .disable => IoUring, // use only the IoUring backend
};

const FallbackSupport = union(enum) {
    pub const EventSource = IoUring.EventSource;
    comptime {
        std.debug.assert(EventSource == Fallback.EventSource);
    }

    io_uring: IoUring,
    fallback: Fallback,

    var once = std.once(do_once);
    var io_uring_supported: bool = undefined;

    fn do_once() void {
        io_uring_supported = IoUring.isSupported(aio.options.required_ops);
        if (!io_uring_supported) log.warn("io_uring unsupported, using fallback backend", .{});
    }

    pub fn isSupported(operations: []const type) bool {
        once.call();
        // io_uring currently has to support all operations or we fallback
        // so the io_uring codepath here never really gets executed
        // however, this may change in future so it's better this way
        // for example, we may want to still pick io_uring even if some
        // obscurce operation is not supported
        return if (io_uring_supported)
            IoUring.isSupported(operations)
        else
            Fallback.isSupported(operations);
    }

    pub fn init(allocator: std.mem.Allocator, n: u16) aio.Error!@This() {
        once.call();
        return if (io_uring_supported)
            .{ .io_uring = try IoUring.init(allocator, n) }
        else
            .{ .fallback = try Fallback.init(allocator, n) };
    }

    pub fn deinit(self: *@This(), allocator: std.mem.Allocator) void {
        switch (self.*) {
            inline else => |*io| io.deinit(allocator),
        }
    }

    pub fn queue(self: *@This(), comptime len: u16, uops: []Operation.Union, cb: ?aio.Dynamic.QueueCallback) aio.Error!void {
        return switch (self.*) {
            inline else => |*io| io.queue(len, uops, cb),
        };
    }

    pub fn complete(self: *@This(), work: anytype, cb: ?aio.Dynamic.CompletionCallback) aio.Error!aio.CompletionResult {
        return switch (self.*) {
            inline else => |*io| io.complete(work, cb),
        };
    }

    pub fn immediate(comptime len: u16, uops: []Operation.Union) aio.Error!u16 {
        once.call();
        return if (io_uring_supported)
            IoUring.immediate(len, uops)
        else
            Fallback.immediate(len, uops);
    }
};
