(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),u=t.n(l),o=t(14),c=t(2),i=t(3),m=t.n(i),s=function(){return m.a.get("/notes").then((function(e){return e.data}))},d=function(e){return m.a.post("/notes",e).then((function(e){return e.data}))},f=function(e,n){return m.a.put("".concat("/notes","/").concat(e),n).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat("/notes","/").concat(e))},b=function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e.name," ",e.number,"\xa0"),r.a.createElement("button",{onClick:function(){return e.handleDelete(e.id,e.name,e.setPersons)}},"Delete contact"))},g=function(e){return r.a.createElement("div",null,"filter shawn with:",r.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},E=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter.toLowerCase())}));return r.a.createElement("div",null,n.map((function(n){return r.a.createElement(b,{key:n.name,name:n.name,number:n.number,handleDelete:e.handleDelete,setPersons:e.setPersons,id:n.id})})))},v=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},w=function(e){var n=e.errorMessage;if(null===n)return null;return r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},j=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)(""),i=Object(c.a)(u,2),m=i[0],b=i[1],j=Object(a.useState)(""),O=Object(c.a)(j,2),y=O[0],C=O[1],S=Object(a.useState)(""),N=Object(c.a)(S,2),D=N[0],k=N[1],P=Object(a.useState)(null),T=Object(c.a)(P,2),B=T[0],z=T[1],A=Object(a.useState)(null),F=Object(c.a)(A,2),I=F[0],J=F[1];Object(a.useEffect)((function(){s().then((function(e){l(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{filter:D,handleFilterChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(E,{addPerson:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===m}));if(n.length>0){var a=n[0],r=a.id,u=Object(o.a)({},a,{number:y});f(r,u).then((function(e){l(t.map((function(n){return n.id!==r?n:e}))),z("Updated number for '".concat(e.name,"'")),setTimeout((function(){z(null)}),5e3),b(""),C("")}))}else if(0===m.length)window.alert("name is empty");else if(0===y.length)window.alert("number is empty");else{d({name:m,number:y}).then((function(e){l(t.concat(e)),z("Added '".concat(e.name,"'")),setTimeout((function(){z(null)}),5e3),b(""),C("")}))}},newName:m,handleNameChange:function(e){b(e.target.value)},newNumber:y,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{message:B}),r.a.createElement(w,{errorMessage:I}),r.a.createElement(p,{persons:t,filter:D,handleDelete:function(e,n,a){window.confirm("Delete contact ".concat(n," ?"))&&h(e).then((function(r){a(t.filter((function(n){return n.id!==e}))),z("Deleted '".concat(n,"'")),setTimeout((function(){z(null)}),5e3)})).catch((function(r){J("Information of '".concat(n,"' has already been removed from server")),setTimeout((function(){J(null)}),5e3),a(t.filter((function(n){return n.id!==e})))}))},setPersons:l}))};u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.76579cee.chunk.js.map