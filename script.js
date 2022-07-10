var date="";
var in_out="";
var money_type="";
var money="";
var comment="";

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
    var currentDate = new Date();
    var inputDate = document.getElementById("inputDate");
    if (inputDate.value == "") {
        date = currentDate.getFullYear() + "-" + (parseInt(currentDate.getMonth())+1) + "-" + currentDate.getDate();
    }else {
        date = inputDate.value;
    }
    var amount = document.getElementById("amount");
    var remark = document.getElementById("remark");
    money = amount.value;
    comment = remark.value;

    if (date=="" || in_out=="" || money_type=="" || money=="" || comment=="") {
        alert("請完成輸入再送出!!");
        console.log("Date: " + date);
        console.log("in_out:" + in_out);
        console.log("money_type:" + money_type);
        console.log("money:" + money);
        console.log("comment:" + comment);
        return;
    }
    alert("Date: " + date
    + "\nin_out:" + in_out
    + "\nmoney_type:" + money_type
    + "\nmoney:" + money
    + "\ncomment:" + comment);
    // console.log(date);
    // console.log(in_out);
    // console.log(money_type);
    // console.log(money);
    // console.log(comment);
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