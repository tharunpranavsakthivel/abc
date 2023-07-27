
import { allCountries,committeeCheck, } from "./index.js";

//matrix section
export function showMatrix() {


    const matrixContainer = document.getElementById('matrix-container');
    matrixContainer.innerHTML = '';

    const matrixHeading = document.createElement("h1");
    matrixHeading.textContent = "Add Country Matrix "
    matrixContainer.appendChild(matrixHeading)
    
    

    const choiceContainer = document.createElement("div");
    choiceContainer.className = "committee-section";
    choiceContainer.style.display = "flex"
    
    const manualBtn = document.createElement("button");
    manualBtn.textContent = "Manual";
    manualBtn.className = "add-button";
    choiceContainer.appendChild(manualBtn);


    const bulkAddBtn = document.createElement("button");
    bulkAddBtn.textContent = "Add Custom"
    bulkAddBtn.className = "add-button";
    choiceContainer.appendChild(bulkAddBtn);


    matrixContainer.appendChild(choiceContainer);

    manualBtn.addEventListener("click", ()=>{
      manual();
    })

    bulkAddBtn.addEventListener("click", ()=>{
      bulk();
    })


    








    function manual(){

      //clearing the container 
      const matrixContainer = document.getElementById('matrix-container');
      matrixContainer.innerHTML = '';

      const matrixHeading = document.createElement("h1");
      matrixHeading.textContent = "Manual Mode"
      matrixContainer.appendChild(matrixHeading)


      // dictionary object to store data for all committees
    const committeeDict = {};
  
    committeeCheck.forEach((committeeData) => {
      const committeeName = committeeData[0];
      const numberOfCountries = committeeData[1];


      
  
      // committee-specific object if it doesn't exist
      if (!committeeDict[committeeName]) {
        committeeDict[committeeName] = {
          mostPertinent: [],
          moderatelyPertinent: [],
          leastPertinent: []
        };
      }
  
      const committeeSection = document.createElement('div');
      committeeSection.className = 'committee-section';
  
      const committeeTitle = document.createElement('h1');
      committeeTitle.textContent = committeeName;
      committeeTitle.style.color = 'black';
      committeeSection.appendChild(committeeTitle);
  
      const searchDiv = document.createElement('div');
      searchDiv.className = 'search-section';
  
      const countrySearchInput = document.createElement('input');
      countrySearchInput.type = 'text';
      countrySearchInput.id = 'matrix-input';
      countrySearchInput.placeholder = 'Search country...';
      searchDiv.appendChild(countrySearchInput);
  
      const addButton = document.createElement('button');
      addButton.id = 'add-button';
      addButton.textContent = 'Add';
      searchDiv.appendChild(addButton);
  
      const clearAllButton = document.createElement('button');
      clearAllButton.id = 'clear-all-button';
      clearAllButton.textContent = 'Clear';
      searchDiv.appendChild(clearAllButton);

      const backBtn = document.createElement("button");
      backBtn.textContent = "back"
      backBtn.className = "normal-button";
      searchDiv.appendChild(backBtn);

      backBtn.addEventListener("click", ()=>{
        showMatrix();
      })
  
      committeeSection.appendChild(searchDiv);
  
      const countriesList = document.createElement('div');
      countriesList.className = 'countries-list';
      committeeSection.appendChild(countriesList);

      //custom country entry row
        const customCountrySection = document.createElement('div');
        customCountrySection.className = 'custom-div';
        committeeSection.appendChild(customCountrySection);

        const customCountryButton = document.createElement('button');
        customCountryButton.textContent = 'Custom Country';
        customCountryButton.style.width = "100%";
        customCountryButton.style.gap = "3px";
        customCountryButton.className =  "add-button";
        customCountrySection.appendChild(customCountryButton);

        const customCountryInput = document.createElement('div');
        customCountryInput.className = 'custom-div';
        customCountryInput.style.display = "none";
        customCountrySection.appendChild(customCountryInput);

        

        const countryInput = document.createElement('input');
        countryInput.type = 'text';
        countryInput.id = 'custom-country-input';
        countryInput.placeholder = 'Country name...';
        customCountryInput.appendChild(countryInput);

        const pertinencyContainer = document.createElement('div');
        pertinencyContainer.className = 'pertinency-buttons';
        customCountryInput.appendChild(pertinencyContainer);

        // pertinency dropdown
        const pertinencyDropdown = document.createElement('select');
        pertinencyDropdown.id = 'pertinency-dropdown';
        pertinencyDropdown.placeholder = "Pertinency"
        pertinencyDropdown.style.backgroundColor = 'transparent';
        pertinencyDropdown.style.border = 'none';
        pertinencyDropdown.style.fontFamily = 'Arial';
        pertinencyDropdown.style.fontSize = '16px';
        pertinencyDropdown.style.border = '.9px solid black';
        pertinencyDropdown.style.borderRadius = '9px';
        pertinencyDropdown.style.cursor = 'pointer';

        pertinencyContainer.appendChild(pertinencyDropdown);

        // pertinency options 
        const pertinencyButtonColors = ["Pertinency",'Most', 'Moderate', 'Least'];
        pertinencyButtonColors.forEach((color) => {
        const pertinencyOption = document.createElement('option');
        pertinencyOption.id = "pertinency-option"
        pertinencyOption.value = color;
        pertinencyOption.textContent = color
        pertinencyDropdown.appendChild(pertinencyOption);
        });

        const enterButton = document.createElement('button');
        enterButton.classList.add("add-button")
        enterButton.textContent = 'Enter';
        customCountryInput.appendChild(enterButton);

        const closeButton = document.createElement('button');
        closeButton.classList.add("add-button")
        closeButton.textContent = 'Close';
        closeButton.style.backgroundColor = 'red';
        closeButton.style.color = "white"
        customCountryInput.appendChild(closeButton);

        //error message div
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.className = 'error-msg-container';
        committeeSection.appendChild( errorMessageDiv);

        matrixContainer.appendChild(committeeSection);

      
  
      const clickCount = {};

      customCountryButton.addEventListener('click', function () {
        customCountryButton.style.display= "none";
        customCountryInput.style.display = 'flex';
        

      });
      
      closeButton.addEventListener('click', function () {
        customCountryButton.style.display= "flex";
        customCountryInput.style.display = 'none';
        customCountryInput.style.width = "100%";

      });

      //"enterButton" event listener
      enterButton.addEventListener('click', function () {
        let valid = false;
        const pertinencyOption = document.getElementById("pertinency-dropdown").value;
        let customCountry = document.getElementById("custom-country-input").value;
      
        if (pertinencyOption === "Pertinency" || customCountry === "") {
          valid = false;
        } else {
          valid = true;
        }
      
        if (valid) {
          let committeeName = committeeTitle.textContent;
      
          switch (pertinencyOption) {
            case 'Most':
              committeeDict[committeeName].mostPertinent.push(customCountry);
              break;
            case 'Moderate':
              committeeDict[committeeName].moderatelyPertinent.push(customCountry);
              break;
            case 'Least':
              committeeDict[committeeName].leastPertinent.push(customCountry);
              break;
          }
      
          // Reset 
          document.getElementById("custom-country-input").value = '';
      
          console.log('Committee Dictionary:', committeeDict);
        }
      });
  

      // list of countries
      const committeeArrays = {};
  
      if (!committeeData[committeeName]) {
        committeeData[committeeName] = {
          mostPertinent: [],
          moderatelyPertinent: [],
          leastPertinent: []
        };
      }
  
      function createCountriesList() {
        // Create the committee-specific array if it doesn't exist
        if (!committeeArrays[committeeName]) {
          committeeArrays[committeeName] = Object.assign([], allCountries);
        }
  
        const committeeArray = committeeArrays[committeeName];
  
        countriesList.innerHTML = ''; // Clear previous content
        
        const searchTerm = countrySearchInput.value.toLowerCase();
        const filteredCountries = committeeArray.filter((country) => country.toLowerCase().includes(searchTerm));
  
        // Limit the number of countries to the specified count for each committee
        const countriesToShow = filteredCountries.slice(0, numberOfCountries);
  
        countriesToShow.forEach((country) => {
          const countryDiv = document.createElement('div');
          countryDiv.className = 'country-item';
          countryDiv.textContent = country;
          countryDiv.style.backgroundColor = 'transparent';
  
          // Initialize click count to 0 if it doesn't exist
          if (!clickCount[country]) {
            clickCount[country] = 0;
          }
  
          //background color changes
          countryDiv.addEventListener('click', function () {
            clickCount[country] = clickCount[country] ? (clickCount[country] % 4) + 1 : 1;
  
            switch (clickCount[country]) {
              case 1:
                countryDiv.style.backgroundColor = 'red';
                break;
              case 2:
                countryDiv.style.backgroundColor = 'yellow';
                break;
              case 3:
                countryDiv.style.backgroundColor = 'green';
                break;
              default:
                countryDiv.style.backgroundColor = 'transparent';
                break;
            }
          });
  
          countriesList.appendChild(countryDiv);
        });
      }
  
      //  search input -> dynamically update the list
      countrySearchInput.addEventListener('input', createCountriesList);
  
      // "Add" button
      addButton.addEventListener('click', function () {
        const selectedCountries = Array.from(document.querySelectorAll('.country-item')).filter(
          (countryDiv) => countryDiv.style.backgroundColor !== 'transparent'
        );
  
        selectedCountries.forEach((countryDiv) => {
  
          const committeeName = committeeTitle.textContent; 
          const countryName = countryDiv.textContent;
          
          console.log("selected country: ", countryName)
  
          
          const countryIndex  =  committeeArrays[committeeName].indexOf(countryName)
          console.log("selected country index: ", countryIndex)
          
      
          countryDiv.remove();
          const x = committeeArrays[committeeName].splice(countryIndex, 1);
          console.log("removed country: ",x )
  
          // Push based on background color
          switch (countryDiv.style.backgroundColor) {
            case 'red':
              committeeDict[committeeName].mostPertinent.push(countryName);
              break;
            case 'yellow':
              committeeDict[committeeName].moderatelyPertinent.push(countryName);
              break;
            case 'green':
              committeeDict[committeeName].leastPertinent.push(countryName);
              break;
          }
  
          return countryName;
        });
  
        console.log('Committee Dictionary:', committeeDict);   
      });
  
      // "Clear All" button
      clearAllButton.addEventListener('click', function () {
        const countryDivs = document.querySelectorAll('.country-item');
        countryDivs.forEach((countryDiv) => {
          countryDiv.style.backgroundColor = 'transparent';
          clickCount[countryDiv.textContent] = 0;
        });
        committeeData[committeeName] = {
          mostPertinent: [],
          moderatelyPertinent: [],
          leastPertinent: []
        };
      });
  
  
      // Initial list of countries
      createCountriesList();
    });

    const nBtnConatiner = document.createElement("div");
  nBtnConatiner.className = "committee-section";
  nBtnConatiner.style.display = "flex";

  const nBtn = document.createElement("button");
  nBtn.className="normal-button";
  nBtn.textContent = "Next";
  nBtnConatiner.appendChild(nBtn);


  matrixContainer.appendChild(nBtnConatiner);

    };

    function bulk(){

      //clearig the container
      const matrixContainer = document.getElementById('matrix-container');
  matrixContainer.innerHTML = '';

  const matrixHeading = document.createElement("h1");
  matrixHeading.textContent = "Bulk Entry Mode";
  matrixContainer.appendChild(matrixHeading);

  // Dictionary object to store data for all committees
  const committeeDict = {};

  committeeCheck.forEach((committeeData) => {
    const committeeName = committeeData[0];
    const numberOfCountries = committeeData[1];

    // Committee-specific object if it doesn't exist
    if (!committeeDict[committeeName]) {
      committeeDict[committeeName] = {
        mostPertinent: [],
        moderatelyPertinent: [],
        leastPertinent: []
      };
    }

    const committeeSection = document.createElement('div');
    committeeSection.className = 'committee-section';

    const header = document.createElement('div');
    header.className = 'head-section';

    const committeeTitle = document.createElement('h1');
    committeeTitle.textContent = committeeName;
    committeeTitle.style.color = 'black';

    const countryCountDisplay = document.createElement('p');
    countryCountDisplay.textContent = 'Country count: 0';


    header.appendChild(committeeTitle);
    header.appendChild(countryCountDisplay);



   

    committeeSection.appendChild(header);
    const mostPertinentDiv = createCategoryDiv('Most Pertinent:');
    const moderatelyPertinentDiv = createCategoryDiv('Moderately Pertinent:');
    const leastPertinentDiv = createCategoryDiv('Least Pertinent:');

    committeeSection.appendChild(mostPertinentDiv);
    committeeSection.appendChild(moderatelyPertinentDiv);
    committeeSection.appendChild(leastPertinentDiv);

    
    const countriesData = {
      mostPertinent: [],
      moderatelyPertinent: [],
      leastPertinent: [],
    };

    function updateCountryCount() {
      const totalCount =
        countriesData.mostPertinent.length +
        countriesData.moderatelyPertinent.length +
        countriesData.leastPertinent.length;

      const totalCountDisplay = totalCount > numberOfCountries ? `<span style="color: red">${totalCount}</span>` : totalCount;
      countryCountDisplay.innerHTML = `Country count: ${totalCountDisplay}`;
    }

    matrixContainer.appendChild(committeeSection);

    function autosize() {
      var text = $('.autosize');
    
      text.each(function () {
        $(this).attr('rows', 1);
        resize($(this));
      });
    
      text.on('input', function () {
        resize($(this));
      });
    
      function resize($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight + 'px');
      }
    }
    

    document.addEventListener('DOMContentLoaded', function () {
      autosize();
    });

    function createCategoryDiv(title) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';

      const categoryTitle = document.createElement('p');
      categoryTitle.textContent = title;

      categoryDiv.appendChild(categoryTitle);
      const categoryInput = document.createElement('textarea');
      categoryInput.className = 'category-input';
      categoryInput.rows = 1;
      categoryInput.style.width = '100%'; 

      categoryDiv.appendChild(categoryInput);


      // Add event listener to update the country count when there's a change in the text input
      categoryInput.addEventListener('input', () => {
        const inputText = categoryInput.value.trim();
        const countries = inputText === '' ? [] : inputText.split(',').map((country) => country.trim());
        switch (title) {
          case 'Most Pertinent:':
            countriesData.mostPertinent = countries;
            break;
          case 'Moderately Pertinent:':
            countriesData.moderatelyPertinent = countries;
            break;
          case 'Least Pertinent:':
            countriesData.leastPertinent = countries;
            break;
        }
        updateCountryCount();
      });

      function autoResizeTextArea(textarea) {
        textarea.style.height = '38px';
      
       
        textarea.style.height = textarea.scrollHeight + 'px';
      }

      categoryInput.addEventListener('input', () => {
        autoResizeTextArea(categoryInput);
      });
    

      return categoryDiv;
    }


    
    
    
      matrixContainer.appendChild(committeeSection);
  });

  const nBtnConatiner = document.createElement("div");
  nBtnConatiner.className = "committee-section";
  nBtnConatiner.style.display = "flex";

  const nBtn = document.createElement("button");
  nBtn.className="normal-button";
  nBtn.textContent = "Next";
  nBtnConatiner.appendChild(nBtn);

  const backBtn = document.createElement("button");
    backBtn.textContent = "back"
    backBtn.className = "normal-button";
    backBtn.style.backgroundColor= "red"
    nBtnConatiner.appendChild(backBtn);

    backBtn.addEventListener("click", ()=>{
      showMatrix();
    })


  matrixContainer.appendChild(nBtnConatiner);



    }
    
  }