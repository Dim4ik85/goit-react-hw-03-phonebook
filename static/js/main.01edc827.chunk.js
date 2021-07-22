(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(7),r=n.n(o),s=n(9),i=n(2),l=n(3),u=n(5),h=n(4),b=n(22),d=n(8),m=(n(14),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),""===a||""===c?alert("Enter the data."):(t.props.onAddContact(a,c),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(m.jsx)("input",{type:"text",value:e,id:"name",className:"Input",onChange:this.handleChange,name:"name"}),Object(m.jsx)("label",{htmlFor:"number",className:"Label",children:"Number"}),Object(m.jsx)("input",{type:"number",value:n,id:"number",className:"Input",onChange:this.handleChange,name:"number"}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);j.defaultProps={};n(16);var f=function(t){var e=t.children;return Object(m.jsx)("div",{className:"Layout",children:e})},v=(n(17),function(t){var e=t.value,n=t.onChangeFilter;return Object(m.jsxs)("div",{className:"FindForm",children:[Object(m.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact by name"}),Object(m.jsx)("input",{type:"text",value:e,id:"find",className:"FindInput",onChange:function(t){return n(t.target.value)}})]})}),O=(n(18),function(t){var e=t.contacts,n=t.onRemoveContact;return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:"ContactItem",children:["- ",a,": ",c,Object(m.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})}),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:Object(b.a)(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log(e),console.log(this.state.contacts),this.state.contacts!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(m.jsxs)(f,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(j,{onAddContact:this.addContact}),e.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(m.jsx)(v,{value:n,onChangeFilter:this.changeFilter}),Object(m.jsx)(O,{contacts:a,onRemoveContact:this.removeContact})]})]})}}]),n}(a.Component);p.defaultProps={};n(19);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.01edc827.chunk.js.map