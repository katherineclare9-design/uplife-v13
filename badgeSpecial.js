// =====================
// UpLift Special Achievement Badges
// =====================


const specialBadges = {


    // =====================
    // Getting Started
    // =====================


    firstStep: {

        name: "First Step",

        icon: "🌱",

        description: "Complete your first workout.",

        category: "Getting Started",

        rarity: "Common",

        goal: 1,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 1

    },


    fiveWorkouts: {

        name: "Building Momentum",

        icon: "🚀",

        description: "Complete 5 workouts.",

        category: "Getting Started",

        rarity: "Common",

        goal: 5,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 5

    },


    tenWorkouts: {

        name: "Committed Athlete",

        icon: "🏅",

        description: "Complete 10 workouts.",

        category: "Getting Started",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 10

    },


    dedicatedAthlete: {

        name: "Dedicated Athlete",

        icon: "🏆",

        description: "Complete 50 workouts.",

        category: "Getting Started",

        rarity: "Legendary",

        goal: 50,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 50

    },


    hundredWorkouts: {

        name: "Century Athlete",

        icon: "💪",

        description: "Complete 100 workouts.",

        category: "Getting Started",

        rarity: "Epic",

        goal: 100,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 100

    },


    // =====================
    // Special
    // =====================


    levelTen: {

        name: "Rising Star",

        icon: "⭐",

        description: "Reach Level 10.",

        category: "Special",

        rarity: "Epic",

        goal: 10,

        progress: () => userData.level,

        requirement: () => userData.level >= 10

    },


    levelTwentyFive: {

        name: "UpLift Veteran",

        icon: "🌟",

        description: "Reach Level 25.",

        category: "Special",

        rarity: "Legendary",

        goal: 25,

        progress: () => userData.level,

        requirement: () => userData.level >= 25

    },


    levelFifty: {

        name: "Elite UpLifter",

        icon: "⚡",

        description: "Reach Level 50.",

        category: "Special",

        rarity: "Mythic",

        goal: 50,

        progress: () => userData.level,

        requirement: () => userData.level >= 50

    },


    ultimateCommitment: {

        name: "Ultimate Commitment",

        icon: "👑",

        description: "Complete 365 workouts.",

        category: "Special",

        rarity: "Mythic",

        goal: 365,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 365

    },


    upliftLegend: {

        name: "UpLift Legend",

        icon: "💎",

        description: "Reach Level 100.",

        category: "Special",

        rarity: "Mythic",

        goal: 100,

        progress: () => userData.level,

        requirement: () => userData.level >= 100

    }


};
