var expense_list = document.getElementById("expenses-type");

function handle_income(choose){
    var income = document.getElementById("income");
    if (choose) {
        income.style.boxShadow="0px 0px 4px 2px white";
        handle_expense(0);
        console.log(income);
    }else {
        income.style.boxShadow="none";
    }
}

function handle_expense(choose){
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
    for (var i=0; i<option.length; i++) {
        if (i != choose) {
            option[i].style.boxShadow="none";
        }else {
            option[i].style.boxShadow="0px 0px 4px 2px white";
        }
    }
}

function handle_money(choose) {
    var option=[
        document.getElementById("cash"),
        document.getElementById("linepay"),
        document.getElementById("easy-card")
    ];
    for (var i=0; i<option.length; i++) {
        if (i != choose) {
            option[i].style.boxShadow="none";
        }else {
            option[i].style.boxShadow="0px 0px 4px 2px white";
        }
    }
}