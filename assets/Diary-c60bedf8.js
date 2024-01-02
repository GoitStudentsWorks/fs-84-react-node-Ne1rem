import{j as e,r as l,L as v,u as I,i as z,g as S}from"./index-7a7fd988.js";import{n as t,L,M as T,s as k,b as C,l as D,d as E,a as M}from"./snack-44993bb8.js";import"./emotion-element-c39617d8.browser.esm-6ac6485b.js";import"./index.esm-f60b673d.js";import"./hoist-non-react-statics.cjs-40c9266a.js";const W=t.div`
@media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 2);
  }`,N=t.div`
@media screen and (max-width: 834px) {
width: 180px;
  }
@media screen and (min-width: 834px) {
   display: flex;
   justify-content: space-between;
   margin-bottom:6px;
   margin-right: 54px;
   align-items: center;
  }`,q=t.div`
display: flex;
align-items: center;
text-align: left;
@media screen and (max-width: 834px) {
    margin-bottom: 12px;
    margin-right: 20px;
  }`,A=t.h3`
margin-left: 12px;
text-transform: capitalize;
color: var(--color-primary-white);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
font-size: 18px;
font-weight: 400;
line-height: 1.44;
@media screen and (min-width: 834px) {
    font-size: 22px;
  }`;t.li`
padding-left: 20px;`;const F=t.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--color-primary-black-2);
border-radius: 12px;
padding: 16px 12px;
height: 232px;
width: 100%;
@media screen and (min-width: 834px) {
    height: 240px;
    width: 780px;
    padding: 32px 14px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }`,d=t.li`
display: flex;
font-size: 14px;
color: var(--color-primary-white);
font-weight: 600;
line-height: 1.42;
width: 100%;`,P=t.button`
background: none;
border: none;
margin-left: 16px;
color: var(--color-primary-green-lite);
font-size: 14px;
font-weight: 500;
line-height: 1.42;`,R=t.div`
position: relative;`,$=t.button`
position: absolute;
top: 0;
right: 12px;
display: flex;
align-items: center;
background: none;
border: none;
margin-left: 14px;
color: var(--color-primary-grey);
font-size: 14px;
font-weight: 400;
line-height: 1.42;
&:hover{
    color: var(--color-primary-green-lite);
} `,H=t.svg`
width: 16px;
height: 16px;
stroke: var(--color-primary-grey);
&:hover{
  stroke: var(--color-primary-green-lite)
}
`,O=t.div`
display: flex;
flex-wrap: wrap;`,U=t.div`
width: 170px;
margin-left: 16px;
margin-bottom: 6px;
text-transform: capitalize;
@media screen and (min-width: 834px) {
    width: 210px;
    font-size: 14px;
    line-height: 1.42;
  }`,_=t.ul`
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
width: 210px;
color: var(--color-primary-grey);
margin-left: 16px;
@media screen and (min-width: 834px) {
  justify-content: space-around;
  width: 350px;
    font-size: 14px;
    line-height: 1.42;
    color: var(--color-primary-white);
  }`,B=({intakeItem:s})=>e.jsxs(O,{children:[e.jsx(U,{children:s.name}),e.jsxs(_,{children:[e.jsxs("li",{children:["Carb. ",s.carbonohidrates]}),e.jsxs("li",{children:["Prot. ",s.protein]}),e.jsxs("li",{children:["Fat. ",s.fat]})]})]}),G="/fs-84-react-node-Ne1rem/assets/edit-04fc11be.svg",J=({name:s,img:o,intake:r})=>{var c,x,h,m;const[a,g]=l.useState(!1),[f,w]=l.useState(null),[u,y]=l.useState(null);let n;switch(s){case"breakfast":n=(c=r==null?void 0:r.breakfast)==null?void 0:c.dish;break;case"lunch":n=(x=r==null?void 0:r.lunch)==null?void 0:x.dish;break;case"dinner":n=(h=r==null?void 0:r.dinner)==null?void 0:h.dish;break;case"snack":n=(m=r==null?void 0:r.snack)==null?void 0:m.dish;break;default:n=null;break}const p=(i,b)=>{w(i),g(!a),y(b)},j=[0,1,2,3];return e.jsxs(W,{children:[e.jsxs(N,{children:[e.jsxs(q,{children:[e.jsx("img",{src:o}),e.jsx(A,{children:s})]}),e.jsx(L,{name:s})]}),e.jsx(F,{children:j.map(i=>e.jsxs(R,{children:[n&&n[i]?e.jsxs(d,{children:[i+1,e.jsx(B,{intakeItem:n[i]})]},i):i===0||i===(n==null?void 0:n.length)?e.jsxs(d,{children:[i+1,e.jsx(P,{onClick:()=>p("POST",null),children:"+ Record your meal"})]},i):e.jsx(d,{children:i+1},i),n&&n[i]?e.jsxs($,{onClick:()=>p("PUT",n[i]._id),children:[e.jsx(H,{children:e.jsx("use",{href:`${G}#icon-edit`})}),"Edit"]}):null]},i))}),a&&e.jsx(T,{name:s,img:o,onClose:p,requestType:f,idIntake:u})]})},K=t.div`
margin-left: auto;
margin-right: auto;
text-align: left;
width: 300px;
padding: 16px 10px 16px 10px;
  @media screen and (min-width: 834px) {
   width: 834px;
   padding: 24px 27px 16px 27px;
  }  
   @media screen and (min-width: 1440px) {
   width: 1440px;
   padding: 20px 34px 52px 34px;}`,Q=t.img`
width: 16px;
height: 16px;
@media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }`,V=t.h2`
margin-left: 4px;
color: var(--color-primary-white);
font-size: 24px;
font-weight: 500;
line-height: 1.25;
@media screen and (min-width: 834px) {
    margin-left: 12px;
    font-size: 30px;
    line-height: 1.2;
  }`,X=t(v)`
display: flex;
margin-bottom: 16px;
align-items: center;
text-align: left;`,Y=t.ul`
@media screen and (min-width: 1440px) {
   display:flex;
   flex-wrap: wrap;
   gap: 20px;
  }`,Z="/fs-84-react-node-Ne1rem/assets/arrow-right-1ad1ad4c.svg",se=()=>{const s=I();l.useEffect(()=>{s(z())},[s]);const o=S(k),r=[{name:"breakfast",img:C},{name:"lunch",img:D},{name:"dinner",img:E},{name:"snack",img:M}];return e.jsxs(K,{children:[e.jsxs(X,{to:"/",children:[e.jsx(Q,{src:Z}),e.jsx(V,{children:"Diary"})]}),e.jsx(Y,{children:r.map(a=>e.jsx(J,{name:a.name,img:a.img,intake:o},a.name))})]})};export{se as default};
