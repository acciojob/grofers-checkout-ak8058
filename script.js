const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".price");
	let total=0;
	prices.forEach(price=>{
		total=total+parseFloat(price.textContent);
	});

	let existingTotalRow=document.getElementById("totalRow");
	if(existingTotalRow){
		existingTotalRow.remove();
	}
	const totalRow=document.createElement("tr");
	totalRow.id="totalRow";

	const totalCell=document.createElement("td");
	totalCell.colSpan=2;
	totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.textContent = "Total Price: ₹" + total;

	totalCell.id = "ans";
	totalRow.appendChild(totalCell);

	document.querySelector("table").appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

