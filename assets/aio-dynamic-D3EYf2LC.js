import{u as l,j as s}from"./index-VcBRdP1v.js";const a={title:"AIO API",description:"undefined"};function n(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.header,{children:s.jsxs(i.h1,{id:"aio-api",children:["AIO API",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aio-api",children:s.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(i.h2,{id:"dynamic-io",children:["Dynamic IO",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamic-io",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:"In case the amount of IO operations isn't known ahead of time the dynamic api can be used."}),`
`,s.jsxs(i.h3,{id:"initializing-dynamic-instance",children:["Initializing Dynamic instance",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initializing-dynamic-instance",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[`Creating a Dynamic instance requires an allocator and upper bound for non-completed operations.
The instance allocates only during the `,s.jsx(i.code,{children:"init"}),", and frees the memory during ",s.jsx(i.code,{children:"deinit"}),`.
Same allocator must be used in `,s.jsx(i.code,{children:"deinit"})," that was used in ",s.jsx(i.code,{children:"init"}),"."]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" max_operations"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 32"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"var"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Dynamic"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"init"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"std"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"heap"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"page_allocator"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"max_operations"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"defer"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"deinit"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"std"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"heap"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"page_allocator"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,s.jsxs(i.h3,{id:"queuing-operations",children:["Queuing operations",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#queuing-operations",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(i.p,{children:`It is possible to queue either single or multiple operations just like with the immediate api.
The call to queue is atomic, if the call fails, none of the operations will be actually queued.`}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Multiple operations"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"queue"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(.{"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    aio"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Read"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{...},"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    aio"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Write"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{...},"})]}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"    aio"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Fsync"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{...},"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,s.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Single operation"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"queue"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"aio"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"Timeout"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{...});"})]})]})}),`
`,s.jsxs(i.h3,{id:"completing-operations",children:["Completing operations",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#completing-operations",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:[`It is possible to complete the operations either in blocking or non-blocking fashion.
The blocking mode will wait for at least one operation to complete.
The non-blocking always returns immediately even if no operations were completed.
The call to complete returns `,s.jsx(i.code,{children:"aio.CompletionResult"}),` containing the number of operations that were completed
and the number of errors that occured.`]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(i.code,{children:[s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// blocks until at least 1 operation completes"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" res"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"complete"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"blocking"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsx(i.span,{className:"line",children:s.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// returns immediately"})}),`
`,s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" res"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"complete"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(."}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"nonblocking"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,s.jsxs(i.p,{children:["To complete all operations within the dynamic instance, use ",s.jsx(i.code,{children:"completeAll"}),`.
This blocks until all the operations are complete and returns the number of errors, if any.`]}),`
`,s.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(i.code,{children:s.jsxs(i.span,{className:"line",children:[s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" num_errors"}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" try"}),s.jsx(i.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" work"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"completeAll"}),s.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsxs(i.h3,{id:"callbacks",children:["Callbacks",s.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#callbacks",children:s.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(i.p,{children:["It is possible to set callbacks for queued and completed operations by setting the ",s.jsx(i.code,{children:"queue_callback"})," and ",s.jsx(i.code,{children:"completion_callback"})," of ",s.jsx(i.code,{children:"aio.Dynamic"}),`
to a functions with a prototypes `,s.jsx(i.code,{children:"fn (uop: *aio.Dynamic.Uop, id: aio.Id) void"})," and ",s.jsx(i.code,{children:"fn (uop: *aio.Dynamic.Uop, id: aio.Id, failed: bool) void"}),` respectively.
This is for example used by the `,s.jsx(i.code,{children:"coro.Scheduler"})," to link IO operations into tasks."]})]})}function o(e={}){const{wrapper:i}={...l(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{o as default,a as frontmatter};
