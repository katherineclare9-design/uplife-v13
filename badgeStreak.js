// =====================
// UpLift Streak Badges
// =====================


const streakBadges = {


    firstFlame: {

        name: "First Flame",

        icon: "🌱",

        description: "Maintain a 3 day UpLift streak.",

        category: "Streak",

        rarity: "Common",

        goal: 3,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 3

    },


    weekWarrior: {

        name: "Week Warrior",

        icon: "🔥",

        description: "Maintain a 7 day UpLift streak.",

        category: "Streak",

        rarity: "Rare",

        goal: 7,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 7

    },


    twoWeekTitan: {

        name: "Two Week Titan",

        icon: "⚡",

        description: "Maintain a 14 day UpLift streak.",

        category: "Streak",

        rarity: "Epic",

        goal: 14,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 14

    },


    monthlyMachine: {

        name: "Monthly Machine",

        icon: "🏆",

        description: "Maintain a 30 day UpLift streak.",

        category: "Streak",

        rarity: "Legendary",

        goal: 30,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 30

    },


    centuryLegend: {

        name: "Century Legend",

        icon: "👑",

        description: "Maintain a 100 day UpLift streak.",

        category: "Streak",

        rarity: "Mythic",

        goal: 100,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 100

    },


    streakMaster: {

        name: "Streak Master",

        icon: "💎",

        description: "Maintain a 60 day UpLift streak.",

        category: "Streak",

        rarity: "Epic",

        goal: 60,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 60

    },


    unstoppable: {

        name: "Unstoppable",

        icon: "🚀",

        description: "Maintain a 180 day UpLift streak.",

        category: "Streak",

        rarity: "Mythic",

        goal: 180,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 180

    },


    halfYearHero: {

        name: "Half Year Hero",

        icon: "🌟",

        description: "Maintain a 365 day UpLift streak.",

        category: "Streak",

        rarity: "Mythic",

        goal: 365,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 365

    },


    eternalFlame: {

        name: "Eternal Flame",

        icon: "🔥",

        description: "Maintain a 500 day UpLift streak.",

        category: "Streak",

        rarity: "Legendary",

        goal: 500,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 500

    },


    streakLegend: {

        name: "Streak Legend",

        icon: "👑",

        description: "Maintain a 1000 day UpLift streak.",

        category: "Streak",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 1000

    }


};
