// =====================
// UpLift Diary Badges
// =====================


const diaryBadges = {


    firstReflection: {

        name: "First Reflection",

        icon: "📖",

        description: "Create your first diary entry.",

        category: "Diary",

        rarity: "Common",

        goal: 1,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 1

    },


    dailyWriter: {

        name: "Daily Writer",

        icon: "✍️",

        description: "Create 10 diary entries.",

        category: "Diary",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 10

    },


    reflectionRookie: {

        name: "Reflection Rookie",

        icon: "🌱",

        description: "Create 25 diary entries.",

        category: "Diary",

        rarity: "Rare",

        goal: 25,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 25

    },


    growthJournaler: {

        name: "Growth Journaler",

        icon: "🌿",

        description: "Create 50 diary entries.",

        category: "Diary",

        rarity: "Epic",

        goal: 50,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 50

    },


    memoryKeeper: {

        name: "Memory Keeper",

        icon: "📚",

        description: "Create 100 diary entries.",

        category: "Diary",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 100

    },


    storyBuilder: {

        name: "Story Builder",

        icon: "📝",

        description: "Create 150 diary entries.",

        category: "Diary",

        rarity: "Legendary",

        goal: 150,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 150

    },


    reflectionMaster: {

        name: "Reflection Master",

        icon: "✨",

        description: "Create 250 diary entries.",

        category: "Diary",

        rarity: "Mythic",

        goal: 250,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 250

    },


    diaryLegend: {

        name: "Diary Legend",

        icon: "👑",

        description: "Create 365 diary entries.",

        category: "Diary",

        rarity: "Mythic",

        goal: 365,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 365

    },


    endlessReflection: {

        name: "Endless Reflection",

        icon: "💎",

        description: "Create 500 diary entries.",

        category: "Diary",

        rarity: "Mythic",

        goal: 500,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 500

    },


    ultimateJournal: {

        name: "Ultimate Journal",

        icon: "🏆",

        description: "Create 1000 diary entries.",

        category: "Diary",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 1000

    }


};
