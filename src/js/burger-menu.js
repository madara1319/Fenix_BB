$navigationButton=document.querySelector('.button--js');
navigationButton.addEventListener('click',()=>
{
    const navigation=document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})
