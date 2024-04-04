const Body = document.body

burger.onclick = () => {
    
    style = window.getComputedStyle(Body)
    MyOverflow = style.getPropertyValue('overflow-y');


    headerNav.classList.toggle('active')
    burger.classList.toggle('active')


    
    if (MyOverflow === 'visible'){
        Body.style.overflowY = 'hidden';   
    }
    else{
        Body.style.overflowY = 'visible'; 
    }
}
