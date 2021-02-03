$(document).ready(function () {

    const portrait = $('#profilePic');
    const name = $('#name');
    console.log(name)
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