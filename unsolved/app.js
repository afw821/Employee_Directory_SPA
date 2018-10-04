const renderList = function () {
    $('.content').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class = 'employee'> ${employeeList[i].name} <br/><br/>${employeeList[i].officeNum} <br/><br/> ${employeeList[i].phoneNum} </div>`);

    }
}
renderList();






const viewStart = function () {
    $('.content').removeClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
}
$('.link-box').on('click', viewStart);

const showAdd = function () {
    $('.input-bar').removeClass('hide');
    $('.content').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');

}
$('.link-box2').on('click', showAdd);

const showVerify = function () {
    $('.content').addClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').removeClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
}
$('.link-box3').on('click', showVerify);

const nameAdd = function () {
    const nameVal = $('.fname').val();
    const officeVal = $('.fname2').val();
    const phoneVal = $('.fname3').val();
    employeeList.push({
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    });
    renderList();    
}
$('.fname4').on('click', nameAdd);

const nameSearch = function(){
    const nameVar = $('.fname5').val();
for( let i = 0; i < employeeList.length; i++){
    if( nameVar == employeeList[i].name){
        $('.yes').removeClass('hide');
        $('.no').addClass('hide');
       return "yes";
       
    }else{
        $('.no').removeClass('hide');
        $('.yes').addClass('hide');
        return "no";
    }

}

}

$('.fname6').on('click', nameSearch);


