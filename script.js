// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and update the total price
const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        let value = parseFloat(price.textContent.trim()); // Ensure no extra spaces
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Remove existing total row if present
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new total row
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.id = "ans";  // Ensure Cypress can detect this
    totalCell.textContent = "Total Price: ₹" + total;

    // Append the total row to the table
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
};

// Add contenteditable property to all price cells
document.querySelectorAll(".price").forEach(price => {
    price.setAttribute("contenteditable", "true"); // Make cells editable
    price.addEventListener("input", getSum); // Update total when price changes
});

// Ensure button click also calculates total price
getSumBtn.addEventListener("click", getSum);

// Run the function initially to display the correct total
getSum();



