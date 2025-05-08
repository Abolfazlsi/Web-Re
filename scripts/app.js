let $ = document
let headerIcon = $.querySelector(".header__icon")
let menuFlag = true
let menuBtnItem = $.querySelector(".fa-bars")
let menu = $.querySelector(".menu")


headerIcon.addEventListener('click', function () {
    
    if (menuFlag) {
        menu.style.left = "0"
        menuBtnItem.className = "fa fa-times"
        menuFlag = false
    } else {
        menu.style.left = "-256px"
        menuBtnItem.className = "fa fa-bars"
        menuFlag = true;
    }
    
    
})