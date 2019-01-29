var dinnerOverView = function(container,model){
  this.menu = model.getFullMenu();
  this.totalPrice = model.getTotalMenuPrice();
  this.oInfoDiv = container[0].querySelector(".overviewInfo");
  this.menuDiv = container[0].querySelector(".menu");
  console.log("container",container);
  console.log(this.oInfoDiv);
  let overViewInfo = document.createElement("div");
  let myDinner = document.createElement("span");
  let backButton = document.createElement("input");
  
  myDinner.innerHTML = `My dinner: ${model.getNumberOfGuests()} people`;
  backButton.setAttribute("type", "button");
  backButton.setAttribute("value", "go back and edit dinner");

  overViewInfo.appendChild(myDinner);
  overViewInfo.appendChild(backButton);
  this.oInfoDiv.appendChild(overViewInfo);

  
  
  
  this.menu.forEach(dish => {
    
    let dItem = document.createElement("div");
    let dItemView = new dishItemView(dItem,dish.id,model);

    let price = model.dishPrice(dish.ingredients);

    let spanE = document.createElement("span");
    spanE.innerText = `SEK ${price}`;
    
    dItem.appendChild(spanE);
    this.menuDiv.appendChild(dItem)
  });
  let priceD = document.createElement("div");
  priceD.innerHTML = `Total <br/> ${this.totalPrice}`;
  this.menuDiv.appendChild(priceD);

  let printReceiptButton = document.createElement("input");
  printReceiptButton.setAttribute("type", "button");
  printReceiptButton.setAttribute("value", "Print Full Receipt");

  container[0].appendChild(printReceiptButton);

}