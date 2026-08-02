// =====================
// UpLift Strength Badges
// =====================


const strengthBadges = {


    strengthStarter: {

        name: "Strength Starter",

        icon: "💪",

        description: "Complete 5 strength workouts.",

        category: "Strength",

        rarity: "Common",

        goal: 5,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 5

    },


    strengthBuilder: {

        name: "Strength Builder",

        icon: "🏋️",

        description: "Complete 15 strength workouts.",

        category: "Strength",

        rarity: "Rare",

        goal: 15,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 15

    },


    strengthMaster: {

        name: "Strength Master",

        icon: "🏆",

        description: "Complete 25 strength workouts.",

        category: "Strength",

        rarity: "Epic",

        goal: 25,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 25

    },


    powerUp: {

        name: "Power Up",

        icon: "⚡",

        description: "Complete 50 strength workouts.",

        category: "Strength",

        rarity: "Epic",

        goal: 50,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 50

    },


    strengthWarrior: {

        name: "Strength Warrior",

        icon: "🔥",

        description: "Complete 75 strength workouts.",

        category: "Strength",

        rarity: "Legendary",

        goal: 75,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 75

    },


    ironAthlete: {

        name: "Iron Athlete",

        icon: "🦾",

        description: "Complete 150 strength workouts.",

        category: "Strength",

        rarity: "Legendary",

        goal: 150,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 150

    },


    strengthElite: {

        name: "Strength Elite",

        icon: "⚔️",

        description: "Complete 250 strength workouts.",

        category: "Strength",

        rarity: "Mythic",

        goal: 250,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 250

    },


    strengthLegend: {

        name: "Strength Legend",

        icon: "👑",

        description: "Complete 100 strength workouts.",

        category: "Strength",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 100

    },


    strengthTitan: {

        name: "Strength Titan",

        icon: "🐉",

        description: "Complete 500 strength workouts.",

        category: "Strength",

        rarity: "Mythic",

        goal: 500,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 500

    },


    ultimateStrength: {

        name: "Ultimate Strength",

        icon: "💎",

        description: "Complete 1000 strength workouts.",

        category: "Strength",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 1000

    }


};
