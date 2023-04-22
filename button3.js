function ProductAdd3(){
  var text = document.getElementById("ProductCheckout3");
  text.style.display = "block";
  document.getElementById("Productquantity3").value=1;
  quantity3();
  update3();
 

}
function productquantity3(){
  quantity3();
  update3();

  
}
function ProductRemove3(){
  var text = document.getElementById("ProductCheckout3");
  document.getElementById("Productquantity3").value=0;
  document.getElementById("Productprice3").value=0;
  text.style.display = "none";
  update3();
}


function update3(){
    var Price1 = 0;
    var Price2 = 0;
    var Price3 = 0;
    var Price4 = 0;
    var Price5 = 0;
     Price1 =parseInt(document.getElementById("Productprice1").value);
     Price2 =parseInt(document.getElementById("Productprice2").value);
     Price3 =parseInt(document.getElementById("Productprice3").value);
     Price4 =parseInt(document.getElementById("Productprice4").value);
     Price5 =parseInt(document.getElementById("Productprice5").value);
     var totalproductprice= 0;
     var TotalCost=0;
    totalproductprice = Price1+Price2+Price3+Price4+Price5;
  TotalCost = totalproductprice + 100;
  document.getElementById("CartCost").value=totalproductprice;
  document.getElementById("TotalCost").value=TotalCost;
}

function quantity3(){
  var quantity = document.getElementById("Productquantity3").value;  
  Price = quantity * 40; 
  document.getElementById("Productprice3").value=Price;
}