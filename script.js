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



    const title =

    document.getElementById("eventTitle").value;



    const date =

    document.getElementById("eventDate").value;



    const time =

    document.getElementById("eventTime").value;



    const type =

    document.getElementById("eventType").value;





    if(title === "" || date === ""){

        return;

    }





userData.calendarEvents.push({

    title:title,

    date:date,

    time:time,

    type:type.trim()

});


console.log("SAVED EVENT TYPE:", type);





saveUserData();

if(mode === "Period"){

    applyTheme();

    showPage("settings");

    return;

}

checkEventMode();

showPage("settings");

}







function checkEventMode(){

    const today = new Date().toISOString().split("T")[0];


const todaysEvents = userData.calendarEvents.filter(event =>
    event.date === today
);


const todaysEvent = todaysEvents[todaysEvents.length - 1];


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

// =====================
// CALENDAR DAY CREATOR
// =====================


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


    const box = document.getElementById(
        "calendarEventBox"
    );



    box.innerHTML = `



    <div class="card">


    <h2>
    Add Event
    </h2>



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

<option value="Event">Event</option>

<option value="Vacation">Vacation</option>

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

    if(mode !== "Period"){
        checkEventMode();
    }

}



function toggleARFID(){

    userData.arfidSupport = !userData.arfidSupport;

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





    const workout = workoutTypes[workoutName];





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
// NUTRITION
// =====================


function calculateCalories(){

const age = Number(document.getElementById("calcAge").value);

const sex = document.getElementById("calcSex").value;

const feet = Number(document.getElementById("calcFeet").value);

const inches = Number(document.getElementById("calcInches").value);

const height = (feet * 12) + inches;
const weight = Number(document.getElementById("calcWeight").value);

const activityElement = document.getElementById("calcActivity");

if(!activityElement){

    return;

}
    const kg = weight * 0.453592;

    const cm = height * 2.54;

    let bmr;

    if(sex === "Male"){

        bmr = 10 * kg + 6.25 * cm - 5 * age + 5;

    }

    else{

        bmr = 10 * kg + 6.25 * cm - 5 * age - 161;

    }

const activity = Number(document.getElementById("calcActivity").value);

const maintain = Math.round(bmr * activity);

const goal = document.getElementById("calcGoal")
    ? document.getElementById("calcGoal").value
    : "maintain";


let calorieTarget;


if(goal === "loss"){

    calorieTarget = `${maintain - 400} - ${maintain - 250}`;

}

else if(goal === "gain"){

    calorieTarget = `${maintain + 250} - ${maintain + 400}`;

}

else{

    calorieTarget = `${maintain}`;

}

userData.calorieProfile = {

    age: age,

    sex: sex,

    height: height,

    weight: weight,

    activity: activity,

    goal: goal,

    maintenance: maintain,

    calorieEstimate: calorieTarget

};


saveUserData();


document.getElementById("calorieResults").innerHTML = `
        <h2>Recommended Calories</h2>

<p><b>Your Goal:</b> ${calorieTarget} calories</p>

<p><b>Maintenance:</b> ${maintain} calories</p>
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


    let current = new Date(

        userData.selectedDiaryDate || new Date()

    );


    current.setDate(

        current.getDate() + amount

    );



    userData.selectedDiaryDate =

    current.toLocaleDateString();



    saveUserData();



    showPage("diary");



}






function resetDiaryDate(){


    userData.selectedDiaryDate =

    new Date().toLocaleDateString();



    saveUserData();



    showPage("diary");



}








// =====================
// REMOVE FOOD ENTRY
// =====================


function removeNutritionEntry(index){


    const item =

    userData.nutritionEntries[index];



    if(item){


        userData.caloriesToday -= item.calories || 0;


        userData.nutritionEntries.splice(index,1);



    }



    saveUserData();



    showPage("nutrition");



}









// =====================
// BADGE CATEGORY
// =====================

