var sum = function(){
    var price1 = parseFloat(document.getElementById("price1").innerText);
    var price2 = parseFloat(document.getElementById("price2").innerText);
    var result1 = parseInt(document.getElementById("result1").innerText);
    var result2 = parseInt(document.getElementById("result2").innerText);

    totalprice = (price1 * 1000 * result1) + (price2 * 1000 * result2);
    document.getElementById("total").innerText = totalprice + "원";
}


window.onload = function() {
    sum();
};