(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(11),n(12),n(2)),i=n.n(o),d=n(3),l=n(4),u=n(0),j=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(e){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={description:n},t.next=5,fetch("/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:r=t.sent,console.log("input ---\x3e ".concat(r)),window.location="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center mt-5",children:"PERN TODO LIST"}),Object(u.jsxs)("form",{className:"d-flex mt-5",onSubmit:s,children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Task...",value:n,onChange:function(t){r(t.target.value)}}),Object(u.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},b=function(t){var e=t.todo,n=Object(c.useState)(e.description),r=Object(l.a)(n,2),s=r[0],a=r[1],o=function(){var t=Object(d.a)(i.a.mark((function t(n){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,c={description:s},t.next=5,fetch("/todos/".concat(e.todo_id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(c)});case 5:r=t.sent,console.log(r),window.location="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-warning","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"EDIT"}),Object(u.jsx)("div",{className:"modal",id:"id".concat(e.todo_id),onClick:function(){return a(e.description)},children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h4",{className:"modal-title",children:"Edit Todo"}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",onClick:function(){return a(e.description)},children:"\xd7"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(t){return a(t.target.value)}})}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(t){return o(t)},children:"Done"})})]})})})]})},h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/todos/".concat(e),{method:"DELETE"});case 2:r(n.filter((function(t){return t.todo_id!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/todos");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center mt-5",children:"List Todos"}),Object(u.jsxs)("table",{className:"table table-striped mt-5",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Task"}),Object(u.jsx)("th",{children:"Edit"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:n.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.description}),Object(u.jsx)("td",{children:Object(u.jsx)(b,{todo:t})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return s(t.todo_id)},children:"Delete"})})]},t.todo_id)}))})]})]})};var m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{})]})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.04ea328f.chunk.js.map