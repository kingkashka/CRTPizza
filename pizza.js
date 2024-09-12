
function getReceipt() {
    // THIS INITIALIZES OUR STRING SO IT CAN GET PASSED FROM FUNCTION 
    // TO FUNCTION, GROWING LINE BY LINE INTO A FULL RECEIPT 
  var text1 = `<h3>You Ordered:</h3>`;
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (let i = 0; i < sizeArray.length; i++) {
    if(sizeArray[i].checked){
        var selectedSize = sizeArray[i].value;
        text1 = `${text1} ${selectedSize} <br/>`;
  }
}
  if(!selectedSize) {
    alert("You need to pick a pizza size!!");
    // this will return the user to the pizza selection section
    document.getElementById("pizzaSize").scrollIntoView();
    // We can also focus on the first pizza option to guide the user.
    sizeArray[0].focus()
    // this will stop the function if no size is selected
    return false; 
  }

  if(selectedSize === "Personal Pizza") {
      sizeTotal = 6;
  }
  else if(selectedSize === "Small Pizza"){
    sizeTotal = 8;
  }
  else if(selectedSize === "Medium Pizza"){
    sizeTotal = 10;
  }
  else if(selectedSize === "Large Pizza"){
    sizeTotal = 14;
  }
  else if(selectedSize === "Extra Large Pizza"){
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  console.log(`${selectedSize} = $${sizeTotal}.00 `);
  console.log(`size text1: ${text1}`);
  console.log(`subtotal: $${runningTotal}.00`);
//   THESE VARIABLES WILL GET PASSED ON TO EACH FUNCTION 
getTopping(runningTotal, text1)
};

function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){
        if(toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log(`selected topping item: ${toppingArray[j].value}`);
            text1 = `${text1} ${toppingArray[j].value} <br/>`;
        }
    }
    var toppingCount = selectedTopping.length;
    if(toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    }
    else{
        toppingTotal = 0;
    }
    runningTotal = runningTotal + toppingTotal;
    console.log(`Total selected topping items: ${toppingCount}`);
    console.log(`${toppingCount} topping - 1 free topping = ${toppingTotal}.00`);
    console.log(`Topping text1: ${text1}`);
    console.log(`Purchase Total: ${runningTotal}.00`);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = `<h3>Total: <strong>$ ${runningTotal}.00 </strong></h3>`
    getVeggies(runningTotal, text1)
}

function getVeggies(runningTotal, text1){
    var veggieTotal = 0;
    var selectedVeggies = [];
    var veggieArray = document.getElementsByClassName("vegetables");
    for (let k = 0; k < veggieArray.length; k++){
        if(veggieArray[k].checked){
            selectedVeggies.push(veggieArray[k].value);
            console.log(`selected veggie: ${veggieArray[k].value}`);
            text1 = `${text1} ${veggieArray[k].value} <br/>`;
        }
    }
    var veggieCount = selectedVeggies.length;
    if(veggieCount > 1) {
        veggieTotal = veggieCount - 1;
    }
    else{
        veggieTotal = 0;
    }
    runningTotal += veggieTotal;
    console.log(`Total selected veggie items: ${veggieCount}`);
    console.log(`Veggie text1: ${text1}`);
    console.log(`Purchase Total: ${runningTotal}.00`);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = `<h3>Total: <strong>$ ${runningTotal}.00 </strong></h3>`;
}

