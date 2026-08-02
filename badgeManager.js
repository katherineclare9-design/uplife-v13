// =====================
// UpLift Badge Manager
// Combines All Badge Categories
// =====================

const badges = {

    ...streakBadges,

    ...coreBadges,

    ...strengthBadges,

    ...flexibilityBadges,

    ...nutritionBadges,

    ...diaryBadges,

    ...specialBadges

};



// =====================
// Badge Unlock System
// =====================

function checkBadges(){

    Object.keys(badges).forEach(id=>{

        const badge = badges[id];

        if(

            !userData.unlockedBadges.includes(id)

            &&

            badge.requirement()

        ){

            userData.unlockedBadges.push(id);

            userData.badgeDates[id] =

                new Date().toLocaleDateString();

            alert(

                `🏆 Badge Unlocked!\n\n${badge.icon} ${badge.name}`

            );

        }

    });

    saveUserData();

}
