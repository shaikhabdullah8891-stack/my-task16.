const applyButtons = document.querySelectorAll(".apply-btn");
const applicationList = document.getElementById("applicationList");
const emptyMessage = document.getElementById("emptyMessage");

let applications = [];


// Apply button functionality
applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const internship = button.dataset.internship;

        const alreadyApplied = applications.some(function (application) {
            return application === internship;
        });

        if (alreadyApplied) {
            alert("You have already applied for this internship.");
            return;
        }

        applications.push(internship);

        displayApplications();

        alert("Application submitted successfully!");

    });

});


// Display applications
function displayApplications() {

    applicationList.innerHTML = "";

    if (applications.length === 0) {
        applicationList.innerHTML = `
            <p id="emptyMessage">
                No applications yet.
            </p>
        `;
        return;
    }

    applications.forEach(function (internship) {

        const applicationItem = document.createElement("div");

        applicationItem.className = "application-item";

        applicationItem.innerHTML = `
            <div>
                <strong>${internship}</strong>
                <p>Application submitted</p>
            </div>

            <span class="status">
                Pending
            </span>
        `;

        applicationList.appendChild(applicationItem);

    });
}