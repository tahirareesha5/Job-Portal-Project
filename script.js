// PAGES OPENING JS
// === Job type filter ===
document.getElementById("jobTypeSelect").addEventListener("change", function() {
    const selectedType = this.value;
    document.querySelectorAll(".job-listing").forEach(function(listing) {
        if (selectedType === "All" || listing.getAttribute("data-type") === selectedType) {
            listing.style.display = "block"; // show job card
        } else {
            listing.style.display = "none"; // hide job card
        }
    });
});
// === Apply button redirect with job title ===
document.querySelectorAll(".apply-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const jobTitle = this.getAttribute("data-title");
        window.location.href = "index1.html?title=" + encodeURIComponent(jobTitle);
    });
});
// === If redirected with job title in query string, show it ===
const params = new URLSearchParams(window.location.search);
const jobTitle = params.get("title");
if (jobTitle) {
    const jobEl = document.getElementById("job");
    if (jobEl) {
        jobEl.textContent = jobTitle;
    }
}













