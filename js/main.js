$(document).ready(function () {
    //product part
    const navigation = $('#productsNav').children();
    function switchTab(element){
        $(element).addClass('products__item--active');
        $(element).siblings().each(function(){
            $(this).removeClass('products__item--active')
        switch($(element).text()){
            case "all":
                $('#productsAll').removeClass('products__gallery--hidden')
                addClass($('#productsAll'),'products__gallery--hidden')
                break
            case "print template":
                $('#productsPrint').removeClass('products__gallery--hidden')
                addClass($('#productsPrint'),'products__gallery--hidden')
                break
            case "web template":
                $('#productsTemplate').removeClass('products__gallery--hidden')
                addClass($('#productsTemplate'),'products__gallery--hidden')
                break
            case "user interface":
                $('#productsUi').removeClass('products__gallery--hidden')
                addClass($('#productsUi'),'products__gallery--hidden')
                break
            case "mock-up":
                $('#productsMockup').removeClass('products__gallery--hidden')
                addClass($('#productsMockup'),'products__gallery--hidden')
                break
            default:
                return
        }
    })}
    function addClass (element,className){

        $(element).siblings().slice(2).each(function(){
            $(this).addClass(className)
        })}
    navigation.each(function(){
        $(this).click(function(){
            switchTab(this)

        })
    })
    //profile part
    const portrait = $('#profilePic');
    const name = $('#name');
    const people = $('.personal');

    function changeProfile(newPic,NewName){
        name.text(NewName)
        portrait.css('backgroundImage',newPic)
    }

    people.each(function () { 
         $(this).click(function(){
             changeProfile($(this).css('backgroundImage'),$(this).children().text())

        })
    });
            



})