const hamb_icon = document.querySelector(".bi-list");
const nav_list = document.querySelector(".nav-list");

hamb_icon.addEventListener("click", ()=>{
  setTimeout(go_slow, 125);
})

function go_slow(){
  nav_list.classList.toggle("visible");
}