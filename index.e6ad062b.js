var e=document.querySelector("body"),t=new Promise(function(e,t){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){return t("First promise was rejected")},3e3)}),n=new Promise(function(e){var t=!1,n=!1,o=function(){(t||n)&&e("Second promise was resolved")};document.addEventListener("click",function(){t=!0,o()}),document.addEventListener("contextmenu",function(e){e.preventDefault(),n=!0,o()})}),o=new Promise(function(e){var t=!1,n=!1,o=function(){t&&n&&e("Third promise was resolved")};document.addEventListener("click",function(){t=!0,o()}),document.addEventListener("contextmenu",function(e){e.preventDefault(),n=!0,o()})}),c=function(t){var n=document.createElement("div");n.classList.add("message","success"),n.dataset.qa="notification",n.textContent=t,e.append(n)};t.then(c).catch(function(t){var n=document.createElement("div");n.classList.add("message","error"),n.dataset.qa="notification",n.textContent=t,e.append(n)}),n.then(c),o.then(c);
//# sourceMappingURL=index.e6ad062b.js.map
