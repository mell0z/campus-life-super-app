// selecting buttons by thier id
    let eventsBtn = document.getElementById("eventsBtn");
    let diningBtn = document.getElementById("diningBtn");
    let resourcesBtn = document.getElementById("resourcesBtn");

// When users click on the event button
if (eventsBtn) {
    eventsBtn.addEventListener("click", function() {
        window.location.href = "events.html";
    });
}

// When users click on the dining button
if (diningBtn) {
    diningBtn.addEventListener("click", function() {
        window.location.href = "dining.html";
    });
}

// When users click on the index button
if (resourcesBtn) {
    resourcesBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// api placeholder for future campus events
let eventsApiUrl = "https://api.campus-events.com/events";

// this function will be used later to get event data
function getCampusEvents() {
        console.log("API placeholder is set up");
        console.log("future API URL:", eventsApiUrl);
}

// calling the function for now
getCampusEvents();
