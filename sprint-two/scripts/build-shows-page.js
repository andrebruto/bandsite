const showsSection = document.getElementById("shows");

const shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Jul 18 2018",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];

function loopThroughInfo(showsArr) {
  for (let i = 0; i < showsArr.length; i++) {
    // loops into the shows array
    createShowElement(showsArr[i]); // calls the function with the loops to pass each object of the array
  }
}

function createShowElement(show) {
  const containerBlock = document.createElement("div"); // container to keep divs of dates, venues and locations
  containerBlock.className = "container__block";

  const containerBlockDate = document.createElement("div"); // container to store dates
  containerBlockDate.className = "container__block--card";
  const containerBlockVenue = document.createElement("div"); // container to store venues
  containerBlockVenue.className = "container__block--card";
  const containerBlockLocation = document.createElement("div"); // container to store locations
  containerBlockLocation.className = "container__block--card";

  const containerBlockButton = document.createElement("button"); // button
  containerBlockButton.className = "container__block--button";
  containerBlockButton.innerText = "BUY TICKETS";

  const containerBlockDateTitle = document.createElement("h4"); // date title for each show
  containerBlockDateTitle.className = "container__block--card-title";
  containerBlockDateTitle.innerText = "DATE";
  const containerBlockDateInput = document.createElement("p"); // stores dates for each show
  containerBlockDateInput.className = "container__block--card-input";
  containerBlockDateInput.innerText = show.date;

  const containerBlockVenueTitle = document.createElement("h4"); // venue title for each show
  containerBlockVenueTitle.className = "container__block--card-title";
  containerBlockVenueTitle.innerText = "VENUE";
  const containerBlockVenueInput = document.createElement("p"); // stores venues for each show
  containerBlockVenueInput.className = "container__block--card-input";
  containerBlockVenueInput.innerText = show.venue;

  const containerBlockLocationTitle = document.createElement("h4"); // location title for each show
  containerBlockLocationTitle.className = "container__block--card-title";
  containerBlockLocationTitle.innerText = "LOCATION";
  const containerBlockLocationInput = document.createElement("p"); // stores locations for each show
  containerBlockLocationInput.className = "container__block--card-input";
  containerBlockLocationInput.innerText = show.location;

  showsContainer.appendChild(containerBlock); //appends container with dates, venues and locations subcontainer into a div

  containerBlock.appendChild(containerBlockDate); // appends subcontainer with date title and input into one div
  containerBlock.appendChild(containerBlockVenue); // appends subcontainer with venue title and input into one div
  containerBlock.appendChild(containerBlockLocation); // appends subcontainer with location title and input into one div
  containerBlock.appendChild(containerBlockButton); // appends button into a div container

  containerBlockDate.appendChild(containerBlockDateTitle); // appends date title into the dates div
  containerBlockDate.appendChild(containerBlockDateInput); // appends date input into the dates div

  containerBlockVenue.appendChild(containerBlockVenueTitle); // appends venue title into the venues div
  containerBlockVenue.appendChild(containerBlockVenueInput); // appends venue input into the venues div

  containerBlockLocation.appendChild(containerBlockLocationTitle); // appends location title into the locations div
  containerBlockLocation.appendChild(containerBlockLocationInput); // appends location input into the locations div

  showsSection.appendChild(showsContainer); // appends main container into the shows section
}

const showsHeader = document.createElement("h1"); // section header
showsHeader.className = "shows__header";
showsHeader.innerText = "SHOWS";
showsSection.appendChild(showsHeader);

const showsTitleBlock = document.createElement("div"); // container to keep h3's
showsTitleBlock.className = "shows__titleBlock";

const showsTitleBlockDate = document.createElement("h3"); // table header - dates
showsTitleBlockDate.className = "shows__titleBlock--heading";
showsTitleBlockDate.innerText = "DATE";
showsTitleBlock.appendChild(showsTitleBlockDate);
const showsTitleBlockVenue = document.createElement("h3"); // table header- venues
showsTitleBlockVenue.className = "shows__titleBlock--heading";
showsTitleBlockVenue.innerText = "VENUE";
showsTitleBlock.appendChild(showsTitleBlockVenue);
const showsTitleBlockLocation = document.createElement("h3"); // table header - locations
showsTitleBlockLocation.className = "shows__titleBlock--heading";
showsTitleBlockLocation.innerText = "LOCATION";
showsTitleBlock.appendChild(showsTitleBlockLocation);

const showsContainer = document.createElement("div"); // container to keep all data
showsContainer.className = "shows__container";

showsContainer.appendChild(showsTitleBlock); // appends div with h3 titles to the main container

loopThroughInfo(shows); // calls the function passing the shows array
