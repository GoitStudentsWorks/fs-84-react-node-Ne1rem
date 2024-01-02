import{n as q,r as P,u as R,i as G,g as W,j as r,o as H,p as K}from"./index-7a7fd988.js";import{_ as J,w as Q,T as X,g as Y,s as Z,r as V,u as ee,i as te}from"./emotion-element-c39617d8.browser.esm-6ac6485b.js";import{F as ae,E as re,c as M,d as ie,a as oe,b as $,e as ne,f as se,g as de}from"./index.esm-f60b673d.js";var le=q,ce=function(e){return e!=="theme"},A=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?le:ce},L=function(e,a,t){var o;if(a){var p=a.shouldForwardProp;o=e.__emotion_forwardProp&&p?function(u){return e.__emotion_forwardProp(u)&&p(u)}:p}return typeof o!="function"&&t&&(o=e.__emotion_forwardProp),o},he=function(e){var a=e.cache,t=e.serialized,o=e.isStringTag;return V(a,t,o),ee(function(){return te(a,t,o)}),null},pe=function i(e,a){var t=e.__emotion_real===e,o=t&&e.__emotion_base||e,p,u;a!==void 0&&(p=a.label,u=a.target);var w=L(e,a,t),g=w||A(o),S=!g("as");return function(){var f=arguments,x=t&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(p!==void 0&&x.push("label:"+p+";"),f[0]==null||f[0].raw===void 0)x.push.apply(x,f);else{x.push(f[0][0]);for(var z=f.length,h=1;h<z;h++)x.push(f[h],f[0][h])}var s=Q(function(d,v,N){var F=S&&d.as||o,y="",l=[],c=d;if(d.theme==null){c={};for(var m in d)c[m]=d[m];c.theme=P.useContext(X)}typeof d.className=="string"?y=Y(v.registered,l,d.className):d.className!=null&&(y=d.className+" ");var k=Z(x.concat(l),v.registered,c);y+=v.key+"-"+k.name,u!==void 0&&(y+=" "+u);var _=S&&w===void 0?A(F):g,j={};for(var b in d)S&&b==="as"||_(b)&&(j[b]=d[b]);return j.className=y,j.ref=N,P.createElement(P.Fragment,null,P.createElement(he,{cache:v,serialized:k,isStringTag:typeof F=="string"}),P.createElement(F,j))});return s.displayName=p!==void 0?p:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",s.defaultProps=e.defaultProps,s.__emotion_real=s,s.__emotion_base=o,s.__emotion_styles=x,s.__emotion_forwardProp=w,Object.defineProperty(s,"toString",{value:function(){return"."+u}}),s.withComponent=function(d,v){return i(d,J({},a,v,{shouldForwardProp:L(s,v,!0)})).apply(void 0,x)},s}},me=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],n=pe.bind();me.forEach(function(i){n[i]=n(i)});const U=i=>i.intake.intake,T=n.li`
padding-right: 20px;`,fe=n.ul`
display: flex;
color: var(--color-primary-white);
font-size: 14px;
font-weight: 400;
line-height: 1.42;
@media screen and (max-width: 834px) {
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;
  }
`,O=n.span`
color: var(--color-primary-grey);
font-weight: 400;`,Le=({name:i})=>{const e=R();P.useEffect(()=>{e(G())},[e]);const a=W(U);let t;switch(i){case"breakfast":t=a.breakfast;break;case"lunch":t=a.lunch;break;case"dinner":t=a.dinner;break;case"snack":t=a.snack;break;default:t=null;break}const o=t&&t.totalCarbs!==void 0?t.totalCarbs:0,p=t&&t.totalProtein!==void 0?t.totalProtein:0,u=t&&t.totalFat!==void 0?t.totalFat:0;return r.jsxs(fe,{children:[r.jsxs(T,{children:["Carbonohidrates: ",r.jsx(O,{children:o})]}),r.jsxs(T,{children:["Protein: ",r.jsx(O,{children:p})]}),r.jsxs(T,{children:["Fat: ",r.jsx(O,{children:u})]})]})},ue=n.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 20px;
@media only screen and (min-width: 834px){
  flex-direction: row; 
  gap: 12px;
  }
`;n.input`
  min-width: 255px;
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;
  &.error {
    border: 1px solid #e74a3b;
  }`;const I=n(ae)`
  /* min-width: 61px; */
  padding: 8px;
  color: var(--color-primary-grey);
  font-size: 14px; 
  font-weight: 400;
  line-height: 1.42;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--color-primary-green-lite);
  background: transparent;
  
  &.error {
    border: 1px solid #e74a3b;
  }

  &.correct {
    border: 1px solid var(--color-primary-green-lite);
  }
  `,ge=n.div`
display: flex;
gap: 8px;
@media only screen and (min-width: 834px){
  width: 185px;
  gap: 12px;
}`,be=n.svg`
width: 20px;
height: 20px;
stroke: var(--color-primary-green-lite);
&:hover{
  stroke: var(--secondary-color-yellow)
}`,xe=n.button`
background-color: transparent;
border: none;
padding: 0;
`,ve=n(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 255px;
  }
`,we=n(I)`
width: 276px;


@media screen and (min-width: 834px) {
   max-width: 100px;
  }
`,ye=n(I)`
width: 276px;

@media screen and (min-width: 834px) {
   max-width: 86px;
  }
`,ke=n(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 61px;
  }
`,je=n(I)`
max-width: 120px;

@media screen and (min-width: 834px) {
   max-width: 78px;
  }
`,E=n.div`
position: relative;
`,C=n(re)`
margin-top: 2px;
margin-left: 10px;
position: absolute;
color: #E74A3B;
text-align: center;
font-size: 12px;
font-weight: 400;
line-height: 14px;

@media screen and (min-width: 834px) {
  margin-top: 4px;
  }

`;n.div`
  position: absolute;
  top: 40px;
  left: 10px;
  color: #E74A3B;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;
`;const Pe="/fs-84-react-node-Ne1rem/assets/trash-fb77e3c9.svg",Se=({validation:i,index:e,touched:a,errors:t,values:o,remove:p,setFieldValue:u})=>{const w=(g,S,f)=>{S.dish.length>1?p(g):(f(`dish[${g}].name`,""),f(`dish[${g}].carbonohidrates`,""),f(`dish[${g}].protein`,""),f(`dish[${g}].fat`,""),f(`dish[${g}].calories`,""))};return r.jsxs(ue,{children:[r.jsxs(E,{children:[r.jsx(ve,{className:i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].name&&t.dish&&t.dish[e]&&t.dish[e].name?"error":"correct",id:`name${e}`,name:`dish[${e}].name`,placeholder:"The name of the product or dish",value:o.dish[e].name}),i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].name&&t.dish&&t.dish[e]&&t.dish[e].name&&r.jsx(C,{name:`dish[${e}].name`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(we,{className:i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates?"error":"correct",id:`carbonohidrates${e}`,name:`dish[${e}].carbonohidrates`,placeholder:"Carbonoh.",value:o.dish[e].carbonohidrates}),i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].carbonohidrates`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(ye,{className:i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].protein&&t.dish&&t.dish[e]&&t.dish[e].protein?"error":"correct",id:`protein${e}`,name:`dish[${e}].protein`,placeholder:"Protein",value:o.dish[e].protein}),i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].carbonohidrates&&t.dish&&t.dish[e]&&t.dish[e].carbonohidrates&&r.jsx(C,{name:`dish[${e}].protein`,component:"div"})]}),r.jsxs(ge,{children:[r.jsxs(E,{children:[r.jsx(ke,{className:i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].fat&&t.dish&&t.dish[e]&&t.dish[e].fat?"error":"correct",id:`fat${e}`,name:`dish[${e}].fat`,placeholder:"Fat",value:o.dish[e].fat}),i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].fat&&t.dish&&t.dish[e]&&t.dish[e].fat&&r.jsx(C,{name:`dish[${e}].fat`,component:"div"})]}),r.jsxs(E,{children:[r.jsx(je,{className:i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].calories&&t.dish&&t.dish[e]&&t.dish[e].calories?"error":"correct",id:`calories${e}`,name:`dish[${e}].calories`,placeholder:"Calories",value:o.dish[e].calories}),i==="validation"&&a.dish&&a.dish[e]&&a.dish[e].calories&&t.dish&&t.dish[e]&&t.dish[e].calories&&r.jsx(C,{name:`dish[${e}].calories`,component:"div"})]}),r.jsx(xe,{type:"button",onClick:()=>w(e,o,u),children:r.jsx(be,{children:r.jsx("use",{href:`${Pe}#icon-trash`})})})]})]})},Fe=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 1200;`,_e=n.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 12px;
  padding: 16px 12px 40px 12px;
  background-color: var(--color-primary-black-2);
  @media only screen and (min-width: 834px){
    width: 708px;
    padding: 24px 24px 24px 24px;
  }`,Ee=n.h2`
color: var(--color-primary-white);
font-size: 24px;
line-height: 1.25;
margin-bottom: 24px;
font-weight: 500; 
@media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }`,Ce=n.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom: 16px;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,Ie=n.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`,Ne=n.button`
width: 276px;
height: 36px;
border-radius: 12px;
border: none;
background-color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
font-style: normal;
line-height: 1.42;
color: var(--color-primary-black-2);
margin-bottom: 8px;

@media only screen and (min-width: 834px){
  width: 212px; 
  margin-bottom: 0;
  }`,$e=n.button`
width: 276px;
height: 36px;
border-radius: 12px;
border: none;
background-color: transparent;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.42;
color: var(--color-primary-grey);

transition:
    background-color 0.4s cubic-bezier(0, 0, 1, 1),
    color 0.4s cubic-bezier(0, 0, 1, 1);
&:hover
{ color: var(--color-primary-black-2);
  background: var(--color-primary-green-lite);
  font-weight: 500;
}
@media only screen and (min-width: 834px){
  width: 212px; 
  }`,ze=n.button`
background: none;
border: none;
text-align: left;
margin-top: 20px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,Te=n.div`
margin-top: 64px;
@media only screen and (min-width: 834px){
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  margin-top: 120px; 
  }`,B=M({dish:ie().of(M().shape({name:oe().required("Enter a name dish").min(2,"Very short"),carbonohidrates:$().required("Enter a number").max(999.99,"Maximum 999.99"),protein:$().required("Enter a number").max(999.99,"Maximum 999.99"),fat:$().required("Enter a number").max(999.99,"Maximum 999.99"),calories:$().required("Enter a number").max(999.99,"Maximum 999.99")}))}),D={name:"",carbonohidrates:"",protein:"",fat:"",calories:""},Be=({name:i,img:e,onClose:a,requestType:t,idIntake:o})=>{var v,N,F,y;const p=R(),[u,w]=P.useState(""),g=()=>{w("validation")};P.useEffect(()=>{const l=document.body.style.overflow,c=m=>{m.code==="Escape"&&a()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow=l}},[a]);const S=l=>{l.currentTarget===l.target&&a()},f=l=>{if(t==="POST"){const c={[i.toLowerCase()]:{dish:l.dish.map(m=>({name:m.name,carbonohidrates:parseFloat(m.carbonohidrates),protein:parseFloat(m.protein),fat:parseFloat(m.fat),calories:parseFloat(m.calories)}))}};p(H(c))}else if(t==="PUT"){const c={[i.toLowerCase()]:{dish:[{name:l.dish[0].name,carbonohidrates:parseFloat(l.dish[0].carbonohidrates),protein:parseFloat(l.dish[0].protein),fat:parseFloat(l.dish[0].fat),calories:parseFloat(l.dish[0].calories)}]}};console.log(o),console.log(c),p(K({id:o,intakeData:c}))}a()},x=4,z=(l,{values:c,setFieldValue:m,errors:k})=>{if(l.preventDefault(),t==="PUT")return;if(c.dish.some((j,b)=>!!(k.dish&&k.dish[b]))){w("validation");return}if(c.dish.length<x){const j=c.dish.length-1,b=c.dish[j];B.validate(b,{abortEarly:!1}).then(()=>{m("dish",[...c.dish,D])})}else return},h=W(U);let s;switch(i){case"breakfast":s=(v=h==null?void 0:h.breakfast)==null?void 0:v.dish;break;case"lunch":s=(N=h==null?void 0:h.lunch)==null?void 0:N.dish;break;case"dinner":s=(F=h==null?void 0:h.dinner)==null?void 0:F.dish;break;case"snack":s=(y=h==null?void 0:h.snack)==null?void 0:y.dish;break;default:s=null;break}const d=t==="PUT"?s.find(l=>l._id===o):null;return r.jsx(Fe,{onClick:S,children:r.jsxs(_e,{children:[r.jsx(Ee,{children:"Record your meal"}),r.jsxs(Ce,{children:[r.jsx("img",{src:e,alt:i}),r.jsx(Ie,{children:i})]}),r.jsx(ne,{initialValues:t==="PUT"?{dish:s&&s.length?[{name:d.name||"",carbonohidrates:d.carbonohidrates||"",protein:d.protein||"",fat:d.fat||"",calories:d.calories||"",productId:d.productId||""}]:[D]}:{dish:[D]},onSubmit:f,validationSchema:B,children:({errors:l,touched:c,values:m,setFieldValue:k})=>r.jsxs(se,{autoComplete:"off",children:[r.jsx(de,{name:"dish",children:({remove:_})=>r.jsx("ul",{children:m.dish.map((j,b)=>r.jsx("li",{children:r.jsx(Se,{validation:u,index:b,errors:l,touched:c,values:m,setFieldValue:k,remove:_})},b))})}),t==="POST"&&(!s||s.length===0)&&r.jsx(ze,{type:"button",onClick:_=>z(_,{values:m,setFieldValue:k,errors:l}),children:"+ Add more"}),r.jsxs(Te,{children:[r.jsx(Ne,{type:"submit",onClick:()=>{g()},children:"Confirm"}),r.jsx($e,{type:"button",onClick:a,children:"Cancel"})]})]})})]})})},Re="/fs-84-react-node-Ne1rem/assets/breakfast-d9429527.svg",We="/fs-84-react-node-Ne1rem/assets/lunch-233cf7ab.svg",Ue="/fs-84-react-node-Ne1rem/assets/dinner-392691b4.svg",qe="/fs-84-react-node-Ne1rem/assets/snack-6fc8f33a.svg";export{Le as L,Be as M,qe as a,Re as b,Ue as d,We as l,n,U as s,Pe as t};
