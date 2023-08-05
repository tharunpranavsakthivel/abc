const workingContainer = document.getElementById('working-container');

//committee tiles
function createTile(committeeName) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.textContent = committeeName;

  workingContainer.appendChild(tile);
    
}

export function loadCommittees(){

  const pageName = document.getElementById("page-name");
  pageName.textContent = "Committees";

  

  fetch('../matrix.json')
    .then(response => response.json())
    .then(data => {

      console.log("matrix.json found")
    
    const committeeNames = Object.keys(data);
    console.log(committeeNames)

    for (const committeeName of committeeNames) {
        createTile(committeeName);
        
    }
    if (workingContainer.childElementCount <= committeeNames.length){
      addNewComTile();
      console.log("add new tile added")
    }
    })
    .catch(error => console.error('Error loading data:', error));


    function addNewComTile(){
      const addNewCommittee = document.createElement('div');
      addNewCommittee.classList.add('tile');
      addNewCommittee.style.border = "4px solid #fff"
  
      const addNewCommitteeIMG = document.createElement('img');
      addNewCommitteeIMG.classList.add('tile-img');
      addNewCommitteeIMG.src = "assets/add.png"
      addNewCommittee.appendChild(addNewCommitteeIMG);
      workingContainer.appendChild(addNewCommittee);
    }

    workingContainer.addEventListener('click', function(event) {
      const clickedElement = event.target;
      
      if (clickedElement.classList.contains('tile')) {
        handleTileClick(clickedElement);
      }
    });

    function handleTileClick(tile) {
      const imgElement = tile.querySelector('img');
    
      if (imgElement) {
        console.log("Tile with an image is clicked");
      }
      else{
        const tileName = tile.textContent;
        workingContainer.innerHTML = "";
        workingContainer.style.display = "flex";
        createTable(tile);
        console.log(`${tileName} tile is clicked`);

      }
    
      
    
    }
}

function createTable(committeeTile) {
  fetch('../matrix.json')
    .then(response => response.json())
    .then(data => {

      if (workingContainer.childElementCount == 0){

        const committeeName = committeeTile.textContent;
        const committeeData = data[committeeName];

        const tableContainer = document.createElement("div");
        tableContainer.id = 'table-container';

        // Create the table element
        const table = document.createElement("table");

        // Create the table header
        const thead = document.createElement("thead");

        // Create the committee name row
        const committeeNameRow = document.createElement("tr");
        const committeeNameCell = document.createElement("th");
        committeeNameCell.textContent = committeeName;
        committeeNameCell.setAttribute("colspan", "4"); // Span the cell across all subheadings
        committeeNameRow.appendChild(committeeNameCell);
        thead.appendChild(committeeNameRow);

        // Create the sub-heading row
        const subHeadings = ["mostPertinent", "moderatelyPertinent", "leastPertinent"];
        const subHeadingRow = document.createElement("tr");
        subHeadings.forEach(subHeading => {
          const subHeadingCell = document.createElement("th");
          subHeadingCell.textContent = subHeading;
          subHeadingRow.appendChild(subHeadingCell);
        });
        thead.appendChild(subHeadingRow);

        table.appendChild(thead);

        // Create the table body
        const tbody = document.createElement("tbody");

        // Calculate the total rows required for tbody
        const totalRows = Math.max(...subHeadings.map(subHeading => committeeData[subHeading].length));

        for (let i = 0; i < totalRows; i++) {
          const row = document.createElement("tr");

          subHeadings.forEach(subHeading => {
            const dataCell = document.createElement("td");
            dataCell.textContent = committeeData[subHeading][i] || ""; // Fill the cell with data if available
            row.appendChild(dataCell);
          });

          // Apply alternating row colors
          if (i % 2 === 0) {
            row.classList.add("even-row");
          } else {
            row.classList.add("odd-row");
          }

          tbody.appendChild(row);
        }

        table.appendChild(tbody);

        // Apply table styling
        table.classList.add("custom-table");

        // Set the table height to 90vh and make the tbody scrollable
        tableContainer.style.height = "90vh";
        tableContainer.style.width = "100%";
        tableContainer.style.justifyContent = "center";
        tableContainer.style.overflowY = "auto";


        tableContainer.appendChild(table);
        workingContainer.appendChild(tableContainer);
 }
 });
}
