//modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, update, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


//files
//import {extraFieldsContainer, createFieldContainer } from "./components/index.js";
import { dashboard } from "./components/index.js";
import {firebaseConfig } from "./constant/index.js";



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);




document.addEventListener('DOMContentLoaded', function () {
    dashboard();
});


















/*



function uploadDataToFirebase(UserEmailId, committeesData) {
    const committeesRef = ref(database, UserEmailId);

    const committeesDataObj = {};

    committeesData.forEach((committee) => {
        const committeeId = committee.Title;

        const committeeData = {
            details: {},
        };

        if (committee.mostPertinent) {
            committeeData.details.mostPertinent = committee.mostPertinent;
        }

        if (committee.moderatelyPertinent) {
            committeeData.details.moderatelyPertinent = committee.moderatelyPertinent;
        }

        if (committee.leastPertinent) {
            committeeData.details.leastPertinent = committee.leastPertinent;
        }

        committeesDataObj[committeeId] = committeeData;

        // Remove the 'title' attribute from the data object
        delete committeesDataObj[committeeId].title;
    });

    console.log(committeesDataObj);

    set(committeesRef, committeesDataObj)
        .then(() => {
            console.log("Committees data uploaded successfully.");
        })
        .catch((error) => {
            console.error("Error uploading committees data:", error);
        });
}
*/