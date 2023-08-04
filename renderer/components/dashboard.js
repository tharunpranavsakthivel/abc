const fs = require('fs');
const path = require("path");


export let dashb = document.getElementById("dashboard");
export let addCommittees = document.getElementById("add-committees");
export const consoleOutput = document.getElementById("console-output");
export const setUpBtn = document.getElementById("set-up");

const nextButton = document.getElementById("next-button");


import { spreadsheetMessageAdded, workingContainer, createFieldContainer, setUpContainer, nextBtnContainer, extraFieldContainer, fieldIndex} from "./index.js";


export function dashboard() {
  let occupiedSeats = 100;
  let totalSeats = 500;
  const progress = (occupiedSeats / totalSeats) * 100;

  workingContainer.style.padding = '20px';
  workingContainer.style.display = 'grid';
  workingContainer.style.gridTemplateColumns = 'repeat(3, 2fr)';
  workingContainer.style.overflowY = 'scroll';
  workingContainer.style.justifyItems = 'center';
  workingContainer.style.alignItems = 'center';
  workingContainer.style.width = '95%';
  
  const card = document.createElement("div");
  card.className = "card";

  const Occupancy = document.createElement("h1");
  Occupancy.textContent = `Occupancy`
  card.appendChild(Occupancy);
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
    progressBar.style.background = "linear-gradient(to right, #d98208, #db0606)";

  

  const progressElement = document.createElement("div");
  progressElement.className = "progress";
  progressElement.textContent = `${progress}%`;
  

  const seatText = document.createElement("h2");
  seatText.textContent = `${occupiedSeats}/${totalSeats}`

  const seatText2 = document.createElement("h2");
  seatText2.textContent = `seats are occupied`

  progressBar.appendChild(progressElement);
  card.appendChild(progressBar);
  card.appendChild(seatText);
  card.appendChild(seatText2);

  workingContainer.appendChild(card);

  //card 2
  const card2 = document.createElement("div");
  card2.className = "card";
  card2.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1289546/retina_1708x683_cover-comprehensive-guide-javascript-design-patterns-cf0c7c0e69d51d97044a8431da9175e3.png')";

  const text2 = document.createElement("h1");
  text2.textContent = "View Full Report";
  text2.style.fontSize = "1.8em";
  text2.style.color = "white";

  const viewButton2 = document.createElement("button");
  viewButton2.className = "header-button";
  viewButton2.textContent = "View";
  viewButton2.style.fontSize = "1.5em";

  card2.appendChild(text2);
  card2.appendChild(viewButton2);
  workingContainer.appendChild(card2);

  //card 3
  const card3 = document.createElement("div");
  card3.className = "card";
  card3.style.color = "white";
  card3.style.backgroundColor = "#D9D9D9";
  card3.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/premium-photo/3d-staircase-like-bar-graph_58466-4146.jpg')";
  card3.style.backgroundSize = "cover";

  const text3 = document.createElement("h1");
  text3.textContent = "Committees Structure";
  text3.style.fontSize = "1.8em";

  card3.appendChild(text3);

  const table = document.createElement("table");
  table.classList.add("minimalistic-table");

  const row1 = document.createElement("tr");

  const cell1Row1 = document.createElement("td");
  cell1Row1.textContent = "Committees";
  row1.appendChild(cell1Row1);

  const cell2Row1 = document.createElement("td");
  cell2Row1.textContent = "100";
  row1.appendChild(cell2Row1);
  table.appendChild(row1);

  const row2 = document.createElement("tr");

  const cell1Row2 = document.createElement("td");
  cell1Row2.textContent = "Biggest Committee";
  row2.appendChild(cell1Row2);

  const cell2Row2 = document.createElement("td");
  cell2Row2.textContent = "UNGA";
  row2.appendChild(cell2Row2);

  table.appendChild(row2);

  card3.appendChild(table);

  const viewButton3 = document.createElement("button");
  viewButton3.className = "header-button";
  viewButton3.textContent = "View";
  viewButton3.style.fontSize = "1.5em";

  card3.appendChild(viewButton3);
  workingContainer.appendChild(card3);

 // Card 4
  let waitingList = 20;
  const card4 = document.createElement("div");
  card4.className = "card";
  card4.style.height = "200px";
  card4.style.padding = "20px";
  card4.style.backgroundColor = "#D9D9D9";

  
  const waitingListBarContainer = document.createElement("div");
  waitingListBarContainer.className = "progress-bar-container";
  waitingListBarContainer.style.height = "25px";
  waitingListBarContainer.style.width = "100%";
  waitingListBarContainer.style.borderRadius = "23px";
  
  
  const waitingListBar = document.createElement("div");
  waitingListBar.className = "progress-bar2";
  waitingListBar.style.backgroundColor = "black";
  waitingListBar.style.height = "100%";
  waitingListBar.style.width = "100%";
  waitingListBar.style.borderRadius = "23px";
  
  const waitingListFill = document.createElement("div");
  waitingListFill.className = "progress-fill";
  waitingListFill.style.width = `${waitingList}%`; 
  waitingListFill.style.background = "linear-gradient(to right, #d98208, #db0606)";
  waitingListFill.style.borderRadius = "23px";

  waitingListFill.style.height = "100%"

  
  const textBelowWaitingListBar = document.createElement("h3");
  textBelowWaitingListBar.textContent = `People in Waiting List: ${waitingList}%`;
  
  waitingListBar.appendChild(waitingListFill);
  waitingListBarContainer.appendChild(waitingListBar);
  card4.appendChild(waitingListBarContainer);
  card4.appendChild(textBelowWaitingListBar);
  
  workingContainer.appendChild(card4);


  //card 5
  const card5 = document.createElement("div");
  card5.className = "card";
  card5.style.height = "200px";
  card5.style.backgroundColor = "black";

  const consoleHeading = document.createElement("div");
  consoleHeading.style.position = "sticky";
  consoleHeading.style.top = "0";
  //consoleHeading.style.background = "white";
  consoleHeading.style.padding = "10px";
  consoleHeading.style.width = "100%"
  consoleHeading.style.borderRadius = "23px 23px 0 0";


  const headingText = document.createElement("h1");
  headingText.textContent = "</> Console";
  headingText.style.fontSize = "15px";
  headingText.style.color = "white";
  headingText.style.paddingLeft = "15px";
  headingText.style.paddingTop = "5px";
  headingText.style.textAlign = "left";

  consoleHeading.appendChild(headingText);
  card5.appendChild(consoleHeading);

  const consoleOutput = document.createElement("div");

  consoleOutput.id = "console-output";
  consoleOutput.style.overflow = "auto";
  consoleOutput.style.height = "calc(100% - 30%)";
  consoleOutput.style.width = "100%";
  consoleOutput.style.textAlign = "left";
  consoleOutput.style.color = "white";
  consoleOutput.style.fontSize = "7px";
  consoleOutput.style.paddingLeft = "15px";

  consoleOutput.style.borderRadius = "0 0 23px 23px";


  card5.appendChild(consoleOutput);

  workingContainer.appendChild(card5);




  //card 6
  const card6 = document.createElement("div");
  card6.className = "card";
  card6.id = "automator-card";
  card6.style.height = "200px";
  card6.style.backgroundImage = "linear-gradient(to top, rgba(255, 0, 0, 0.5) 50%, rgba(204, 0, 0, 0.5) 50%), url('assets/red-gears.jpg')";
  card6.style.backgroundSize = "cover";

  const text6 = document.createElement("h1");
  text6.textContent = "Automate";
  text6.style.fontSize = "1.8em";
  text6.style.color = "white";

  const viewButton6 = document.createElement("button");
  viewButton6.className = "header-button";
  viewButton6.id = "automator-card-button";
  viewButton6.textContent = "Start";
  viewButton6.style.backgroundImage = "linear-gradient(to bottom, #00FF00, #00CC00)";
  viewButton6.style.fontSize = "1.5em";

  card6.appendChild(text6);
  card6.appendChild(viewButton6);
  workingContainer.appendChild(card6);

  //automation event listener
  viewButton6.addEventListener("click", function() {
    if (viewButton6.textContent === "Start") {
      card6.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2016/08/06/11/08/arrows-1574168_1280.jpg')";
      card6.style.backgroundSize = "cover";
      text6.textContent = "Automating...";
      card6.style.boxShadow = "0 0 20px green";
      viewButton6.style.background = "linear-gradient(to top, #FF0000, #CC0000)";
      viewButton6.textContent = "Stop";
      card6.classList.add("glow");
    } else {
      text6.textContent = "Automator";
      card6.style.backgroundImage = "linear-gradient(to top, rgba(255, 0, 0, 0.5) 50%, rgba(204, 0, 0, 0.5) 50%), url('assets/red-gears.jpg')";
      card6.style.backgroundSize = "cover";
      viewButton6.style.background = "linear-gradient(to bottom, #00FF00, #00CC00)";
      card6.style.boxShadow = "0 0 20px red";
      viewButton6.textContent = "Start";
      card6.classList.remove("glow");
    }
  });



}

