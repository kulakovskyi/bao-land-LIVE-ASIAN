"use strict";!function(){var e;1280<=window.innerWidth&&(e=document.getElementById("scene"),new Parallax(e))}(),window.addEventListener("orientationchange",function(){window.location.reload()}),function(){var e=new URL(window.location.href);e.searchParams.has("qtag")&&localStorage.setItem("qtag",e.searchParams.get("qtag")),window.addEventListener("click",function(e){var t=e.target.closest("a");t&&(e.preventDefault(),(e=new URL(t.href)).searchParams.set("qtag",localStorage.getItem("qtag")),document.location.href=e)})}();