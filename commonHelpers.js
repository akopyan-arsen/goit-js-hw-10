import"./assets/styles-ff73d7a4.js";import{f,i as h}from"./assets/vendor-77e16229.js";const n=document.querySelector("button[data-start]"),s=document.querySelector("#datetime-picker"),y=document.querySelector(".value[data-days]"),p=document.querySelector(".value[data-hours]"),M=document.querySelector(".value[data-minutes]"),T=document.querySelector(".value[data-seconds]");let r=null,i=null;n.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1},onClose(e){if(e[0].getTime()>Date.now())r=e[0].getTime(),n.disabled=!1;else return n.disabled=!0,h.error({message:"Please choose a date in the future",position:"topRight",timeout:0,backgroundColor:"#EF4040",messageColor:"#fff",timeout:1500})},onChange(e){e[0].getTime()<=Date.now()&&(n.disabled=!0)}};f("#datetime-picker",b);function g(){r!==null&&(n.disabled=!0,s.disabled=!0,i=setInterval(()=>{const e=Date.now();let t=r-e;t=Math.max(t,0),v(S(t)),t<=0&&(clearInterval(i),s.disabled=!1)},1e3))}function S(e){const c=o(Math.floor(e/864e5)),d=o(Math.floor(e%864e5/36e5)),l=o(Math.floor(e%36e5/6e4)),m=o(Math.floor(e%6e4/1e3));return{days:c,hours:d,minutes:l,seconds:m}}function o(e){return String(e).padStart(2,"0")}function v({days:e,hours:t,minutes:a,seconds:u}){y.innerHTML=`${e}`,p.innerHTML=`${t}`,M.innerHTML=`${a}`,T.innerHTML=`${u}`}n.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