function changeBadgeCategory(category){

    userData.selectedBadgeCategory = category;

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



const firstDay = new Date(

    calendarYear,

    calendarMonth,

    1

).getDay();



const daysInMonth = new Date(

    calendarYear,

    calendarMonth + 1,

    0

).getDate();



const monthName = new Date(

    calendarYear,

    calendarMonth

).toLocaleString(

    "default",

    {

        month:"long",

        year:"numeric"

    }

);



let calendarHTML = "";



for(let i = 0; i < firstDay; i++){

    calendarHTML += `<div class="calendar-day empty"></div>`;

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




<h2>

${monthName}

</h2>




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
// HOME
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



<p>

Next Milestone:

${
    userData.streak < 3
    ?
    "🌱 3 Days"
    :
    userData.streak < 7
    ?
    "🔥 7 Days"
    :
    userData.streak < 14
    ?
    "⚡ 14 Days"
    :
    userData.streak < 30
    ?
    "🏆 30 Days"
    :
    "👑 100 Days"
}

</p>


</div>


<h2>🔥 Daily Check-In</h2>


<p>

Complete your UpLift day to grow your streak!

</p>




<button onclick="completeUpLiftDay()">

🔥 Complete UpLift Day

</button>



</div>

<h2>🥗 Daily Nutrition</h2>


<p>

🔥 Calories: ${userData.caloriesToday}

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


    cups += i < userData.waterToday

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
userData.calorieProfile.calorieEstimate
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







<div class="card">

<h2>🔥 Calorie Calculator</h2>

<p>

Find your recommended daily calorie intake.

</p>

<button onclick="showCalorieCalculator()">

Open Calculator

</button>

</div>

<div class="card">

<h2>📖 Today</h2>

<p>

Your food history is saved in your Diary.

</p>

<button onclick="showPage('foodlog')">

Open Food Log

</button>

</div>



`;



}









// =====================
// DIARY PAGE
// =====================


if(page === "foodlog"){



const selected =

userData.selectedDiaryDate ||
new Date().toLocaleDateString();





const entries =

getDiaryByDate(selected);






content = `



<h1>📋 Food Log</h1>






<div class="card">


<button onclick="changeDiaryDate(-1)">

⬅️

</button>




<button onclick="resetDiaryDate()">

Today

</button>





<button onclick="changeDiaryDate(1)">

➡️

</button>





<h2>

${selected}

</h2>



</div>








<div class="card">


${

entries.length === 0



?



`

<h3>

🌱 Nothing logged this day

</h3>

`



:



entries.map(entry=>`



<div class="diary-entry">



<h3>


${

entry.type === "nutrition"

?

"🥗"

:

entry.type === "workout"

?

"💪"

:

"⭐"

}


${entry.title}


</h3>





<p>

${entry.details}

</p>






<p>

⭐ +${entry.xp} XP

</p>



</div>



`).join("")



}



</div>



`;



}
// =====================
// PERSONAL DIARY PAGE
// =====================


if(page === "diary"){



const entries = userData.personalDiaryEntries;



const pageIndex = userData.selectedPersonalDiaryPage || 0;



const entry = entries[pageIndex];



content = `



<h1>📔 My Diary</h1>



<div class="card">



<button onclick="changeDiaryPage(-1)">

⬅️ Previous

</button>




<p>

Page ${entries.length === 0 ? 0 : pageIndex + 1}

of

${entries.length}

</p>




<button onclick="changeDiaryPage(1)">

Next ➡️

</button>



</div>






<div class="card">



${
entry

?


`

<h2>

${entry.date}

</h2>


<hr>


<p>

${entry.text}

</p>



<button onclick="deletePersonalDiaryEntry(${pageIndex})">

🗑️ Delete Page

</button>

`

:


`

<h2>

📖 Empty Page

</h2>


<p>

Write your first diary entry!

</p>


<textarea

id="diaryText"

placeholder="Write your thoughts..."

></textarea>


<br>


<button onclick="savePersonalDiaryEntry()">

Save Page

</button>


`

}



</div>



`;





`).join("")

}



</div>


