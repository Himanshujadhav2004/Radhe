
  const curentlocation=location.href;
  const menuItem=document.querySelectorAll('a');
  const menuLength=menuItem.length;
  for(let i=0;i<menuLength;i++){
    if(menuItem[i].href===curentlocation){
      menuItem[i].className="active"
    }
  }

function display()
{
  document.querySelector(".floating-parent").style.display="none";
}
function displaysss(){
  document.querySelector(".floating-parent").style.display="block";
}