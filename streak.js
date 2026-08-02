// =====================
// UpLift Daily Streak System v2
// =====================


function canCompleteDay(){


    const today = new Date().toLocaleDateString();



    const completedWorkout =
    userData.completedToday.length > 0;



    const loggedNutrition =
    userData.nutritionEntries.some(
        entry => entry.date === today
    );



    return completedWorkout || loggedNutrition;


}






function completeUpLiftDay(){


    const today =
    new Date().toLocaleDateString();



    if(userData.lastStreakDate === today){


        alert(
            "🔥 You already completed UpLift today!"
        );


        return;


    }





    if(!canCompleteDay()){


        alert(
            "Complete a workout or log nutrition first! 💪🥗"
        );


        return;


    }






    const yesterday = new Date();


    yesterday.setDate(
        yesterday.getDate() - 1
    );



    const yesterdayString =
    yesterday.toLocaleDateString();







    let previousStreak =
    userData.streak;







    if(userData.lastStreakDate === yesterdayString){



        userData.streak++;



    }


    else{


        if(userData.streak > userData.longestStreak){


            userData.longestStreak =
            userData.streak;


        }




        userData.streak = 1;


    }









    if(userData.streak > userData.longestStreak){


        userData.longestStreak =
        userData.streak;


    }







    userData.lastStreakDate = today;






    userData.streakHistory.push({


        date:today,


        streak:userData.streak


    });









    addXP(25);







    addDiaryEntry(


        "achievement",


        "UpLift Day Completed",


        `🔥 ${userData.streak} day streak`,


        25


    );







    saveUserData();




    showPage("home");


}
