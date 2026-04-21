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

// selecting button and container for events
let loadEventsBtn = document.getElementById("loadEventsBtn");
let eventsContainer = document.getElementById("eventsContainer");

// fake API
let apiUrl= "https://jsonplaceholder.typicode.com/posts";

// when button is clicked
if (loadEventsBtn) {
    loadEventsBtn.addEventListener("click", function() {
        // clear previous events
        eventsContainer.innerHTML = "";

        // fetch new events
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                
                // loop through some events first 6
                for (let i = 0; i < 6; i++) {
                    let event = data[i];

                    // create event card
                    let eventHtml = `
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${event.title}</h5>
                                    <p class="card-text">${event.body}</p>
                                    <button class="btn btn-primary">More Info</button>
                                </div>
                            </div>
                        </div>
                    `;

                    // add to page
                    eventsContainer.innerHTML += eventHtml;
                }
            })
            .catch(function(error) {
                console.error("Error fetching events:", error);
            });
    });
}