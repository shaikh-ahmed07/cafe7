
const menuItems = {
  burgers:"bur.html",
  burger:"bur.html",
  "veg pizza":"piz.html",
 "chicken pizza":"piz.html",
  pizza:"piz.html",
  wraps:"wra.html",
  wrap:"wra.html",
  shawarma:"shaw.html",
  deserts:"/cafe7/desert/deserts.html",
  desert: "/cafe7/desert/deserts.html",
  sweet: "/cafe7/desert/deserts.html",
  sweets: "/cafe7/desert/deserts.html",
  shakes:"shakes.html",
  shake:"shakes.html",
  refreshments:"shakes.html",
  refreshment:"shakes.html",
  coffee:"coffee.html"
};
document.querySelector(".btn.btn-outline-success").addEventListener("click",function(e){
  e.preventDefault();
var searchItem= document.querySelector(".form-control.me-2").value.trim().toLowerCase();
if(menuItems[searchItem]){
  window.location.href = menuItems[searchItem];
}else{
  alert("item not found");
}
})
