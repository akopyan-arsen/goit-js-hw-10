import"./assets/styles-215e0f27.js";import{i}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form"),l=document.querySelector('input[type="number"]'),u=document.querySelectorAll('input[name="state"]');n.addEventListener("submit",m);function m(t){t.preventDefault();let o=parseInt(l.value),s;u.forEach(e=>{e.checked&&(s=e.value)}),new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(o):r(o)},o)}).then(e=>{i.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:0,backgroundColor:"#59A10D",messageColor:"#fff",timeout:3e3,icon:!1})}).catch(e=>{i.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight",timeout:0,backgroundColor:"#EF4040",messageColor:"#fff",timeout:3e3,icon:!1})})}n.addEventListener("keypress",function(t){t.key==="Enter"&&t.preventDefault()});
//# sourceMappingURL=commonHelpers2.js.map
