document.getElementById("btntinhnao").onclick = function () {
    /* Đầu Vào */
    var tienluong = document.getElementById("tienluong").value * 1;
    var ngaylam = document.getElementById("ngaylam").value *1;

    /* Xử Lý */
    var tong = tienluong * ngaylam ;
    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result = "<div class='bg-success text-center text-white'>";
    result += "<p>Lương của nhân viên</p>";
    result += "<p>" + currentFormat.format(tong) + " vnd </p>";
    result += "<p>Trong Tháng</p>";
    result += "</div>";
    
    /* Đầu ra */
    document.getElementById("showIntotal").innerHTML = result;
}   


// Bài 2

document.getElementById("btntinhtb").onclick = function () {
    // Đầu Vào
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;

    /* Xử Lý */

    var sum = number1 + number2 + number3 + number4 + number5;
    var tong = sum / 5 ;
    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result = "<div class='bg-success text-center text-white'>";
    result += "<p>Tổng Trung Bình</p>";
    result += "<p>" + currentFormat.format(tong) + "</p>";
    result += "</div>";

    /* Đầu ra */
    document.getElementById("showTotal").innerHTML = result;
}

// Bài 3

document.getElementById("btntinhmoney").onclick = function (){
    var moneyvn = document.getElementById("moneyvn").value * 1;
    var moneyusd = document.getElementById("moneyusd").value *1;

    /* Xử Lý */
    var tong = moneyvn * moneyusd; 
    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result ="<div class='bg-success text-center text-white'>";
    result +="<p>Đổi Ra Tiền Việt Nam </p>";
    result += "<p>" + currentFormat.format(tong) + "vnd </p>";
    result += "</div>";

    // Đầu ra
    document.getElementById("showIntotalmoney").innerHTML = result;
}

// Bài 4 
document.getElementById("btntinhCS").onclick = function () {
    var height = document.getElementById("height").value * 1;
    var width = document.getElementById("width").value * 1;

    // Xử Lý
    var dientich = height*width;
    var chuvi = 2 * (height + width);
    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result ="<div class='bg-success text-center text-white'>";
    result += "<p>Diện Tích HCN </p>";
    result += "<p>" + currentFormat.format(dientich) + "</p>";
    result += "<p>Chu Vi HCN </p>";
    result += "<p>" + currentFormat.format(chuvi) + "</p>";
    result += "</div>";

    // Đầu ra
    document.getElementById("showIntotalCS").innerHTML = result;
}


// Bài 5

document.getElementById("btntinhnumber").onclick = function () {
    var twonumber = document.getElementById("twonumber").value * 1;

    // Xử Lý

    var hangchuc = Math.floor(twonumber % 100 / 10);
    var hangdonvi = twonumber % 10;
    var tong = hangchuc + hangdonvi;
    var currentFormat = new Intl.NumberFormat("vn-VN");

    var result ="<div class='bg-success text-center text-white'>";
    result += "<p>Tổng Hai Ký Số</p>";
    result += "<p>" + currentFormat.format(tong) + "</p>";
    result += "</div>";

    // Đầu ra

    document.getElementById("showIntotalnumber").innerHTML = result;


}