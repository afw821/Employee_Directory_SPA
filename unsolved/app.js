const renderList = function(){
    $('.content').empty();
    for(let i = 0; i < employeeList.length; i++){
        $('.content').append(`<div class = 'employee'> ${employeeList[i].name} <br/><br/>${employeeList[i].officeNum} <br/><br/> ${employeeList[i].phoneNum} </div>`);
    }
}
renderList();