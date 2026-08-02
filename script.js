const app = document.getElementById("app");


// =====================
// CALENDAR SYSTEM
// =====================

let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();


function changeCalendarMonth(amount){

    calendarMonth += amount;

    if(calendarMonth > 11){
        calendarMonth = 0;
        calendarYear++;
    }

    if(calendarMonth < 0){
        calendarMonth = 11;
        calendarYear--;
    }

    showPage("calendar");

}



function addCalendarEvent(){

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const time = document.getElementById("eventTime").value;
    const type = document.getElementById("eventType").value;


    if(title === "" || date === ""){
        return;
    }


    userData.calendarEvents.push({

        title:title,
        date:date,
        time:time,
        type:type

    });


    saveUserData();

    checkEventMode();

    showPage("calendar");

}



function checkEventMode(){

    const today = new Date()
    .toISOString()
    .split("T")[0];


    const todaysEvent =
    userData.calendarEvents.find(event =>
        event.date === today
    );


    if(!todaysEvent){

        userData.mode = "Regular";

    }

    else if(todaysEvent.type === "Vacation"){

        userData.mode = "Vacation";

    }

    else if(todaysEvent.type === "Event"){

        userData.mode = "Event";

    }


    saveUserData();

    applyTheme();

}




function deleteCalendarEvent(date){

    userData.calendarEvents =
    userData.calendarEvents.filter(event =>
        event.date !== date
    );


    saveUserData();

    checkEventMode();

    showPage("calendar");

}




function openCalendarDay(date){

    const box =
    document.getElementById("calendarEventBox");


    box.innerHTML = `

    <div class="card">

    <h2>Add Event</h2>


    <input
    id="eventTitle"
    placeholder="Event Name"
    >


    <input
    id="eventDate"
    type="date"
    value="${date}"
    >


    <input
    id="eventTime"
    type="time"
    >


    <select id="eventType">

    <option value="Event">
    Event
    </option>

    <option value="Vacation">
    Vacation
    </option>

    </select>


    <button onclick="addCalendarEvent()">
    ➕ Save Event
    </button>


    <button onclick="deleteCalendarEvent('${date}')">
    🗑️ Delete Event
    </button>


    </div>

    `;

}




// =====================
// SETTINGS
// =====================


function changeMode(mode){

    userData.mode = mode;

    saveUserData();

    applyTheme();

    showPage("settings");

}



function toggleARFID(){

    userData.arfidSupport =
    !userData.arfidSupport;


    saveUserData();

    showPage("settings");

}





function applyTheme(){

    document.body.className = "";


    if(userData.mode === "Regular"){
        document.body.classList.add("regular-theme");
    }


    if(userData.mode === "Vacation"){
        document.body.classList.add("vacation-theme");
    }


    if(userData.mode === "Period"){
        document.body.classList.add("period-theme");
    }


    if(userData.mode === "Event"){
        document.body.classList.add("event-theme");
    }

}





// =====================
// PROFILE CREATION
// =====================


function createProfile(){


    userData.profileName =
    document.getElementById("profileName").value;


    userData.athleteType =
    document.getElementById("athleteType").value;


    userData.goal =
    document.getElementById("goal").value;


    userData.profileDate =
    new Date().toLocaleDateString();


    userData.profileCreated = true;


    addDiaryEntry(
        "achievement",
        "Profile Created",
        "Started the UpLift journey",
        10
    );


    addXP(10);


    saveUserData();


    checkBadges();


    showPage("profile");

}




// =====================
// XP SYSTEM
// =====================


function addXP(amount){


    userData.xp += amount;


    while(userData.xp >= userData.xpToNextLevel){

        userData.xp -= userData.xpToNextLevel;

        userData.level++;

        userData.xpToNextLevel += 100;

    }


}






// =====================
// WATER SYSTEM
// =====================


function addWater(){


    if(userData.waterToday < userData.waterGoal){

        userData.waterToday++;

        addXP(5);


        addDiaryEntry(
            "nutrition",
            "Water Added",
            "Drank 1 cup of water",
            5
        );


        saveUserData();

    }


    showPage("nutrition");

}



function resetWater(){

    userData.waterToday = 0;

    saveUserData();

    showPage("nutrition");

}



