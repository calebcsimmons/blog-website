//Script for website view counter
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}