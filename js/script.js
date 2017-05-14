var con1 = document.querySelector(".contacts_batton");
var con2 = document.querySelector(".contact_us");
var con3 = document.querySelector(".contact_close_batton");

con1.addEventListener ("click", function(){
	con2.classList.toggle("show");
});
con3.addEventListener ("click", function(){
	con2.classList.remove("show");
});