`;

}





// =====================
// TRAINING PAGE
// =====================


if(page === "training"){



const days = [

"Sunday",

"Monday",

"Tuesday",

"Wednesday",

"Thursday",

"Friday",

"Saturday"

];



const today = days[new Date().getDay()];





if(userData.mode === "Vacation"){



content = `



<h1>🤍 Vacation Workout</h1>



<div class="card">

<h3>🌅 Morning</h3>


${vacationWorkouts.morning.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>


<span>${item}</span>


</label>



`).join("")}



</div>




<div class="card">

<h3>🌙 Night</h3>


${vacationWorkouts.nighttime.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>


<span>${item}</span>


</label>



`).join("")}



</div>



`;


}

else if(userData.mode === "Event"){



const workout = dailyWorkouts[today];


content = `



<h1>💙 Event Day Workout</h1>


<h2>${today}</h2>




<div class="card">


<h3>🌅 Morning</h3>


<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes("Event Morning Routine") ? "checked":""}

onchange="completeWorkout('Event Morning Routine')"

>


<span>Event Morning Routine</span>


</label>


</div>




<div class="card">


<h3>🌅 Morning</h3>


${workout.morning.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>


<span>${item}</span>


</label>



`).join("")}



</div>




<div class="card">


<h3>☀️ Midday</h3>


${workout.midday.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>


<span>${item}</span>


</label>



`).join("")}



</div>




<div class="card">


<h3>🌙 Night</h3>


${workout.nighttime.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>


<span>${item}</span>


</label>



`).join("")}



</div>



`;
}

else{



const workout = dailyWorkouts[today];



content = `



<h1>💪 Today's Workout</h1>


<h2>${today}</h2>






<div class="card">


<h3>🌅 Morning</h3>



${workout.morning.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>



<span>${item}</span>



</label>



`).join("")}



</div>








<div class="card">


<h3>☀️ Midday</h3>


${workout.midday.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"


>


<span>${item}</span>


</label>



`).join("")}



</div>





<div class="card">


<h3>
${
    userData.mode === "Period"
    ? "🌙 Night (Optional)"
    : "🌙 Night"
}
</h3>


${workout.nighttime.map(item=>`



<label class="workout-item">


<input

type="checkbox"

${userData.completedToday.includes(item) ? "checked":""}

onchange="completeWorkout('${item}')"



>



<span>${item}</span>



</label>



`).join("")}



</div>



`;



}



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
value="${userData.calorieProfile.age}"
>

<select id="calcSex">
<option ${userData.calorieProfile.sex==="Female"?"selected":""}>Female</option>
<option ${userData.calorieProfile.sex==="Male"?"selected":""}>Male</option>
</select>

<input
id="calcFeet"
type="number"
placeholder="Height (feet)"
value="${userData.calorieProfile.heightFeet}"
>

<input
id="calcInches"
type="number"
placeholder="Height (inches)"
value="${userData.calorieProfile.heightInches}"
>

<input
id="calcWeight"
type="number"
placeholder="Weight (lbs)"
value="${userData.calorieProfile.weight}"
>

<select id="calcActivity">

<option value="1.2">Sedentary (little or no exercise)</option>

<option value="1.375">Lightly active (exercise 1–3 days/week)</option>

<option value="1.55">Moderately active (exercise 3–5 days/week)</option>

<option value="1.725">Very active (exercise 6–7 days/week)</option>

<option value="1.9">Extra active (hard training/physical job)</option>

</select>


<select id="calcGoal">

<option value="loss">Fat Loss</option>

<option value="maintain">Maintenance</option>

<option value="gain">Muscle Gain</option>

</select>

<button onclick="calculateCalories()">
Calculate
</button>

<div id="calorieResults"></div>

</div>

