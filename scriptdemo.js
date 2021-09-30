var listHolder = document.getElementById('list-holder');

var runTotal = 0;

// sessionStorage.setItem('grandTotal',0);

// var grandTotal = sessionStorage.getItem('grandTotal')

// console.log (grandTotal);


function addNew () {

    var rowHolder = document.createElement('div');
    var amountInput = document.createElement('input');
    var qtyInput = document.createElement('input');
    var sTotal = document.createElement('p');

    rowHolder.classList.add('row-holder');
    
    amountInput.setAttribute("placeholder", "Amount");
    amountInput.onchange = calItem;
  
    qtyInput.setAttribute("placeholder", "Quantity");
    qtyInput.onchange = calItem;

    sTotal.setAttribute("id","stotal-para");
    sTotal.innerHTML = 0;

    rowHolder.append(amountInput);
    rowHolder.append(qtyInput);
    rowHolder.append(sTotal);
    listHolder.append(rowHolder);
    

}

function calItem () {
    // console.log(this.parentNode);

    // console.log(this);

    var parentDiv = this.parentNode;
    
    var subTotal = Number(parentDiv.querySelectorAll('input')[0].value) + Number(parentDiv.querySelectorAll('input')[1].value);


    parentDiv.querySelector('p').innerHTML = subTotal;

    runTotal += subTotal;

}

function doCal () {

    // var arrCal = Number(document.querySelectorAll('p').innerHTML);

    // runTotal = arrCal.reduce(addFunc,0);

    document.getElementById('total').innerHTML = runTotal;

    sessionStorage.setItem('grandTotal',runTotal);
}

// function addFunc(total, num) {
//     return total - num;
// }

