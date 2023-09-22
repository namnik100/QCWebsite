// Sample data for demonstration purposes
const eventData = [
    {
        month: "Oct",
        day: "3",
        title: "Introductory Meeting",
        description: "Join us for AHS QC Club's first meeting, where will introduce officer applications and more!"
    },
    {
        month: "Oct",
        day: "4",
        title: "Officer Applications",
        description: "Officer applications for publicist, activites commisioner, and curiculum instructor are due!"
    },
    {
        month: "Oct",
        day: "10",
        title: "Introduction to Qubits",
        description: "First lesson and interactive study sesion, where we will introduce the qubits and their properties!"
    }
    // Add more event data here
];

// Function to perform the search and update search results dropdown
function performSearch(query) {
    const searchDropdown = document.getElementById("searchDropdown");
    searchDropdown.innerHTML = ""; // Clear previous search results

    const filteredEvents = eventData.filter(event => {
        const eventInfo = `${event.month} ${event.day} ${event.title} ${event.description}`;
        return eventInfo.toLowerCase().includes(query.toLowerCase());
    });

    if (filteredEvents.length === 0) {
        const noResultsItem = document.createElement("div");
        noResultsItem.classList.add("search-result-item");
        noResultsItem.textContent = "No results found.";
        searchDropdown.appendChild(noResultsItem);
    } else {
        filteredEvents.forEach(event => {
            const eventItem = document.createElement("div");
            eventItem.classList.add("search-result-item");
            eventItem.innerHTML = `
                <div class="event-date">
                    <span class="event-month">${event.month}</span>
                    <span class="event-day">${event.day}</span>
                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            searchDropdown.appendChild(eventItem);
        });
    }

    // Show the search dropdown
    searchDropdown.style.display = "block";
}

// Hide the search dropdown when clicking outside of it
document.addEventListener("click", function (event) {
    const searchInput = document.getElementById("searchInput");
    const searchDropdown = document.getElementById("searchDropdown");
    
    if (event.target !== searchInput && event.target !== searchDropdown) {
        searchDropdown.style.display = "none";
    }
});

// Listen for input in the search bar and trigger the search
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    performSearch(query);
});
