document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const buttons = row.querySelectorAll("button");
        const detailsBtn = buttons[0];
        const editBtn = buttons[1];
        const deleteBtn = buttons[2];

        detailsBtn.addEventListener("click", () => {
            const cells = row.querySelectorAll("td");
            alert(
                "Employee Details:\n" +
                "Name: " + cells[0].innerText + "\n" +
                "Email: " + cells[1].innerText + "\n" +
                "Phone: " + cells[2].innerText + "\n" +
                "Department: " + cells[3].innerText
            );
        });

        editBtn.addEventListener("click", () => {
            alert("Edit Alert");
        });

        deleteBtn.addEventListener("click", () => {
            const confirmDelete = confirm("Are you sure you want to delete?");
            if (confirmDelete) {
                row.remove(); 
            }
        });
    });
});