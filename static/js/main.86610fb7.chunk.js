(this["webpackJsonpreact-films"]=this["webpackJsonpreact-films"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),i=c.n(n),r=(c(10),c(0));function l(){return Object(r.jsx)("footer",{className:"page-footer  green darken-2",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}function j(){return Object(r.jsx)("header",{children:Object(r.jsx)("nav",{className:"green lighten-1",children:Object(r.jsxs)("div",{className:"nav-wrapper ",children:[Object(r.jsx)("a",{href:"#!",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/hvoyka/react-films",children:"Repo"})})})]})})})}var o=c(2),h=c(5);function d(e){var t=e.Title,c=e.Year,a=e.Type,s=e.Poster;return Object(r.jsx)("div",{className:"movies__list-item",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card__image",children:"N/A"===s?Object(r.jsx)("img",{src:"https://via.placeholder.com/300x450?text=".concat(t),alt:"Placeholder"}):Object(r.jsx)("img",{src:s,alt:"".concat(t," popster")})}),Object(r.jsxs)("div",{className:"card__content",children:[Object(r.jsx)("p",{className:"card__title",children:t}),Object(r.jsx)("span",{children:c})," ",Object(r.jsx)("span",{className:"right",children:a})]})]})})}function b(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies__list",children:c.length?c.map((function(e){return Object(r.jsx)(d,Object(h.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"Nothing found :("})})}function u(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}function m(e){var t=e.loadSearchResult,c=void 0===t?Function.prototype:t,s=Object(a.useState)(""),n=Object(o.a)(s,2),i=n[0],l=n[1],j=Object(a.useState)(""),h=Object(o.a)(j,2),d=h[0],b=h[1],u=function(e){b(e.target.value),c(i,e.target.value)};return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{type:"search",placeholder:"Search",className:"validate",value:i,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(i,d)}}),Object(r.jsxs)("button",{className:"search__btn waves-effect waves-light btn-small",onClick:function(){return c(i,d)},children:["Search ",Object(r.jsx)("i",{className:"material-icons right",children:"search"})]})]}),Object(r.jsxs)("div",{className:"search__filter",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"",onChange:u,checked:""===d}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"movie",onChange:u,checked:"movie"===d}),Object(r.jsx)("span",{children:"Movie"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"filter",type:"radio",value:"series",onChange:u,checked:"series"===d}),Object(r.jsx)("span",{children:"Series"})]})]})]})}var O="b9a1a463";function x(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(o.a)(n,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=matrix")).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){j(!1),console.log(e)}))}),[]),Object(r.jsxs)("main",{className:"content container",children:[Object(r.jsx)(m,{loadSearchResult:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";j(!0),fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(e,"&type=").concat(t)).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){j(!1),console.log(e)}))}}),l?Object(r.jsx)(u,{}):Object(r.jsx)(b,{movies:c})]})}var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(x,{}),Object(r.jsx)(l,{})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.86610fb7.chunk.js.map