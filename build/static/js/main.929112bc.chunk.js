(this["webpackJsonpapi-builder"]=this["webpackJsonpapi-builder"]||[]).push([[0],{129:function(e,t,a){e.exports=a(273)},134:function(e,t,a){},135:function(e,t,a){},145:function(e,t,a){e.exports=a.p+"static/media/codeBg.968bf140.jpg"},146:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a.n(o),l=(a(134),a(12)),c=(a(135),a(20)),s=a(80),m=a.n(s),d=(a(145),a(146),function(e){var t=e.uiConfig,a=e.firebaseAuth;return r.a.createElement("div",{className:"background",align:"center"},r.a.createElement("div",{className:"box",align:"center"},r.a.createElement("h1",{className:"brand"},"\ud83d\ude80 API Builder"),r.a.createElement("p",{className:"text"},"Login using social media to get quick access or signin with email"),r.a.createElement(m.a,{uiConfig:t,firebaseAuth:a})))}),p=a(68),u=a(71),E=a(128),h=a(64),g=function(e){var t=e.userName;return r.a.createElement(u.a,{bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,{href:"/"},"\ud83d\ude80 API Builder"),r.a.createElement(E.a,{className:"ml-auto"},r.a.createElement(u.a.Text,{className:"mr-3"},"Sign in as: ",t),r.a.createElement(h.a,{variant:"outline-light",onClick:function(){return c.a.auth().signOut()}},"Sign out")))},y=a(277),f=a(275),v=a(276),b=a(42),x=a(18),j=function(e){var t=e.initValues.projectName,a=x.a().shape({projectName:x.b().required("*Endpoint name is required")});return r.a.createElement(b.a,{initialValues:{projectName:t},validationSchema:a,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm;n(!0),setTimeout((function(){"add"===e.mode?e.addProject(t.projectName):e.editProject(e.projectId,t.projectName),e.onHide(),r(),n(!1)}),500)}},(function(e){var t=e.values,a=e.errors,n=e.touched,o=e.handleChange,i=e.handleBlur,l=e.handleSubmit,c=e.isSubmitting;return r.a.createElement(v.a,{onSubmit:l,className:"mx-auto"},r.a.createElement(v.a.Group,{controlId:"formEndpointName"},r.a.createElement(v.a.Label,null,"Project Name:"),r.a.createElement(v.a.Control,{type:"text",name:"projectName",placeholder:"Enter a project Name",onChange:o,onBlur:i,value:t.projectName}),n.projectName&&a.projectName?r.a.createElement("div",{className:"error-message"},a.projectName):null),r.a.createElement(h.a,{variant:"primary",type:"submit",disabled:c,style:{marginTop:"20px"}},"Submit"))}))},w=function(e){var t={projectName:e.projectName};return r.a.createElement(f.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},e.title)),r.a.createElement(f.a.Body,null,r.a.createElement(j,{onHide:e.onHide,addProject:e.addProject,editProject:e.editProject,mode:e.mode,initValues:t,projectId:e.projectId})))},N=function(e){var t=e.project,a=e.isGoToEndpointClicked,o=e.deleteProject,i=e.editProject,c=Object(n.useState)(!1),s=Object(l.a)(c,2),m=s[0],d=s[1];return r.a.createElement(y.a,{style:{marginBottom:"20px",border:"none"}},r.a.createElement("div",null,r.a.createElement(y.a.Header,{as:"h5",style:{backgroundColor:"#343A40",color:"#fff",border:"none"}},t.projectName," "),r.a.createElement(y.a.Footer,{style:{border:"1px solid #343A40",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},r.a.createElement(h.a,{variant:"primary",style:{marginRight:"10px"},onClick:function(){a(!0,t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-box-arrow-right",viewBox:"0 0 16 16"},r.a.createElement("path",{"fillRule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"}))," ","Go to endpoints"),r.a.createElement(h.a,{variant:"secondary",onClick:function(){return d(!0)},style:{marginRight:"10px"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))," ","Edit"),r.a.createElement(w,{show:m,onHide:function(){return d(!1)},editProject:i,title:"Edit Project",mode:"edit",projectName:t.projectName,projectId:t.id}),r.a.createElement(h.a,{variant:"danger",onClick:function(){return o(t.id)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))," ","Delete"))))},C=c.a.initializeApp({apiKey:"AIzaSyDIXGYIKfPDZgBvrt7AV_o6zjUd_IglVzc",authDomain:"apigen-4d56d.firebaseapp.com",projectId:"apigen-4d56d",storageBucket:"apigen-4d56d.appspot.com",messagingSenderId:"950098139390",appId:"1:950098139390:web:c2ee500d026f3cb84cadaf",measurementId:"G-R30JMSJ4Q3"}).firestore(),S=(a(250),function(e){var t=e.userId,a=e.data,o=e.isGoToEndpointClicked,i=Object(n.useState)(!1),s=Object(l.a)(i,2),m=s[0],d=s[1],p=function(e,t){C.collection("api").doc(e).set({projectName:t},{merge:!0})},u=function(e){C.collection("api").doc(e).delete()};return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement("div",{style:{marginBottom:"30px"}},r.a.createElement("h1",null,"Projects"),r.a.createElement("hr",{style:{marginBottom:"30px"}}),r.a.createElement(h.a,{variant:"outline-dark",onClick:function(){return d(!0)}},"+ Add new projects")),r.a.createElement(w,{show:m,onHide:function(){return d(!1)},addProject:function(e){var a={projectName:e,userId:t,swaggerDoc:'{"swagger":"2.0","info":{"description":"This is a simple demo server meant to display the features of apigen. ","version":"1.0.5","title":"Senior Design PetStore","contact":{"email":"marcus.gallegos@ucdenver.edu"},"license":{"name":"Apache 2.0"}},"schemes":["https"],"paths":{},"securityDefinitions":{"api_key":{"type":"apiKey","name":"api_key","in":"header"},"petstore_auth":{"type":"oauth2","authorizationUrl":"https://petstore.swagger.io/oauth/authorize","flow":"implicit","scopes":{"read:pets":"read your pets","write:pets":"modify pets in your account"}}},"definitions":{"ApiResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}}},"Category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"Pet":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/definitions/Category"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"wrapped":0},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":0},"items":{"xml":{"name":"tag"},"$ref":"#/definitions/Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"Pet"}},"Tag":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}},"Order":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"Order"}},"User":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"xml":{"name":"User"}}}}',timestamp:c.a.firestore.FieldValue.serverTimestamp()};C.collection("api").doc().set(a,{merge:!0})},title:"Adding Project",mode:"add"}),a.map((function(e){return r.a.createElement(N,{project:e,isGoToEndpointClicked:o,deleteProject:u,editProject:p})})))}),I=a(84),V=function(e){var t=e.initValues,a=t.requestType,n=t.endpointName,o=t.summary,i=t.operationID,l=JSON.stringify(e.initValues),c=x.a().shape({requestType:x.b().required("*Request type is required"),endpointName:x.b().required("*Endpoint name is required"),summary:x.b().required("*Summary is required"),operationID:x.b().required("*ID is required")});return r.a.createElement(b.a,{initialValues:{requestType:a,endpointName:n,summary:o,operationID:i},validationSchema:c,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm;n(!0),setTimeout((function(){"add"===e.mode?e.addEndpoint(t.requestType,t.endpointName,t.summary,t.operationID):e.editEndpoint(l,t.requestType,t.endpointName,t.summary,t.operationID),e.onHide(),r(),n(!1)}),500)}},(function(e){var t=e.values,a=e.errors,n=e.touched,o=e.handleChange,i=e.handleBlur,l=e.handleSubmit,c=e.isSubmitting;return r.a.createElement(v.a,{onSubmit:l,className:"mx-auto"},r.a.createElement(v.a.Group,{controlId:"formReqType"},r.a.createElement(v.a.Label,null,"Request Type:"),r.a.createElement(v.a.Control,{as:"select",name:"requestType",onChange:o,onBlur:i,value:t.requestType},r.a.createElement("option",{value:""},"Select type..."),r.a.createElement("option",{value:"get"},"GET"),r.a.createElement("option",{value:"post"},"POST"),r.a.createElement("option",{value:"put"},"PUT"),r.a.createElement("option",{value:"delete"},"DELETE")),n.requestType&&a.requestType?r.a.createElement("div",{className:"error-message"},a.requestType):null),r.a.createElement(v.a.Group,{controlId:"formEndpointName",style:{marginTop:"20px"}},r.a.createElement(v.a.Label,null,"Endpoint Name:"),r.a.createElement(v.a.Control,{type:"text",name:"endpointName",placeholder:"Enter an endpoint Name",onChange:o,onBlur:i,value:t.endpointName}),n.endpointName&&a.endpointName?r.a.createElement("div",{className:"error-message"},a.endpointName):null),r.a.createElement(v.a.Group,{controlId:"formSummary",style:{marginTop:"20px"}},r.a.createElement(v.a.Label,null,"Summary:"),r.a.createElement(v.a.Control,{type:"text",name:"summary",placeholder:"Enter a summary",onChange:o,onBlur:i,value:t.summary}),n.summary&&a.summary?r.a.createElement("div",{className:"error-message"},a.summary):null),r.a.createElement(v.a.Group,{controlId:"formID",style:{marginTop:"20px"}},r.a.createElement(v.a.Label,null,"Operation ID:"),r.a.createElement(v.a.Control,{type:"text",name:"operationID",placeholder:"Enter an unique ID",onChange:o,onBlur:i,value:t.operationID}),n.operationID&&a.operationID?r.a.createElement("div",{className:"error-message"},a.operationID):null),r.a.createElement(h.a,{variant:"primary",type:"submit",disabled:c,style:{marginTop:"20px"}},"Submit"))}))},O=function(e){var t={requestType:e.requestType,endpointName:e.endpointName,summary:e.summary,operationID:e.operationId};return r.a.createElement(f.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},e.title)),r.a.createElement(f.a.Body,null,r.a.createElement(V,{onHide:e.onHide,addEndpoint:e.addEndpoint,editEndpoint:e.editEndpoint,mode:e.mode,initValues:t})))};function T(){var e=x.a().shape({requestType:x.b().required("*Request type is required"),endpointName:x.b().required("*Endpoint name is required"),summary:x.b().required("*Summary is required"),operationID:x.b().required("*ID is required")});return r.a.createElement(b.a,{initialValues:{fn:"None",pathType:"Static Path",path:"",queryType:"Static Query",query:""},validationSchema:e,onSubmit:function(e,t){var a=t.setSubmitting;t.resetForm;a(!0)}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),n=e.handleBlur,o=e.handleSubmit;e.isSubmitting;return r.a.createElement(v.a,{onSubmit:o,className:"mx-auto"},r.a.createElement("div",{className:"w-100"},r.a.createElement(y.a,{style:{width:"100%",maxWidth:"500px"}},r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,"Generate Code"),r.a.createElement(y.a.Text,null,"We can auto generate code for this endpoint. Simply follow the editor below. If you select none, the API endpoint will just be a stub."),r.a.createElement(v.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(v.a.Label,null,"Functionality:"),r.a.createElement(v.a.Control,{as:"select",type:"text",name:"fn",onChange:a,onBlur:n,value:t.fn},r.a.createElement("option",null,"None"),r.a.createElement("option",null,"Firestore - Get A Document"),r.a.createElement("option",null,"Firestore - Update A Document"),r.a.createElement("option",null,"Firestore - Delete A Document"),r.a.createElement("option",null,"Firestore - Get A Collection"),r.a.createElement("option",null,"Firestore - Query A Collection"))),"None"!=t.fn&&r.a.createElement(r.a.Fragment,null,("Firestore - Get A Document"==t.fn||"Firestore - Update A Document"==t.fn||"Firestore - Delete A Document"==t.fn)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Group,{controlId:"exampleForm.ControlSelect2"},r.a.createElement(v.a.Label,null,"Document Path:"),r.a.createElement(v.a.Control,{as:"select",type:"text",name:"pathType",onChange:a,onBlur:n,value:t.pathType},r.a.createElement("option",null,"Static Path"),r.a.createElement("option",null,"Dynamic Path"))),"Static Path"==t.pathType&&r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Path:"),r.a.createElement(v.a.Control,{as:"input",type:"text",name:"path",onChange:a,onBlur:n,value:t.path}))),("Firestore - Get A Collection"==t.fn||"Firestore - Query A Collection"==t.fn)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Group,{controlId:"exampleForm.ControlSelect3"},r.a.createElement(v.a.Label,null,"Collection Query:"),r.a.createElement(v.a.Control,{as:"select",type:"text",name:"queryType",onChange:a,onBlur:n,value:t.queryType},r.a.createElement("option",null,"Static Query"),r.a.createElement("option",null,"Dynamic Query"))),"Static Query"==t.queryType&&r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null," Query:"),r.a.createElement(v.a.Control,{as:"input",type:"text",name:"query",onChange:a,onBlur:n,value:t.query}))))))))}))}var B=function(e){var t=e.path,a=e.request,o=e.requestSummary,i=e.operationId,c=e.deleteEndpoint,s=e.editEndpoint,m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],u=d[1];return r.a.createElement(y.a,{style:{marginBottom:"20px",border:"none"}},"post"===a&&r.a.createElement("div",null,r.a.createElement(y.a.Header,{as:"h5",style:{backgroundColor:"#49CC90",color:"#fff",border:"none"}},a," "),r.a.createElement(y.a.Body,{style:{backgroundColor:"#E8F6F0",border:"1px solid #49CC90"}},r.a.createElement(y.a.Title,null,t),r.a.createElement(y.a.Text,null,o)),r.a.createElement(y.a.Footer,{style:{border:"1px solid #49CC90",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},r.a.createElement(h.a,{variant:"secondary",style:{marginRight:"10px"},onClick:function(){return u(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))," Edit"),r.a.createElement(O,{show:p,onHide:function(){return u(!1)},editEndpoint:s,title:"Editing Endpoint",mode:"edit",endpointName:t,requestType:a,summary:o,operationId:i}),r.a.createElement(h.a,{variant:"danger",onClick:function(){return c(t,a,i)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))," Delete"))),"put"===a&&r.a.createElement("div",null,r.a.createElement(y.a.Header,{as:"h5",style:{backgroundColor:"#FCA130",color:"#fff",border:"none"}},a," "),r.a.createElement(y.a.Body,{style:{backgroundColor:"#FBF1E6",border:"1px solid #FCA130"}},r.a.createElement(y.a.Title,null,t),r.a.createElement(y.a.Text,null,o)),r.a.createElement(y.a.Footer,{style:{border:"1px solid #FCA130",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},r.a.createElement(h.a,{variant:"secondary",style:{marginRight:"10px"},onClick:function(){return u(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))," Edit"),r.a.createElement(O,{show:p,onHide:function(){return u(!1)},editEndpoint:s,title:"Editing Endpoint",mode:"edit",endpointName:t,requestType:a,summary:o,operationId:i}),r.a.createElement(h.a,{variant:"danger",onClick:function(){return c(t,a,i)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))," Delete"))),"get"===a&&r.a.createElement("div",null,r.a.createElement(y.a.Header,{as:"h5",style:{backgroundColor:"#61AFFE",color:"#fff",border:"none"}},a," "),r.a.createElement(y.a.Body,{style:{backgroundColor:"#EBF3FB",border:"1px solid #61AFFE"}},r.a.createElement(y.a.Title,null,t),r.a.createElement(y.a.Text,null,o),r.a.createElement(T,null)),r.a.createElement(y.a.Footer,{style:{border:"1px solid #61AFFE",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},r.a.createElement(h.a,{variant:"secondary",style:{marginRight:"10px"},onClick:function(){return u(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))," Edit"),r.a.createElement(O,{show:p,onHide:function(){return u(!1)},editEndpoint:s,title:"Editing Endpoint",mode:"edit",endpointName:t,requestType:a,summary:o,operationId:i}),r.a.createElement(h.a,{variant:"danger",onClick:function(){return c(t,a,i)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))," Delete"))),"delete"===a&&r.a.createElement("div",null,r.a.createElement(y.a.Header,{as:"h5",style:{backgroundColor:"#F93E3E",color:"#fff",border:"none"}},a," "),r.a.createElement(y.a.Body,{style:{backgroundColor:"#FAE7E7",border:"1px solid #F93E3E"}},r.a.createElement(y.a.Title,null,t),r.a.createElement(y.a.Text,null,o)),r.a.createElement(y.a.Footer,{style:{border:"1px solid #F93E3E",borderTop:"none",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},r.a.createElement(h.a,{variant:"secondary",style:{marginRight:"10px"},onClick:function(){return u(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))," Edit"),r.a.createElement(O,{show:p,onHide:function(){return u(!1)},editEndpoint:s,title:"Editing Endpoint",mode:"edit",endpointName:t,requestType:a,summary:o,operationId:i}),r.a.createElement(h.a,{variant:"danger",onClick:function(){return c(t,a,i)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{"fillRule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))," Delete"))))},z=function(e){var t=e.data,a=e.projectId,o=t.paths,i=Object(n.useState)(!1),c=Object(l.a)(i,2),s=c[0],m=c[1],d=Object(n.useState)(JSON.stringify(t)),p=Object(l.a)(d,2),u=p[0],E=p[1];Object(n.useEffect)((function(){C.collection("api").doc(a).set({swaggerDoc:u},{merge:!0})}),[u]);var g=function(e,a,n,r,i){var l=JSON.parse(e),c=n,s=JSON.parse(JSON.stringify(t)),m=JSON.parse(JSON.stringify(o));Object.keys(m[l.endpointName]).length>1?m[l.endpointName][l.requestType].operationId==i&&delete m[l.endpointName][l.requestType]:delete m[l.endpointName],c in m?m[c][a]={tags:[],summary:r,description:"",operationId:i,consumes:["application/json","application/xml"],produces:["application/json","application/xml"],parameters:[],responses:{400:{description:"Unknown error"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[]}:m[c]=Object(I.a)({},a,{tags:[],summary:r,description:"",operationId:i,consumes:["application/json","application/xml"],produces:["application/json","application/xml"],parameters:[],responses:{400:{description:"Unknown error"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[]}),console.log(JSON.stringify(m)),s.paths=m,E(JSON.stringify(s))},y=function(e,a,n){var r=JSON.parse(JSON.stringify(t)),i=JSON.parse(JSON.stringify(o));Object.keys(i[e]).length>1?i[e][a].operationId==n&&delete i[e][a]:delete i[e],console.log(JSON.stringify(i)),r.paths=i,E(JSON.stringify(r))};return r.a.createElement("div",{style:{padding:"20px"}},r.a.createElement("div",{style:{marginBottom:"30px"}},r.a.createElement("h1",null,"Endpoints"),r.a.createElement("hr",{style:{marginTop:"20px",marginBottom:"20px"}}),r.a.createElement(h.a,{variant:"outline-dark",onClick:function(){return m(!0)}},"+ Add new endpoint")),r.a.createElement(O,{show:s,onHide:function(){return m(!1)},addEndpoint:function(e,a,n,r){var i="/"+a,l=JSON.parse(JSON.stringify(t)),c=JSON.parse(JSON.stringify(o));i in c?c[i][e]={tags:[],summary:n,description:"",operationId:r,consumes:["application/json","application/xml"],produces:["application/json","application/xml"],parameters:[],responses:{400:{description:"Unknown error"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[]}:c[i]=Object(I.a)({},e,{tags:[],summary:n,description:"",operationId:r,consumes:["application/json","application/xml"],produces:["application/json","application/xml"],parameters:[],responses:{400:{description:"Unknown error"},404:{description:"Pet not found"},405:{description:"Validation exception"}},security:[]}),l.paths=c,E(JSON.stringify(l))},title:"Adding Endpoint",mode:"add"}),r.a.createElement("div",{style:{marginBottom:"110px"}},Object.keys(o).map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("strong",null,e)),Object.keys(o[e]).map((function(t){return r.a.createElement(B,{path:e,request:t,requestSummary:o[e][t].summary,operationId:o[e][t].operationId,deleteEndpoint:y,editEndpoint:g})})),r.a.createElement("hr",{style:{marginTop:"40px"}}))}))))},k=a(85),q=a.n(k),A=a(125),D=a(126),F=a.n(D),P="http://localhost:8080",H=a(127),L=a(271);function M(e){e.tags;var t=e.apiID,a=Object(n.useState)(!1),o=Object(l.a)(a,2),i=o[0],c=o[1];function s(){return(s=Object(A.a)(q.a.mark((function e(){var a,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),a="".concat(P,"/generate/").concat(t),e.next=5,F.a.get(a);case 5:n=e.sent,L(n.data,"generate.zip"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Error: "+e.t0);case 12:c(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"fixed-bottom p-4",style:{backgroundColor:"#e9ecef"}},r.a.createElement("button",{onClick:function(){return function(){return s.apply(this,arguments)}()},className:"btn btn-success btn-lg mr-2 m-l-auto d-flex justify-content-center align-items-center"},i&&r.a.createElement(H.a,{animation:"border",variant:"light",className:"mr-2"}),"Generate API"))}var R=function(e){var t=e.isBackClicked,a=e.userName,o=e.projectId,i=e.projectName,c=Object(n.useState)({}),s=Object(l.a)(c,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){C.collection("api").doc(o).onSnapshot((function(e){var t=e.data().swaggerDoc;d(JSON.parse(t))}),(function(e){console.log("Error: ",e)}))}),[]),r.a.createElement("div",null,r.a.createElement(g,{userName:a}),r.a.createElement(p.a,null,r.a.createElement(h.a,{variant:"outline-dark",className:"mb-4",onClick:function(){t(!0)}},"< Back"),r.a.createElement("h1",{style:{fontSize:"50px",color:"black"}},i)),m.swagger&&r.a.createElement(z,{data:m,projectId:o}),r.a.createElement(M,{tags:m.tags,apiID:o}))},G=function(e){var t=e.user,a=Object(n.useState)(!1),o=Object(l.a)(a,2),i=(o[0],o[1],Object(n.useState)(!0)),c=Object(l.a)(i,2),s=(c[0],c[1],Object(n.useState)([])),m=Object(l.a)(s,2),d=m[0],u=m[1],E=Object(n.useState)(!1),h=Object(l.a)(E,2),y=h[0],f=h[1],v=Object(n.useState)(""),b=Object(l.a)(v,2),x=b[0],j=b[1],w=function(e){e&&(f(!1),j(""))};return Object(n.useEffect)((function(){C.collection("api").orderBy("timestamp","desc").onSnapshot((function(e){var a=[];e.forEach((function(e){if(e.data().userId===t.uid){var n={};n.id=e.id,n.projectName=e.data().projectName,n.data=e.data(),a.push(n)}})),u(a)}),(function(e){console.log("Error: ",e)}))}),[]),r.a.createElement("div",null,y?d.map((function(e){if(e.id===x.id)return r.a.createElement(R,{userName:t.displayName,projectName:x.projectName,projectId:x.id,isBackClicked:w})})):r.a.createElement("div",null,r.a.createElement(g,{userName:t.displayName}),r.a.createElement(p.a,null,r.a.createElement("h1",{style:{fontSize:"50px",color:"black"}},"Hello ",t.displayName," \ud83d\udc4b"),r.a.createElement("p",null,"Welcome to API builder. The best place to create your APIs with ease.")),d&&r.a.createElement(S,{userId:t.uid,data:d,isGoToEndpointClicked:function(e,t){e&&(f(!0),j(t))}})))};var J=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i={signInFlow:"popup",signInOptions:[c.a.auth.GoogleAuthProvider.PROVIDER_ID,c.a.auth.GithubAuthProvider.PROVIDER_ID,c.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}};return Object(n.useEffect)((function(){c.a.auth().onAuthStateChanged((function(e){o(!!e)}))}),[]),r.a.createElement("div",null,a?r.a.createElement(G,{user:c.a.auth().currentUser}):r.a.createElement(d,{uiConfig:i,firebaseAuth:c.a.auth()}))};a(272);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.929112bc.chunk.js.map