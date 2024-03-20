const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myButton").onclick = function () {
  if (document.getElementById("myInput").value > 12000000) {
    document.getElementById("myH3").textContent = "Coudn't process data (input to long)";
  } else {
    radius = document.getElementById("myInput").value; 
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference.toFixed(5);
  }
}