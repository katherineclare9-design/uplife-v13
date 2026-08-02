// =====================
// UpLift Core Badges
// =====================


const coreBadges = {


    coreStarter: {

        name: "Core Starter",

        icon: "🔥",

        description: "Complete 5 core workouts.",

        category: "Core",

        rarity: "Common",

        goal: 5,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 5

    },


    coreCrusher: {

        name: "Core Crusher",

        icon: "💥",

        description: "Complete 25 core workouts.",

        category: "Core",

        rarity: "Rare",

        goal: 25,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 25

    },


    coreMaster: {

        name: "Core Master",

        icon: "🏆",

        description: "Complete 100 core workouts.",

        category: "Core",

        rarity: "Epic",

        goal: 100,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 100

    },


    abAssassin: {

        name: "Ab Assassin",

        icon: "🔪",

        description: "Complete 50 core workouts.",

        category: "Core",

        rarity: "Epic",

        goal: 50,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 50

    },


    plankPro: {

        name: "Plank Pro",

        icon: "🧱",

        description: "Complete 75 core workouts.",

        category: "Core",

        rarity: "Rare",

        goal: 75,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 75

    },


    hollowHoldHero: {

        name: "Hollow Hold Hero",

        icon: "🌀",

        description: "Complete 150 core workouts.",

        category: "Core",

        rarity: "Epic",

        goal: 150,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 150

    },


    stabilitySpecialist: {

        name: "Stability Specialist",

        icon: "⚖️",

        description: "Complete 200 core workouts.",

        category: "Core",

        rarity: "Legendary",

        goal: 200,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 200

    },


    coreElite: {

        name: "Core Elite",

        icon: "⚡",

        description: "Complete 300 core workouts.",

        category: "Core",

        rarity: "Legendary",

        goal: 300,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 300

    },


    coreTitan: {

        name: "Core Titan",

        icon: "🐉",

        description: "Complete 500 core workouts.",

        category: "Core",

        rarity: "Mythic",

        goal: 500,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 500

    },


    coreLegend: {

        name: "Core Legend",

        icon: "👑",

        description: "Complete 1000 core workouts.",

        category: "Core",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 1000

    }


};
