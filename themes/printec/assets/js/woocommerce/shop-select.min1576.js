!function(d){"use strict";function e(e,t){let s,n,i,c,l,r,o;s=document.getElementsByClassName(e);let a=d(t);for(n=0;n<s.length;n++){for(c=s[n].getElementsByTagName("select")[0],l=document.createElement("DIV"),l.setAttribute("class","select-selected"),l.innerHTML=c.options[c.selectedIndex].innerHTML,s[n].appendChild(l),r=document.createElement("DIV"),r.setAttribute("class","select-items select-hide"),i=1;i<c.length;i++)o=document.createElement("DIV"),o.innerHTML=c.options[i].innerHTML,o.addEventListener("click",function(e){let t,s,n,i,c;for(i=this.parentNode.parentNode.getElementsByTagName("select")[0],c=this.parentNode.previousSibling,s=0;s<i.length;s++)if(i.options[s].innerHTML==this.innerHTML){for(i.selectedIndex=s,c.innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),n=0;n<t.length;n++)t[n].removeAttribute("class");this.setAttribute("class","same-as-selected");break}c.click(),a.trigger("change")}),r.appendChild(o);s[n].appendChild(r),l.addEventListener("click",function(e){e.stopPropagation(),m(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}}function m(e){let t,s,n,i=[];for(t=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),n=0;n<s.length;n++)e==s[n]?i.push(n):s[n].classList.remove("select-arrow-active");for(n=0;n<t.length;n++)i.indexOf(n)&&t[n].classList.add("select-hide")}document.addEventListener("click",m),d(document).ready(function(){e("woocommerce-ordering",".woocommerce-ordering .orderby"),e("printec-products-per-page",".printec-products-per-page .per_page")})}(jQuery);