(this.webpackJsonp20210614_react_shop=this.webpackJsonp20210614_react_shop||[]).push([[0],{14:function(t){t.exports=JSON.parse('[{"id":0,"productName":"black tshirt","img":"./img/t-shirt-1.jpg","price":34.99,"inventory":0},{"id":1,"productName":"white tshirt","img":"./img/t-shirt-2.jpg","price":24.99,"inventory":3},{"id":2,"productName":"rose tshirt","img":"./img/t-shirt-3.jpg","price":29.99,"inventory":100}]')},29:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),i=c(15),s=c.n(i),a=c(7),o=c(14),j=c(16),l=c(9),u=c(17),d=c(1),b=function(t){var e=t.info,c=t.addToCart,n=e.id,r=e.productName,i=e.img,s=e.price,a=e.inventory;return Object(d.jsx)("li",{children:Object(d.jsxs)(l.a,{style:{width:"15rem"},children:[Object(d.jsx)(l.a.Img,{variant:"top",src:"".concat("/react-e-store","/").concat(i),alt:"rock t-shirt"}),Object(d.jsxs)(l.a.Body,{children:[Object(d.jsx)(l.a.Title,{className:"text",children:Object(d.jsx)("h3",{children:r})}),Object(d.jsxs)(l.a.Text,{children:[Object(d.jsx)("p",{className:"lead",children:s}),Object(d.jsxs)("p",{className:"lead",children:[a," items in stock"]})]}),Object(d.jsx)(u.a,{variant:"outline-dark",disabled:0===a,onClick:function(){console.log(e),c(e)},children:a>0?"Add to cart":"Out of stock"})]})]})},n)},h=function(t){var e=t.tshirts,c=Object(n.useState)([]),i=Object(a.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(0),u=Object(a.a)(l,2),h=u[0],O=u[1],p=function(t){o((function(e){return[].concat(Object(j.a)(e),[t])})),console.log(s)},m=e.map((function(t,e){return Object(d.jsx)(b,{info:t,addToCart:p},e)}));return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return O(s.reduce((function(t,e){return t+e.price}),0))},children:"Total bill"})," ",Object(d.jsx)("h6",{children:h})]}),Object(d.jsx)("ul",{children:m})]})};c(23),c(8);var O=function(){var t=Object(n.useState)(o),e=Object(a.a)(t,2),c=e[0],i=(e[1],Object(n.useState)("")),s=Object(a.a)(i,2),j=s[0],l=s[1],u=Object(n.useState)([]),b=Object(a.a)(u,2),O=b[0],p=b[1];return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("h1",{children:"Welcome to our online store"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(){var t=j.toLocaleLowerCase().trim(),e=t.length,n=c.filter((function(c){return c.productName.slice(0,e)===t}));p(n)}()},children:[Object(d.jsx)("input",{type:"text",onChange:function(t){l(t.target.value)},value:j}),Object(d.jsx)("input",{type:"submit",value:"filter"})]}),Object(d.jsx)(h,{tshirts:j?O:c})]})};c(29);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.822ff0d3.chunk.js.map