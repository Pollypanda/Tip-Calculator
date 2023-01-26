
const calculate = document.getElementById("calculate");

function calculate_tip() {
    const bill_amount = document.getElementById("bill_amount").value;
    const addTip = document.getElementById("addTip").value;
    const num_people = document.getElementById("people").value;
    
    if(bill_amount === "" || bill_amount <= 0 || num_people === "" || num_people <= 0 || addTip === "Choose Your Tip" || bill_amount == 0){
         alert("Invalid input! Please try again.");
    }else{
    const totalTipPerPerson = ((bill_amount * addTip)/num_people).toFixed(2);

    const totalAmountPerPerson = (parseFloat(bill_amount/num_people) + parseFloat(totalTipPerPerson)).toFixed(2);
    

    document.getElementById("tip").innerHTML = `$ ${totalTipPerPerson} / Person`;
    document.getElementById("total").innerHTML = `$ ${totalAmountPerPerson} / Person`;

    }

  }

calculate.addEventListener("click", calculate_tip);
