"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[778],{778:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var r=e(1413),s=e(2791),o=e(3531),a=e(6070),i="Profile_content__N3hrN",u={addPostButton:"MyPosts_addPostButton__p2DvC",title:"MyPosts_title__DTNf-"},c={post:"Post_post__tRpXw",likeButton:"Post_likeButton__lkdEe",nameAge:"Post_nameAge__fnBJ9",content:"Post_content__hCIRA"},l=e(184),f=function(t){return(0,l.jsxs)("div",{className:c.post,children:[(0,l.jsx)("img",{src:"https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg"}),(0,l.jsxs)("div",{className:c.nameAge,children:[t.name,", ",t.age]}),(0,l.jsx)("div",{className:c.content,children:t.post}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:c.likeButton,children:"Like"}),(0,l.jsxs)("span",{className:c.likesCount,children:[" ",t.likesCount]})]})]})},p=function(t){var n=t.posts.map((function(t){return(0,l.jsx)(f,{name:t.name,age:t.age,post:t.post,likesCount:t.likesCount},t.id)})),e=s.createRef();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:u.title,children:"My posts"}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("textarea",{className:u.postInput,ref:e,onChange:function(){var n=e.current.value;t.updatePostText(n)},value:t.newPostText}),(0,l.jsx)("button",{className:u.addPostButton,onClick:function(){t.addPost()},children:"Add post"})]})}),(0,l.jsx)("div",{className:u.posts,children:n})]})},d=function(t){return t.profilePage.status},h=function(t){return t.profilePage.profile},m=function(t){return t.profilePage.posts},v=function(t){return t.profilePage.newPostText},g=(0,o.$j)((function(t){return{posts:m(t),newPostText:v(t)}}),{updatePostText:a.Vi,addPost:a.q2})(p),x={wrapper:"ProfileInfo_wrapper__iTn3P",avatar:"ProfileInfo_avatar__shGc9",name:"ProfileInfo_name__JFOe2",content:"ProfileInfo_content__uf5IR",avatarInfoContainer:"ProfileInfo_avatarInfoContainer__wE888",status:"ProfileInfo_status__VKxBp",editStatus:"ProfileInfo_editStatus__BPHVY",lookingJobImg:"ProfileInfo_lookingJobImg__tx4At",contactsItems:"ProfileInfo_contactsItems__Rf-Ir",contact:"ProfileInfo_contact__rmXxt"},j=e(4941),_=e(2315),b=e(885),k=function(t){(0,s.useEffect)((function(){c(t.status)}),[t.status]);var n=(0,s.useState)(!1),e=(0,b.Z)(n,2),r=e[0],o=e[1],a=(0,s.useState)(t.status),i=(0,b.Z)(a,2),u=i[0],c=i[1];return(0,l.jsxs)(l.Fragment,{children:[!r&&(0,l.jsx)("span",{className:x.status,onDoubleClick:function(){o(!0)},children:null!=t.status?t.status:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"}),r&&(0,l.jsx)("textarea",{className:x.editStatus,value:u,autoFocus:!0,onBlur:function(){o(!1),t.setStatus(u)},onChange:function(t){c(t.currentTarget.value)}})]})},N=function(t){return null===t.profile?(0,l.jsx)("div",{className:x.preloader,children:(0,l.jsx)(j.Z,{isFetching:t.isFetching,userId:1})}):(0,l.jsx)("div",{className:x.content,children:(0,l.jsxs)("div",{className:x.avatarInfoContainer,children:[(0,l.jsx)("div",{className:x.avatar,children:(0,l.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:_})}),(0,l.jsxs)("div",{className:x.info,children:[(0,l.jsx)("div",{className:x.name,children:t.profile.fullName}),(0,l.jsx)(k,{status:t.status,setStatus:t.setStatus}),(0,l.jsxs)("div",{className:x.lookingJob,children:[(0,l.jsx)("span",{className:x.lookingForAJob,children:"Looking for a job:"}),(0,l.jsx)("br",{}),(0,l.jsx)("img",{className:x.lookingJobImg,src:1==t.profile.lookingForAJob?"https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png":"https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-340x340.png"}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:x.jobStatusDescription,children:t.profile.lookingForAJobDescription})]})]}),(0,l.jsx)("div",{className:x.contacts,children:(0,l.jsxs)("div",{className:x.contactsItems,children:[null!=t.profile.contacts.facebook?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.facebook,children:"Facebook"})}):null,null!=t.profile.contacts.website?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.website,children:"WebSite"})}):null,null!=t.profile.contacts.vk?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.vk,children:"VK"})}):null,null!=t.profile.contacts.twitter?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.twitter,children:"Twitter"})}):null,null!=t.profile.contacts.instagram?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.instagram,children:"Instagram"})}):null,null!=t.profile.contacts.youtube?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.youtube,children:"YouTube"})}):null,null!=t.profile.contacts.github?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.github,children:"GitHub"})}):null,null!=t.profile.contacts.mainLink?(0,l.jsx)("div",{children:(0,l.jsx)("a",{className:x.contact,href:"http://"+t.profile.contacts.mainLink,children:"MainLink"})}):null]})})]})})},P=function(t){return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)(N,{profile:t.profile,isFetching:t.isFetching,status:t.status,setStatus:t.setStatus,userId:t.params.userId}),(0,l.jsx)(g,{})]})},y=(e(1548),e(7689)),I=function(t){return function(n){return(0,l.jsx)(t,(0,r.Z)((0,r.Z)({},n),{},{params:(0,y.UO)()}))}},w=e(7781),C=(e(3035),e(1410)),S=e(59),F=(0,w.qC)((0,o.$j)((function(t){return{profile:h(t),isFetching:(0,C.ab)(t),isAuth:(0,S.O)(t),status:d(t)}}),{getProfile:a.Ai,getStatus:a.lR,setStatus:a.Tf}),I)((function(t){return(0,s.useEffect)((function(){var n="me"===t.params.userId?26362:t.params.userId;t.getProfile(n),t.getStatus(n)}),[]),(0,s.useEffect)((function(){var n="me"===t.params.userId?26362:t.params.userId;t.getStatus(n)})),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(P,(0,r.Z)({},t))})}))},1410:function(t,n,e){e.d(n,{FZ:function(){return p},yg:function(){return h},ab:function(){return d},b7:function(){return l},qZ:function(){return f},Cu:function(){return c}});e(3531);var r="NOT_FOUND";var s=function(t,n){return t===n};function o(t,n){var e="object"===typeof n?n:{equalityCheck:n},o=e.equalityCheck,a=void 0===o?s:o,i=e.maxSize,u=void 0===i?1:i,c=e.resultEqualityCheck,l=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!t(n[s],e[s]))return!1;return!0}}(a),f=1===u?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:r},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(t,n){var e=[];function s(t){var s=e.findIndex((function(e){return n(t,e.key)}));if(s>-1){var o=e[s];return s>0&&(e.splice(s,1),e.unshift(o)),o.value}return r}return{get:s,put:function(n,o){s(n)===r&&(e.unshift({key:n,value:o}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,l);function p(){var n=f.get(arguments);if(n===r){if(n=t.apply(null,arguments),c){var e=f.getEntries(),s=e.find((function(t){return c(t.value,n)}));s&&(n=s.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function a(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function i(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var s=function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,f=l.memoizeOptions,p=void 0===f?e:f,d=Array.isArray(p)?p:[p],h=a(r),m=t.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),v=t((function(){for(var t=[],n=h.length,e=0;e<n;e++)t.push(h[e].apply(null,arguments));return o=m.apply(null,t)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:h,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return s}var u=i(o),c=u((function(t){return t.users.users}),(function(t){return console.log("PRIVET"),t})),l=function(t){return t.users.pageSize},f=function(t){return t.users.totalUsersCount},p=function(t){return t.users.currentPage},d=function(t){return t.users.isFetching},h=function(t){return t.users.followingInProgress}}}]);
//# sourceMappingURL=778.fd60ec8d.chunk.js.map