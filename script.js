const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display total price
const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    // Sum up prices from table
    prices.forEach(price => {
        let value = parseFloat(price.textContent.trim()); // Trim to avoid spaces
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Remove existing total row if it already exists
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.id = "ans";  // Assign id for Cypress testing
    totalCell.textContent = "Total Price: ₹" + total;

    // Append the total price row to the table
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
};

// Add event listener to update total when price values change
document.querySelectorAll(".price").forEach(price => {
    price.setAttribute("contenteditable", "true"); // Make cells editable
    price.addEventListener("input", getSum); // Update total on edit
});

// Add event listener to button click
getSumBtn.addEventListener("click", getSum);


