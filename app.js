// const toggleBtn = document.querySelector(".sidebar-toggle");
const btnToggle = document.querySelector(".btn-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".side-bar");

btnToggle.addEventListener("click", function () {
	// alert("OK");
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");  
});


const clickbtn = document.querySelector(".clickbtn");
const myDropdown = document.getElementById("myDropdown");
clickbtn.addEventListener("click", ()=>{
	// alert(myDropdown.classList);
  myDropdown.classList.toggle("show-dropdown");
});


const resDropBtn = document.querySelector(".res-drop-btn");
const navItems = document.querySelector(".nav-items");
resDropBtn.addEventListener("click", ()=>{
	// alert("OK");
  navItems.classList.toggle("nav-items-display");
});

