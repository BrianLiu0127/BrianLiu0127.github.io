var date="";
var in_out="";
var money_type="";
var money="";
var comment="";

var currentDate = new Date();
var inputDate = document.getElementById("inputDate");
var dd = currentDate.getFullYear() + "-";
dd += (parseInt(currentDate.getMonth()) < 9)? "0":""; 
dd += (parseInt(currentDate.getMonth())+1) + "-";
dd += (currentDate.getDate() < 10)? "0":"";
dd += currentDate.getDate();
inputDate.value = dd;

function handle_income(choose){
    var income = document.getElementById("income");
    if (choose) {
        income.style.boxShadow="0px 0px 4px 2px white";
        handle_expense(0);
        in_out = "收入";
    }else {
        income.style.boxShadow="none";
        in_out = "";
    }
}

function handle_expense(choose){
    var expense_list = document.getElementById("expenses-type");
    var expense = document.getElementById("expense");
    if (choose) {
        expense_list.style.display="flex";
        expense.style.boxShadow="0px 0px 4px 2px white";
        handle_income(0);
    }else {
        expense_list.style.display="none";
        expense.style.boxShadow="none";
    }
}

function handle_list(choose){
    var option = [
        document.getElementById("list1"),
        document.getElementById("list2"),
        document.getElementById("list3"),
        document.getElementById("list4"),
        document.getElementById("list5"),
        document.getElementById("list6"),
        document.getElementById("list7"),
        document.getElementById("list8"),
        document.getElementById("list9"),
        document.getElementById("list10"),
    ];
    var list = [
        "吃的","喝的","文具","書籍","玩樂",
        "醫藥","生活","交通","儲值","其他"
    ];
    for (var i=0; i<option.length; i++) {
        if (i != choose) {
            option[i].style.boxShadow="none";
            if (i < choose) {
                in_out = "";
            }
        }else {
            option[i].style.boxShadow="0px 0px 4px 2px white";
            in_out = list[i];
        }
    }
}

function handle_money(choose) {
    var option=[
        document.getElementById("cash"),
        document.getElementById("linepay"),
        document.getElementById("easy-card")
    ];
    var list=[
        "現金",
        "LinePay",
        "悠遊卡"
    ]
    for (var i=0; i<option.length; i++) {
        if (i != choose) {
            option[i].style.boxShadow="none";
            if (i < choose) {
                money_type = "";
            }
        }else {
            option[i].style.boxShadow="0px 0px 4px 2px white";
            money_type = list[i];
        }
    }
}

function submit(){
    date = inputDate.value;
    var amount = document.getElementById("amount");
    var remark = document.getElementById("remark");
    money = amount.value;
    comment = remark.value;

    if (date=="" || in_out=="" || money_type=="" || money=="") {
        alert("請完成輸入再送出!!");
        console.log("時間: " + date);
        console.log("種類: " + in_out);
        console.log("方式: " + money_type);
        console.log("金額: " + money);
        console.log("備註: " + comment);
        return;
    }
    alert("時間: " + date
    + "\n種類:" + in_out
    + "\n方式:" + money_type
    + "\n金額:" + money
    + "\n備註:" + comment);
    // console.log(date);
    // console.log(in_out);
    // console.log(money_type);
    // console.log(money);
    // console.log(comment);
    var rowData = {
        date: date.value,
        type: in_out.value,
        way: money_type.value,
        amount: money.value,
        remark: comment
    }
    // google.script.run.addData(rowData);
    reset();
}

function reset(){
    date="";
    in_out="";
    money_type="";
    money="";
    comment="";
    handle_income(0);
    handle_expense(0);
    handle_list(-1);
    handle_money(-1);
    amount.value = "";
    remark.value = "";
}


function onSignIn(response) {
    console.log('00000000000000000004');
    const responsePayload = jwt_decode(response.credential);
  
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
 }
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


// window.onload = function () {
//     google.accounts.id.initialize({
//       client_id: '998634205524-soab23jd7bgaaqpn37dbnjvkk39nvmer.apps.googleusercontent.com',
//       callback: handleCredentialResponse
//     });
//     google.accounts.id.prompt();
// }

// function handleCredentialResponse(response) {
//     // decodeJwtResponse() is a custom function defined by you
//     // to decode the credential response.
//     const responsePayload = decodeJwtResponse(response.credential);

//     console.log("ID: " + responsePayload.sub);
//     console.log('Full Name: ' + responsePayload.name);
//     console.log('Given Name: ' + responsePayload.given_name);
//     console.log('Family Name: ' + responsePayload.family_name);
//     console.log("Image URL: " + responsePayload.picture);
//     console.log("Email: " + responsePayload.email);
// }