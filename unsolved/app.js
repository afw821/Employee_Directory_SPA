//1. A View option that displays all employee info:
const renderList = function () {
    $('.content').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class = 'employee'> ${employeeList[i].name} <br/><br/>
        ${employeeList[i].officeNum} <br/><br/>${employeeList[i].phoneNum}</div>`);

    }
}
renderList();

//This is the view when the page first loads
const viewStart = function () {
    $('.content').removeClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
}
$('.link-box').on('click', viewStart);

//When the add button is clicked, the input bars appear
const showAdd = function () {
    $('.input-bar').removeClass('hide');
    $('.content').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');

}
$('.link-box2').on('click', showAdd);

//When the verify button is clicked, the verify name input bar appears
const showVerify = function () {
    $('.content').addClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').removeClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
}
$('.link-box3').on('click', showVerify);

// This is the page displayed when update is clicked

const showUpdate = function () {
    $('.content').removeClass('hide');
    $('.input-bar').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.fname4').addClass('hide');
}
$('.link-box4').on('click', showUpdate);
//2. An Add option that allows users to input name, office number, and phone number and then renders the updated employee list. 
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

//3. A Verify option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.
const nameSearch = function () {
    const nameVar = $('.fname5').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (nameVar == employeeList[i].name) {
            $('.yes').removeClass('hide');
            $('.no').addClass('hide');
            return "yes";
        } else {
            $('.no').removeClass('hide');
            $('.yes').addClass('hide');
            return "no";
        }
    }
}

$('.fname6').on('click', nameSearch);

/*4. An Update option that allows the user to input name, office number,
 and phone number and updates the office number and phone number of the 
 employee that matches the input name, and then renders the updated employee list.*/

const updateInfo = function () {
    const nameVar2 = $('.fname').val();
    const officeVar = $('.fname2').val();
    const phoneVar = $('.fname3').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (nameVar2 === employeeList[i].name) {
            console.log('yes');
            employeeList[i].officeNum = officeVar;
            employeeList[i].phoneNum = phoneVar;
            renderList();
            return;
        } else {
            console.log('no');
        }
    }

}
$('.link-box4').on('click', updateInfo);

//5. A Delete option that deletes the employee with the matching name nd then renders the updated employee list. 

const deleteInfo = function () {
    const nameVar3 = $('.fname').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (nameVar3 === employeeList[i].name) {
            employeeList.splice(i, 1);
            renderList();
            return;
        } else {
            console.log('no');
        }

    }
}
$('.link-box5').on('click', deleteInfo);
