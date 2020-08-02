const showsSection = document.getElementById("showsSection");

// function that calls the axios get, loops the results and calls the function
// that creates the shows elements
const loadShows = () => {
  getShows()
    .then((result) => {
      const sortedArry = result.sort((a, b) => b.date - a.date);
      for (let i = 0; i < sortedArry.length; i++) {
        const showBlock = createShowElement(result[i]);
      }
      return;
    })
    .catch((error) => console.log(error));
};

// function that creates the show html structure
const createShowElement = (show) => {
  const showsShow = document.createElement("div");
  showsShow.classList.add("container__block");
  showsShow.setAttribute("id", show.id);

  const containerBlockDate = document.createElement("div"); // container to store dates
  containerBlockDate.classList.add("container__block-card");

  const containerBlockVenue = document.createElement("div"); // container to store venues
  containerBlockVenue.classList.add("container__block-card");

  const containerBlockLocation = document.createElement("div"); // container to store locations
  containerBlockLocation.classList.add("container__block-card");

  const containerBlockButton = document.createElement("button"); // button
  containerBlockButton.classList.add("container__block-button");
  containerBlockButton.innerText = "BUY TICKETS";

  const containerBlockDateTitle = document.createElement("h4"); // date title for each show
  containerBlockDateTitle.classList.add("container__block-cardTitle");
  containerBlockDateTitle.innerText = "DATE";

  const containerBlockDateInput = document.createElement("p"); // stores dates for each show
  containerBlockDateInput.classList.add("container__block-cardInput");
  containerBlockDateInput.classList.add("container__block-cardDate");
  containerBlockDateInput.innerText = show.date;
  // console.log(show.date);

  const containerBlockVenueTitle = document.createElement("h4"); // venue title for each show
  containerBlockVenueTitle.classList.add("container__block-cardTitle");
  containerBlockVenueTitle.innerText = "VENUE";

  const containerBlockVenueInput = document.createElement("p"); // stores venues for each show
  containerBlockVenueInput.classList.add("container__block-cardInput");
  containerBlockVenueInput.innerText = show.place;

  const containerBlockLocationTitle = document.createElement("h4"); // location title for each show
  containerBlockLocationTitle.classList.add("container__block-cardTitle");
  containerBlockLocationTitle.innerText = "LOCATION";
  const containerBlockLocationInput = document.createElement("p"); // stores locations for each show
  containerBlockLocationInput.classList.add("container__block-cardInput");
  containerBlockLocationInput.innerText = show.location;

  showsContainer.appendChild(showsShow); //appends container with dates, venues and locations subcontainer into a div

  showsShow.appendChild(containerBlockDate); // appends subcontainer with date title and input into one div
  showsShow.appendChild(containerBlockVenue); // appends subcontainer with venue title and input into one div
  showsShow.appendChild(containerBlockLocation); // appends subcontainer with location title and input into one div
  showsShow.appendChild(containerBlockButton); // appends button into a div container

  containerBlockDate.appendChild(containerBlockDateTitle); // appends date title into the dates div
  containerBlockDate.appendChild(containerBlockDateInput); // appends date input into the dates div

  containerBlockVenue.appendChild(containerBlockVenueTitle); // appends venue title into the venues div
  containerBlockVenue.appendChild(containerBlockVenueInput); // appends venue input into the venues div

  containerBlockLocation.appendChild(containerBlockLocationTitle); // appends location title into the locations div
  containerBlockLocation.appendChild(containerBlockLocationInput); // appends location input into the locations div
  showsContainer.appendChild(showsShow); //appends container with dates, venues and locations subcontainer into a div
  // console.log(showsContainer);
  showsSection.appendChild(showsContainer); // appends main container into the shows section
  return showsShow;
  // showsSection.appendChild(showsContainer); // appends main container into the shows section
};

const showsHeader = document.createElement("h1"); // section header
showsHeader.classList.add("shows__header");
showsHeader.innerText = "Shows";
showsSection.appendChild(showsHeader);

const showsTitleBlock = document.createElement("div"); // container to keep h3's
showsTitleBlock.classList.add("shows__titleBlock");

const showsTitleBlockDate = document.createElement("h3"); // table header - dates
showsTitleBlockDate.classList.add("shows__titleBlock-heading");
showsTitleBlockDate.classList.add("shows__titleBlockDate");
showsTitleBlockDate.innerText = "DATES";
showsTitleBlock.appendChild(showsTitleBlockDate);
const showsTitleBlockVenue = document.createElement("h3"); // table header- venues
showsTitleBlockVenue.classList.add("shows__titleBlock-heading");
showsTitleBlockVenue.innerText = "VENUE";
showsTitleBlock.appendChild(showsTitleBlockVenue);
const showsTitleBlockLocation = document.createElement("h3"); // table header - locations
showsTitleBlockLocation.classList.add("shows__titleBlock-heading");
showsTitleBlockLocation.innerText = "LOCATION";
showsTitleBlock.appendChild(showsTitleBlockLocation);

const showsContainer = document.createElement("div"); // container to keep all data
showsContainer.classList.add("shows__container");

showsContainer.appendChild(showsTitleBlock); // appends div with h3 titles to the main container
// console.log(showsTitleBlock);
loadShows(); // calls the function that starts the process to load the shows
