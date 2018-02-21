//script.js

//custom function
function calculateTip() {

  //Set variables to store the data from inputs by their id's
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var totalPeople = document.getElementById("totalPeople").value;

  // We need to validate the action in case there is no sum committed when calculating
  if(billAmount === "" || serviceQuality == 0) {
    window.alert("Please enter some values to get this baby up and running!");
    return; // this will prevent the function from continuing
  }


    // Check to see if totalPeople is empty or less than or equal to 1
    if(totalPeople === "" || totalPeople <= 1) {
      totalPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display ="block";
    }

    // Do some math!
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount and "each" on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () { calculateTip(); };