function showCalorieCalculator(){

    showPage("calorieCalculator");

}






// =====================
// WORKOUT COMPLETION
// =====================


function completeWorkout(workoutName){


    if(userData.completedToday.includes(workoutName)){
        return;
    }


    userData.completedToday.push(workoutName);

    userData.workoutsCompleted++;


    const workout =
    workoutTypes[workoutName];


    if(workout){

        addXP(workout.xp);


        switch(workout.category){

            case "core":
                userData.coreWorkouts++;
                break;

            case "strength":
                userData.strengthWorkouts++;
                break;

            case "backspot":
                userData.backspotWorkouts++;
                break;

            case "flexibility":
                userData.flexibilitySessions++;
                break;

            case "lowerBody":
                userData.lowerBodyWorkouts++;
                break;

            case "upperBody":
                userData.upperBodyWorkouts++;
                break;

            case "jump":
                userData.jumpSessions++;
                break;

        }

    }


    addDiaryEntry(
        "workout",
        workoutName,
        "Completed workout",
        workout ? workout.xp : 0
    );


    saveUserData();

    checkBadges();

}
// =====================
// NUTRITION CALCULATOR
// =====================


function calculateCalories(){

    const age =
    Number(document.getElementById("calcAge").value);


    const sex =
    document.getElementById("calcSex").value;


    const feet =
    Number(document.getElementById("calcFeet").value);


    const inches =
    Number(document.getElementById("calcInches").value);


    const weight =
    Number(document.getElementById("calcWeight").value);



    const height =
    (feet * 12) + inches;



    const kg =
    weight * 0.453592;


    const cm =
    height * 2.54;



    let bmr;



    if(sex === "Male"){

        bmr =
        (10 * kg) +
        (6.25 * cm) -
        (5 * age) +
        5;

    }

    else{

        bmr =
        (10 * kg) +
        (6.25 * cm) -
        (5 * age) -
        161;

    }




    const activity =
    Number(document.getElementById("calcActivity").value);



    const maintain =
    Math.round(bmr * activity);



    const goal =
    document.getElementById("calcGoal").value;



    let calorieTarget;



    if(goal === "loss"){

        calorieTarget =
        `${maintain - 400} - ${maintain - 250}`;

    }


    else if(goal === "gain"){

        calorieTarget =
        `${maintain + 250} - ${maintain + 400}`;

    }


    else{

        calorieTarget =
        `${maintain}`;

    }




    userData.calorieProfile = {

        age:age,

        sex:sex,

        height:height,

        weight:weight,

        activity:activity,

        calorieGoal:goal,

        calorieEstimate:calorieTarget

    };



    userData.calorieTargetToday =
    maintain;



    saveUserData();



    document.getElementById("calorieResults").innerHTML = `

    <h2>Recommended Calories</h2>

    <p>
    <b>Your Goal:</b>
    ${calorieTarget} calories
    </p>


    <p>
    <b>Maintenance:</b>
    ${maintain} calories
    </p>

    `;


}




function addNutritionFood(){


    const food =
    document.getElementById("foodName").value;



    const calories =
    Number(document.getElementById("foodCalories").value) || 0;



    const meal =
    document.getElementById("foodMeal").value;



    const note =
    document.getElementById("foodNote").value;



    if(food === ""){
        return;
    }



    userData.nutritionEntries.push({

        food:food,

        calories:calories,

        meal:meal,

        note:note,

        date:new Date().toLocaleDateString()

    });



    userData.caloriesToday += calories;



    addXP(10);



    addDiaryEntry(

        "nutrition",

        food,

        `${meal} • ${calories} calories`,

        10

    );



    saveUserData();



    showPage("nutrition");


}






// =====================
// DIARY CONTROLS
// =====================


function changeDiaryDate(amount){


    let current =
    new Date(
        userData.selectedDiaryDate || new Date()
    );


    current.setDate(
        current.getDate() + amount
    );



    userData.selectedDiaryDate =
    current.toLocaleDateString();



    saveUserData();



    showPage("foodlog");

}



function resetDiaryDate(){


    userData.selectedDiaryDate =
    new Date().toLocaleDateString();



    saveUserData();



    showPage("foodlog");

}





// =====================
// REMOVE FOOD ENTRY
// =====================


