(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=n(9),s=n(2),u=n(3),l=n(5),b=n(4),d=n(22),m=n(8),h=(n(14),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),""===a||""===c?alert("Enter the data."):(t.props.onAddContact(a,c),t.setState({name:"",number:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(h.jsx)("input",{type:"text",value:e,id:"name",className:"Input",onChange:this.handleChange,name:"name"}),Object(h.jsx)("label",{htmlFor:"number",className:"Label",children:"Number"}),Object(h.jsx)("input",{type:"number",value:n,id:"number",className:"Input",onChange:this.handleChange,name:"number"}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);j.defaultProps={};n(16);var f=function(t){var e=t.children;return Object(h.jsx)("div",{className:"Layout",children:e})},v=(n(17),function(t){var e=t.value,n=t.onChangeFilter;return Object(h.jsxs)("div",{className:"FindForm",children:[Object(h.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact by name"}),Object(h.jsx)("input",{type:"text",value:e,id:"find",className:"FindInput",onChange:function(t){return n(t.target.value)}})]})}),O=(n(18),function(t){var e=t.contacts,n=t.onRemoveContact;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:"ContactItem",children:["- ",a,": ",c,Object(h.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})}),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(d.a)(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(h.jsxs)(f,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(j,{onAddContact:this.addContact}),e.length>0&&Object(h.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(h.jsx)(v,{value:n,onChangeFilter:this.changeFilter}),e.length>0&&Object(h.jsx)(O,{contacts:a,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);p.defaultProps={};n(19);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3514a32a.chunk.js.map