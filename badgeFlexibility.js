// =====================
// UpLift Flexibility Badges
// =====================


const flexibilityBadges = {


    flexibilityFlow: {

        name: "Flexibility Flow",

        icon: "🩰",

        description: "Complete 10 flexibility sessions.",

        category: "Flexibility",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 10

    },


    flexibilityBuilder: {

        name: "Flexibility Builder",

        icon: "🌱",

        description: "Complete 25 flexibility sessions.",

        category: "Flexibility",

        rarity: "Common",

        goal: 25,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 25

    },


    flexibilityMaster: {

        name: "Flexibility Master",

        icon: "🤸",

        description: "Complete 50 flexibility sessions.",

        category: "Flexibility",

        rarity: "Epic",

        goal: 50,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 50

    },


    stretchSpecialist: {

        name: "Stretch Specialist",

        icon: "🧘",

        description: "Complete 75 flexibility sessions.",

        category: "Flexibility",

        rarity: "Epic",

        goal: 75,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 75

    },


    flexibilityLegend: {

        name: "Flexibility Legend",

        icon: "✨",

        description: "Complete 100 flexibility sessions.",

        category: "Flexibility",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 100

    },


    mobilityMaster: {

        name: "Mobility Master",

        icon: "🌊",

        description: "Complete 150 flexibility sessions.",

        category: "Flexibility",

        rarity: "Legendary",

        goal: 150,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 150

    },


    balanceFlow: {

        name: "Balance Flow",

        icon: "⚖️",

        description: "Complete 200 flexibility sessions.",

        category: "Flexibility",

        rarity: "Legendary",

        goal: 200,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 200

    },


    flexibilityElite: {

        name: "Flexibility Elite",

        icon: "💎",

        description: "Complete 300 flexibility sessions.",

        category: "Flexibility",

        rarity: "Mythic",

        goal: 300,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 300

    },


    flexibilityTitan: {

        name: "Flexibility Titan",

        icon: "🦋",

        description: "Complete 500 flexibility sessions.",

        category: "Flexibility",

        rarity: "Mythic",

        goal: 500,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 500

    },


    ultimateFlexibility: {

        name: "Ultimate Flexibility",

        icon: "👑",

        description: "Complete 1000 flexibility sessions.",

        category: "Flexibility",

        rarity: "Mythic",

        goal: 1000,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 1000

    }


};