`;


}

// =====================
// CALORIE CALCULATOR
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
placeholder="Height (feet)"
>

<input
id="calcInches"
type="number"
placeholder="Height (inches)"
>

<input
id="calcWeight"
type="number"
placeholder="Weight (lbs)"
>

<select id="calcActivity">

<option value="1.2">Little or no exercise</option>

<option value="1.375">Light exercise (1–3 days/week)</option>

<option value="1.55">Moderate exercise (3–5 days/week)</option>

<option value="1.725">Heavy exercise (6–7 days/week)</option>

<option value="1.9">Very heavy exercise / athlete</option>

</select>


<select id="calcGoal">

<option value="loss">Fat Loss</option>

<option value="maintain">Maintenance</option>

<option value="gain">Muscle Gain</option>

</select>


<button onclick="calculateCalories()">
Calculate
</button>
<div id="calorieResults"></div>

</div>

`;

}

// =====================
// PROFILE PAGE
// =====================


if(page === "profile"){



if(!userData.profileCreated){



content = `



<h1>👤 Create Profile</h1>




<div class="card">


<input

id="profileName"

placeholder="Name"

>




<select id="athleteType">


<option>Cheer Athlete</option>


<option>Strength Athlete</option>


<option>Flexibility Athlete</option>


</select>






<input

id="goal"

placeholder="Goal"

>




<button onclick="createProfile()">


Save Profile


</button>



</div>



`;



}



else{



content = `



<h1>👤 Profile</h1>






<div class="card">


<h2>

${userData.profileName}

</h2>



<p>

🤸 ${userData.athleteType}

</p>



<p>

🎯 ${userData.goal}

</p>



<p>

📅 Joined ${userData.profileDate}

</p>



</div>








<div class="card">


<h2>📊 Training Stats</h2>



<p>

💪 Total Workouts:

${userData.workoutsCompleted}

</p>



<hr>




<p>

🔥 Core:

${userData.coreWorkouts}

</p>



<p>

🏋️ Strength:

${userData.strengthWorkouts}

</p>



<p>

🤸 Backspot:

${userData.backspotWorkouts}

</p>



<p>

🩰 Flexibility:

${userData.flexibilitySessions}

</p>



<p>

🦵 Lower Body:

${userData.lowerBodyWorkouts}

</p>



<p>

💪 Upper Body:

${userData.upperBodyWorkouts}

</p>



<p>

⬆️ Jump Sessions:

${userData.jumpSessions}

</p>



</div>









<div class="card">


<h2>⭐ Progress</h2>



<p>

Level:

${userData.level}

</p>



<p>

XP:

${userData.xp}/${userData.xpToNextLevel}

</p>



<p>

🥗 Nutrition XP:

${userData.nutritionXP}

</p>



<p>

📖 Diary Entries:

${userData.diaryEntries.length}

</p>



</div>



`;



}



}









// =====================
// TROPHY ROOM
// =====================


if(page === "badges"){



const earned =
userData.unlockedBadges.length;

const total =
Object.keys(badges).length;

const categories = [

    "Getting Started",

    "Streak",

    "Core",

    "Strength",

    "Flexibility",

    "Nutrition",

    "Diary",

    "Special"

];

const selected =
userData.selectedBadgeCategory || "Getting Started";





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







<div class="badge-tabs">

${categories.map(category=>`

<button
class="${selected===category ? "active-tab" : ""}"
onclick="changeBadgeCategory('${category}')">

${category}

</button>

`).join("")}

</div>



<div class="badge-gallery">

${Object.keys(badges)

.filter(id=>badges[id].category===selected)

.map(id=>{

const badge = badges[id];

const unlocked =
userData.unlockedBadges.includes(id);

return `

<div class="badge-card ${unlocked ? "unlocked":"locked"}">

<h2>

${unlocked ? badge.icon : "🔒"}

</h2>

<h3>

${unlocked ? badge.name : "Locked Badge"}

</h3>

<p>

${badge.description}

</p>

<p>

⭐ ${badge.rarity}

</p>

</div>

`;

}).join("")}

</div>



`;



}









// =====================
// SETTINGS PAGE
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







<div class="card">


<h2>🗓️ Event Mode</h2>



<p>

Event Mode activates automatically when you have an Event scheduled for today.

</p>



<p>

Current Mode:

${userData.mode}

</p>



</div>








<div class="card">


<button onclick="resetProgress()">


Reset Progress


</button>



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
