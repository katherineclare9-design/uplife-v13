// =====================
// UpLift Nutrition Badges
// =====================


const nutritionBadges = {


    firstMeal: {

        name: "First Fuel",

        icon: "🥗",

        description: "Log your first nutrition entry.",

        category: "Nutrition",

        rarity: "Common",

        goal: 1,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 1

    },


    mindfulEater: {

        name: "Mindful Eater",

        icon: "🌱",

        description: "Log 10 nutrition entries.",

        category: "Nutrition",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 10

    },


    hydrationHero: {

        name: "Hydration Hero",

        icon: "💧",

        description: "Reach your water goal 10 times.",

        category: "Nutrition",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.waterGoalCompletions || 0,

        requirement: () => (userData.waterGoalCompletions || 0) >= 10

    },


    balancedBuilder: {

        name: "Balanced Builder",

        icon: "🍎",

        description: "Log 25 nutrition entries.",

        category: "Nutrition",

        rarity: "Epic",

        goal: 25,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 25

    },


    nutritionConsistency: {

        name: "Fuel Consistency",

        icon: "🔥",

        description: "Maintain a 7 day nutrition streak.",

        category: "Nutrition",

        rarity: "Epic",

        goal: 7,

        progress: () => userData.nutritionStreak,

        requirement: () => userData.nutritionStreak >= 7

    },


    fuelMaster: {

        name: "Fuel Master",

        icon: "⚡",

        description: "Log 100 nutrition entries.",

        category: "Nutrition",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 100

    },


    hydrationMaster: {

        name: "Hydration Master",

        icon: "🌊",

        description: "Reach your water goal 100 times.",

        category: "Nutrition",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.waterGoalCompletions || 0,

        requirement: () => (userData.waterGoalCompletions || 0) >= 100

    },


    nutritionLegend: {

        name: "Nutrition Legend",

        icon: "👑",

        description: "Log 250 nutrition entries.",

        category: "Nutrition",

        rarity: "Mythic",

        goal: 250,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 250

    },


    ultimateFuel: {

        name: "Ultimate Fuel",

        icon: "💎",

        description: "Log 500 nutrition entries.",

        category: "Nutrition",

        rarity: "Mythic",

        goal: 500,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 500

    },


    nutritionTitan: {

        name: "Nutrition Titan",

        icon: "🏆",

        description: "Log 1000 nutrition entries.",

        category: "Nutrition",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 1000

    }


};
