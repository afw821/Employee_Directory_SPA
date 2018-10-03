const renderList = function(){
    $('.content').empty();
    for(let i = 0; i < employeeList.length; i++){
        $('.content').append(`<div class = 'employee'> ${employeeList[i].name} <br/><br/>${employeeList[i].officeNum} <br/><br/> ${employeeList[i].phoneNum} </div>`);
    
    }
}
renderList();






const viewStart = function(){
    $('.content').removeClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').addClass('hide');
}
$('.link-box').on('click',viewStart);

const showAdd = function(){
    $('.input-bar').removeClass('hide');
    $('.content').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    
}
$('.link-box2').on('click', showAdd);

const showVerify = function(){
    $('.content').addClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').removeClass('hide');
}
$('.link-box3').on('click', showVerify);


