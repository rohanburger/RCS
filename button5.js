function ProductAdd5(){
    var text = document.getElementById("ProductCheckout5");
    text.style.display = "block";
    document.getElementById("Productquantity5").value=1;
    quantity5();
    update5();
   
  
  }
  function productquantity5(){
    quantity5();
    update5();
  
    
  }
  function ProductRemove5(){
    var text = document.getElementById("ProductCheckout5");
    document.getElementById("Productquantity5").value=0;
    document.getElementById("Productprice5").value=0;
    text.style.display = "none";
    update5();
  }
  
  
  function update5(){
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
  
  function quantity5(){
    var quantity = document.getElementById("Productquantity5").value;  
    Price = quantity * 40; 
    document.getElementById("Productprice5").value=Price;
  }
  5