document.addEventListener("DOMContentLoaded", function() {
  if (workingContainer.innerHTML === "") {
    dashboard();
  }
});

dashb.addEventListener("click", function() {
  workingContainer.innerHTML = "";
  
  if (workingContainer.innerHTML === "") {
    dashboard();
  }
  
});

addCommittees.addEventListener("click", function() {
  workingContainer.innerHTML = "";
});

setUpBtn.addEventListener("click", function() {
  workingContainer.innerHTML = "";
  workingContainer.style.display = "flex";
  workingContainer.style.flexDirection = "column"

  setUpContainer.innerHTML = "";
  if (workingContainer.innerHTML === "") {

    workingContainer.innerHTML = "";
    workingContainer.style.height = "95vh";
    workingContainer.appendChild(setUpContainer)

    setUpContainer.style.display = "flex";
    setUpContainer.style.flexDirection = "column";
    setUpContainer.style.maxHeight = "80vh";
    setUpContainer.style.position = "top";

    setUpContainer.style.scrollBar = "hidden";
    setUpContainer.style.display = "flex";
    setUpContainer.style.flexDirection = "column"




    const addcomsText = document.createElement('h1');
    addcomsText.textContent = "ADD COMMITTEES"
    setUpContainer.appendChild(addcomsText);

    const defaultFieldContainer = createFieldContainer();
    setUpContainer.appendChild(defaultFieldContainer);

    const removeBtn = document.getElementById("remove-button");
    removeBtn.remove();



    setUpContainer.appendChild(extraFieldContainer)

    
      setUpContainer.appendChild(nextBtnContainer);
    
  }
  
});


document.addEventListener('DOMContentLoaded', function(){
  const jsonFileName = 'matrix.json';
  const jsonFilePath = path.join(__dirname,   '..', jsonFileName);

  fs.access(jsonFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      const addComBtn = document.getElementById("add-committees")
      addComBtn.disabled = true;
      addComBtn.style.pointerEvents = 'none';
      addComBtn.style.opacity = '0.5';

      const matrixBtn = document.getElementById("matrix")
      matrixBtn.disabled = true;
      matrixBtn.style.pointerEvents = 'none';
      matrixBtn.style.opacity = '0.5';


      console.log('JSON file does not exist.');
    } else {

      const setUp = document.getElementById("set-up")
      setUp.disabled = true;
      setUp.style.pointerEvents = 'none';
      setUp.style.opacity = '0.5';
      console.log('JSON file exists.');
    }
  });


});


