(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.homeURI=window.location.protocol+"//"+window.location.hostname+(0===window.location.port.length?"":":8443")},343:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(131),r=u(o);a(344);var c=u(a(143)),l=a(138);function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={contactName:"",contactEmail:"",contactMessage:"",error:null,message:null,zipcode:""},a.handleSubmit=a.handleSubmit.bind(a),a.handleInputChange=a.handleInputChange.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.contactEmail,o=a.contactName,r=a.contactMessage;c.default.post(l.homeURI+"/apiV1/sendmail",{contactEmail:n,contactName:o,contactMessage:r}).then(function(e){e.data.error&&t.setState({error:e.data.error}),e&&e.data.success&&t.setState({message:e.data.message},function(){document.querySelector("body").scrollTop=0})}).catch(function(e){t.setState({error:e.toString()})})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},n,a))}},{key:"render",value:function(){var e=this.state,t=e.message,a=e.error,n=e.contactEmail,o=e.contactName,c=e.contactMessage,l=e.zipcode;return r.default.createElement("main",{className:"contact__contactPage___21tug"},r.default.createElement("h2",null,"Contact us"),r.default.createElement("p",null,"Please contact us if you any recommendations for records to review"),a&&r.default.createElement("p",{className:"error"},a),t&&r.default.createElement("p",{className:"message"},t),r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement("label",{htmlFor:"contactName"},"Your name"),r.default.createElement("input",{id:"contactName",maxLength:"254",name:"contactName",onChange:this.handleInputChange,required:!0,type:"text",value:o}),r.default.createElement("label",{htmlFor:"contactEmail"},"Your email"),r.default.createElement("input",{id:"contactEmail",maxLength:"254",name:"contactEmail",onChange:this.handleInputChange,required:!0,type:"email",value:n}),r.default.createElement("label",{htmlFor:"contactMessage"},"Your message"),r.default.createElement("textarea",{id:"contactMessage",maxLength:"500",minLength:"10",name:"contactMessage",onChange:this.handleInputChange,required:!0,value:c}),r.default.createElement("input",{disabled:t,name:"contactSubmit",type:"submit",value:"submit"}),r.default.createElement("span",{"aria-hidden":"true",className:"hide"},r.default.createElement("label",{"aria-hidden":"true",className:"hide",htmlFor:"zipcode"},"Your zipcode"),r.default.createElement("input",{"aria-hidden":"true",className:"hide",id:"zipcode",name:"zipcode",onChange:this.handleInputChange,type:"text",value:l}))))}}]),t}();t.default=i},344:function(e,t,a){e.exports={"line-through":"contact__line-through___23t9c",contactPage:"contact__contactPage___21tug"}}}]);