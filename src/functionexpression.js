
//simple function

test('php');

function test(name) {
    console.log(name);  
}


// function expression

getData('p1')
let getData = function gettingUserDetailsFromDashboardPage(){
    console.log('hello user details', name);
}


getData (); //calling the function using reference name  (expression name)

console.log(typeof getData); // function
console.log(typeof gettingUserDetailsFromDashboardPage); // undefined



let getUserData = function getting_user_test_data_from_excel_sheet(name,age)
{
    console.log(name,age);
};

getUserData('php',7);
console.log(getUserData.name);

