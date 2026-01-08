const doctors = [
    { name: "Dr. Abid Hussain Laghari", specialty: "Cardiology", img: "images/Dr(1).png" },
    { name: "Dr. Sara Khan", specialty: "Neurology", img: "images/Dr(2).png" },
    { name: "Dr. Syed Asad Ali", specialty: "Pediatrics", img: "images/Dr(3).png" },
    { name: "Dr. Shaheen Naveed", specialty: "Dermatology", img: "images/Dr(4).png" },
    { name: "Dr. Fahad Umer ", specialty: "Dentistry", img: "images/Dr(5).png" },
    { name: "Dr. Sobia Yasmeen", specialty: "Plastic Sugery", img: "images/Dr(6).png" }
    
    
];

function filterDoctors() {
    const val = document.getElementById('deptFilter').value;
    const container = document.getElementById('doctor-container');
    container.innerHTML = "";
    
    doctors.forEach(doc => {
        if(val === "All" || doc.specialty === val) {
            container.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card p-3 text-center shadow-sm">
                        <img src="${doc.img}" class="rounded-circle mx-auto" width="100">
                        <h5>${doc.name}</h5>
                        <p>${doc.specialty}</p>
                    </div>
                </div>`;
        }
    });
}


// Initial display
if(document.getElementById('doctor-container')) filterDoctors();


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // stop page reload

            // show bootstrap modal
            const modal = new bootstrap.Modal(
                document.getElementById("confirmModal")
            );
            modal.show();

            // optional: reset form after submit
            form.reset();
        });
    }
});
