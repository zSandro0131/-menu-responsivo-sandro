const menuIcon = document.getElementById("mobile-icon")
const menuMobile = document.getElementById("mobile-version-menu")

function showMenu() {
   if(menuMobile.classList.contains('mobile-version-menu')){
    menuMobile.classList.remove('mobile-version-menu')
   } else {
    menuMobile.classList.add('mobile-version-menu')
   }

}


menuIcon.addEventListener('click' , showMenu)

