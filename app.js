var darkBtn =document.querySelector(".dark-mode");

darkBtn.onclick = function(){
   darkBtn.classList.toggle("dark-btn-on");
   document.body.classList.toggle("dark-theme");
 
   
}