function removeNutritionEntry(index){


    const item =
    userData.nutritionEntries[index];



    if(item){


        userData.caloriesToday -=
        item.calories || 0;



        userData.nutritionEntries.splice(
            index,
            1
        );


    }



    saveUserData();


    showPage("nutrition");


}







// =====================
// BADGES
// =====================


function changeBadgeCategory(category){


    userData.selectedBadgeCategory =
    category;


    saveUserData();


    showPage("badges");


}







// =====================
// PAGE DISPLAY
// =====================


function showPage(page){


let content = "";




// =====================
// CALENDAR PAGE
// =====================


if(page === "calendar"){


const firstDay =
new Date(
    calendarYear,
    calendarMonth,
    1
).getDay();



const daysInMonth =
new Date(
    calendarYear,
    calendarMonth + 1,
    0
).getDate();



const monthName =
new Date(
    calendarYear,
    calendarMonth
)
.toLocaleString(
    "default",
    {
        month:"long",
        year:"numeric"
    }
);



let calendarHTML = "";



for(let i = 0; i < firstDay; i++){

    calendarHTML +=
    `<div class="calendar-day empty"></div>`;

}



for(let day = 1; day <= daysInMonth; day++){


const dateString =
`${calendarYear}-${String(calendarMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;



const hasEvent =
userData.calendarEvents.some(event =>
event.date === dateString
);



calendarHTML += `


<div class="calendar-day ${hasEvent ? "has-event":""}"

onclick="openCalendarDay('${dateString}')">


<h3>${day}</h3>


${hasEvent ? "🟦" : ""}


</div>


`;

}



content = `

<h1>🗓️ Calendar</h1>


<div class="card">

<button onclick="changeCalendarMonth(-1)">
⬅️
</button>


<h2>${monthName}</h2>


<button onclick="changeCalendarMonth(1)">
➡️
</button>


</div>



<div class="calendar-grid">

${calendarHTML}

</div>



<div id="calendarEventBox"></div>


`;

}
// =====================
// REMAINING PAGES
// =====================


if(page === "home"){


content = `


<h1>💖 FULL OUT</h1>


<div class="card">

<h2>⭐ Level ${userData.level}</h2>

<p>
${userData.xp}/${userData.xpToNextLevel} XP
</p>

</div>



<div class="card">

<h2>🔥 ${userData.streak} Day Streak</h2>


<p>
Keep showing up 💪
</p>


<p>
🏆 Best Streak:
${userData.longestStreak}
Days
</p>



<button onclick="completeUpLiftDay()">

🔥 Complete UpLift Day

</button>


</div>



<div class="card">

<h2>🥗 Daily Nutrition</h2>


<p>
🔥 Calories:
${userData.caloriesToday}
</p>


<p>
💧 Water:
${userData.waterToday}/${userData.waterGoal}
</p>


</div>


`;

}





// =====================
// NUTRITION PAGE
// =====================


if(page === "nutrition"){



let cups = "";


for(let i = 0; i < userData.waterGoal; i++){


cups +=
i < userData.waterToday
?
"💧"
:
"⬜";


}



content = `


<h1>🥗 Nutrition</h1>



<div class="card">

<h2>🎯 Daily Calorie Estimate</h2>


<p>

${
userData.calorieProfile.calorieEstimate
?
userData.calorieProfile.calorieEstimate + " calories/day"
:
"No estimate yet."
}

</p>


<button onclick="showPage('calorieCalculator')">

Calculate Calories

</button>


</div>




<div class="card">

<h2>🔥 Calories Today</h2>


<h1>

${userData.caloriesToday}

</h1>


<p>

🎯 Goal:
${userData.calorieTargetToday || "Set calculator first"}

</p>


<p>

Remaining:

${
userData.calorieTargetToday
?
Math.max(
userData.calorieTargetToday - userData.caloriesToday,
0
)
:
"—"
}

calories

</p>


</div>





<div class="card">

<h2>💧 Hydration</h2>


<div class="water-display">

${cups}

</div>


<p>

${userData.waterToday}/${userData.waterGoal} cups

</p>



<button onclick="addWater()">

➕ Add Cup

</button>



<button onclick="resetWater()">

Reset

</button>


</div>





<div class="card">

<h2>🍽️ Log Food</h2>


<input
id="foodName"
placeholder="Food name"
>


<input
id="foodCalories"
type="number"
placeholder="Calories"
>


<select id="foodMeal">

<option>Breakfast</option>

<option>Lunch</option>

<option>Dinner</option>

<option>Snack</option>

</select>


<textarea
id="foodNote"
placeholder="Notes"
></textarea>



<button onclick="addNutritionFood()">

➕ Add To Diary

</button>


</div>


`;

}








// =====================
// CALORIE CALCULATOR PAGE
// =====================


if(page === "calorieCalculator"){


content = `


<h1>🔥 Calorie Calculator</h1>



<div class="card">


<h2>Your Information</h2>



<input
id="calcAge"
type="number"
placeholder="Age"
>



<select id="calcSex">

<option>Female</option>

<option>Male</option>

</select>



<input
id="calcFeet"
type="number"
placeholder="Height Feet"
>



<input
id="calcInches"
type="number"
placeholder="Height Inches"
>



<input
id="calcWeight"
type="number"
placeholder="Weight lbs"
>



<select id="calcActivity">


<option value="1.2">
Little or no exercise
</option>


<option value="1.375">
Light exercise
</option>


<option value="1.55">
Moderate exercise
</option>


<option value="1.725">
Heavy exercise
</option>


<option value="1.9">
Athlete level
</option>


</select>




<select id="calcGoal">


<option value="loss">
Fat Loss
</option>


<option value="maintain">
Maintenance
</option>


<option value="gain">
Muscle Gain
</option>


</select>



<button onclick="calculateCalories()">

Calculate

</button>


<div id="calorieResults"></div>


</div>


`;

}





// =====================
// PROFILE
// =====================


if(page === "profile"){


content = `


<h1>👤 Profile</h1>


<div class="card">


<h2>

${userData.profileName || "Create Profile"}

</h2>


<p>
🤸 ${userData.athleteType || ""}
</p>


<p>
🎯 ${userData.goal || ""}
</p>


</div>


`;

}








// =====================
// TROPHY ROOM
// =====================


if(page === "badges"){


const earned =
userData.unlockedBadges.length;


const total =
Object.keys(badges).length;



content = `


<h1>🏆 Trophy Room</h1>


<div class="card">

<h2>
🏅 ${earned}/${total}
</h2>

<p>
Badges Earned
</p>


</div>


<div class="badge-gallery">


${Object.keys(badges).map(id=>{


const badge = badges[id];


const unlocked =
userData.unlockedBadges.includes(id);



return `


<div class="badge-card ${unlocked ? "unlocked":"locked"}">


<h2>

${unlocked ? badge.icon:"🔒"}

</h2>


<h3>

${unlocked ? badge.name:"Locked Badge"}

</h3>


<p>

${badge.description}

</p>


</div>


`;

}).join("")}


</div>


`;

}







// =====================
// SETTINGS
// =====================


if(page === "settings"){


content = `


<h1>⚙️ Settings</h1>



<div class="card">


<h2>🌈 App Mode</h2>



<button onclick="changeMode('Regular')">

💖 Regular

</button>



<button onclick="changeMode('Vacation')">

🤍 Vacation

</button>



<button onclick="changeMode('Period')">

❤️ Period

</button>



</div>





<div class="card">


<h2>🥗 Nutrition Support</h2>



<label>


<input
type="checkbox"
${userData.arfidSupport ? "checked":""}
onclick="toggleARFID()"
>


ARFID Support Mode


</label>



</div>



`;

}






// =====================
// BOTTOM NAV
// =====================


app.innerHTML = content + `


<div class="bottom-nav">


<button onclick="showPage('calendar')">
🗓️
</button>


<button onclick="showPage('home')">
🏠
</button>


<button onclick="showPage('training')">
💪
</button>


<button onclick="showPage('nutrition')">
🥗
</button>


<button onclick="showPage('foodlog')">
📋
</button>


<button onclick="showPage('diary')">
📔
</button>


<button onclick="showPage('badges')">
🏆
</button>


<button onclick="showPage('profile')">
👤
</button>


<button onclick="showPage('settings')">
⚙️
</button>


</div>


`;


}





// =====================
// START APP
// =====================


checkEventMode();

showPage("home");
