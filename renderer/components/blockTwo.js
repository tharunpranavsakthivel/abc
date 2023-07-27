const { google } = require('googleapis');
import {showMatrix, committeeCheck, workingContainer, setUpContainer} from "./index.js";
import { serviceAccountCred } from "../constant/apiAuth.js";

export let spreadsheetMessageAdded = false;

export function spreadsheetDone() {
  const makeSpreadsheetSuccess = makeSpreadsheet();

  if (makeSpreadsheetSuccess) {
    // If spreadsheet was successfully made
    if (!spreadsheetMessageAdded) {
      const spreadsheetContainer = document.createElement("div");
      spreadsheetContainer.classList.add("message-container");
      spreadsheetContainer.style.gridColumn = "span 3";


      const tickImg = document.createElement("img");
      tickImg.setAttribute("id", "tick-img");
      tickImg.setAttribute("src", "assets/tick.png");
      spreadsheetContainer.appendChild(tickImg);

      const msg = document.createElement("h3");
      msg.classList.add("updates-msg");
      msg.textContent = "Spreadsheet was successfully made";
      spreadsheetContainer.appendChild(msg);

      const updatesBtn = document.createElement("button");
      updatesBtn.textContent = "View Sheets";
      updatesBtn.classList.add("updates-btn");
      updatesBtn.setAttribute("id", "updateBtn");
      spreadsheetContainer.appendChild(updatesBtn);

      workingContainer.appendChild(spreadsheetContainer);

      updatesBtn.addEventListener("click", () => {
        const websiteUrl = "https://www.google.com";
        window.open(websiteUrl);
      });

      spreadsheetMessageAdded = true;
    }
    showMatrix();
    const targetSection = document.getElementById("matrix-container");
    targetSection.scrollIntoView({ behavior: "smooth" });
  } 
  else {

    // If the spreadsheet was not made successfully, try again
    if (!spreadsheetMessageAdded) {
      const spreadsheetContainer = document.createElement("div");
      spreadsheetContainer.classList.add("message-container");

      const crossImg = document.createElement("img");
      crossImg.setAttribute("id", "tick-img");
      crossImg.setAttribute("src", "assets/cross.png");
      spreadsheetContainer.appendChild(crossImg);

      const msg = document.createElement("h3");
      msg.classList.add("updates-msg");
      msg.textContent = "Need editor permissions";
      spreadsheetContainer.appendChild(msg);

      const msg2 = document.createElement("h6");
      msg2.classList.add("updates-msg");
      msg2.textContent =
        "Please head to the sheets and add 'cpsprimemun@gmail.com' as an editor";
      msg2.style.fontSize = "1.2em";
      spreadsheetContainer.appendChild(msg2);

      const updatesBtn = document.createElement("button");
      updatesBtn.textContent = "View Sheets";
      updatesBtn.classList.add("updates-btn");
      updatesBtn.setAttribute("id", "updateBtn");
      spreadsheetContainer.appendChild(updatesBtn);

      workingContainer.appendChild(spreadsheetContainer);

      updatesBtn.addEventListener("click", () => {
        const websiteUrl = "https://www.google.com"; 
        window.open(websiteUrl)
      });

      spreadsheetMessageAdded = true;
    }

    setTimeout(spreadsheetDone, 2000); // Retry after 2 seconds
  }
}



export async function makeSpreadsheet() {
  /* // const sheetLink = document.getElementById('spreadsheet-id');
  // const serviceAccountCred = require("./credentials.json");
  
  const committeeList = ["DUP_CHK", "DUP", ...committeeCheck.map(arr => arr[0])];
  const lengthComList = committeeList.length;
  
  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
  //Start - SPREADSHEET ID CHECK
  const sheetLinkElement = document.getElementById('spreadsheet-id');
  const sheetLink = sheetLinkElement.value;

  const regex = /\/spreadsheets\/d\/([^/]+)/; // Replace with your actual regular expression pattern.

  const match = sheetLink.match(regex);
  //const spreadsheetIdMain = match[1];
  const spreadsheetIdMain = match && match[1] ? match[1] : "error";

  const spreadsheetIdMainLen = spreadsheetIdMain.length;
  console.log(spreadsheetIdMain);
  console.log(spreadsheetIdMainLen);
  //End
  console.log(committeeList);

  if (spreadsheetIdMainLen === 44) {
    
      const auth = await google.auth.getClient({
        credentials: serviceAccountCred,
        scopes: SCOPES,
      });
      const sheets = google.sheets({ version: 'v4', auth });
  
      for (let i = 0; i < lengthComList; i++){
        const sheetTitle = committeeList[i];
  
        const request = {
          spreadsheetId: spreadsheetIdMain,
          resource: {
            requests: [
              {
              addSheet: {
                properties: {
                  title: sheetTitle,
                    },
                  },
               },
            ],
          },
       };
        await sheets.spreadsheets.batchUpdate(request);
        console.log(`Sheet '${sheetTitle}' created.`);
    };
      
  
    
} */
  return true;
}