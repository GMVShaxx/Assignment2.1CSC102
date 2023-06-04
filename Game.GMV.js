function newAlert()
{
    alert("Game Start!");

}
function upDate()
{   var num1  = Math.ceil(Math.random() *10);
    var num2  = Math.ceil(Math.random() *10);


    document.getElementById("num1").innerHTML = "num1 = " + num1;
    document.getElementById("num2").innerHTML = "num2 = " + num2;
}