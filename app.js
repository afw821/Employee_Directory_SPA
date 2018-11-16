//1. A View option that displays all employee info:
const renderList = function () {
    $('.content').empty(); //empties content div prior to appending employee list
    for (let i = 0; i < employeeList.length; i++) { 
        $('.content').append(`<div class = 'employee'> ${employeeList[i].name} <br/><br/>
        ${employeeList[i].officeNum} <br/><br/>${employeeList[i].phoneNum}</div>`);
        //loops through employee.js list and appends it to the page
    }
}
renderList(); //immediately calls the renderList function displaying employees on page

//This is the view when the page first loads
//you can re-navigate to this page by hitting the view icon on the sidebar
const viewStart = function () {
    $('.content').removeClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.delete').addClass('hide');
    $('.update').addClass('hide');
}
$('.link-box').on('click', viewStart); //on click eventlistener triggers this function

//When the add button is clicked, the input bars appear
//from this page you can add users
const showAdd = function () {
    $('.input-bar').removeClass('hide');
    $('.content').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.delete').addClass('hide');
    $('.update').addClass('hide');
    $('.fname4').removeClass('hide');

}
$('.link-box2').on('click', showAdd); //on click eventlistener

//When the verify button is clicked, the verify name input bar appears
//from this page you can enter an employee name and find out if they are on the list
const showVerify = function () {
    $('.content').addClass('hide');
    $('.input-bar').addClass('hide');
    $('.verify-input-bar').removeClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.delete').addClass('hide');
    $('.update').addClass('hide');
}
$('.link-box3').on('click', showVerify);

/* This is the page displayed when update is clicked
you can update the office number and phone number of existing employees*/

const showUpdate = function () {
    $('.content').removeClass('hide');
    $('.input-bar').removeClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.fname4').addClass('hide');
    $('.delete').addClass('hide');
    $('.update').removeClass('hide');
}
$('.link-box4').on('click', showUpdate);

/*this page will show up when the delete icon is clicked on the sidebar
from this page you can delete people from the directory*/
const showDelete = function(){
    $('.content').removeClass('hide');
    $('.input-bar').removeClass('hide');
    $('.fname4').addClass('hide');
    $('.delete').removeClass("hide");
    $('.no').addClass('hide');
    $('.yes').addClass('hide');
    $('.verify-input-bar').addClass('hide');
    $('.update').addClass('hide');
}
$('.link-box5').on('click', showDelete);
/*2. An Add option that allows users to input name, office number,
and phone number and then renders the updated employee list.*/  
const nameAdd = function () {
    const nameVal = $('.fname').val();
    const officeVal = $('.fname2').val();
    const phoneVal = $('.fname3').val();
    employeeList.push({    //pushes above captured values to the employeelist array of objects
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    });
    renderList(); //function call to render the employee list
}
$('.fname4').on('click', nameAdd);

//3. A Verify option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.
const nameSearch = function () {
    const nameVar = $('.fname5').val();  //value of input stored in a constant
    for (let i = 0; i < employeeList.length; i++) {  //loops through array
        if (nameVar == employeeList[i].name) { //if input value matches an employee name
            $('.yes').removeClass('hide');
            $('.no').addClass('hide');
            return; //return yes by removing class of hide on yes
        } else {
            $('.no').removeClass('hide'); //else remove class of hide on "no, please try again"
            $('.yes').addClass('hide');
        }
    }
}

$('.fname6').on('click', nameSearch); //on click event executes nameSearch function

/*4. An Update option that allows the user to input name, office number,
 and phone number and updates the office number and phone number of the 
 employee that matches the input name, and then renders the updated employee list.*/

const updateInfo = function () {
    const nameVar2 = $('.fname').val();
    const officeVar = $('.fname2').val();
    const phoneVar = $('.fname3').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (nameVar2 === employeeList[i].name) {
            employeeList[i].officeNum = officeVar;
            employeeList[i].phoneNum = phoneVar;
            renderList();
            return;
        }    
    }
}
$('.update').on('click', updateInfo);

//5. A Delete option that deletes the employee with the matching name nd then renders the updated employee list. 

const deleteInfo = function () {
    const nameVar3 = $('.fname').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (nameVar3 === employeeList[i].name) {
            employeeList.splice(i, 1); //splice method employee list
            renderList();
            return;
        }
    }
}
$('.delete').on('click',deleteInfo)

