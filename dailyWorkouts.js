// UpLift Daily Workout Schedule


const dailyWorkouts = {


    Sunday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Full Backspot Strength workout"
        ]

    },


    Monday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Lower body workout",
            "Upper body workout"
        ]

    },


    Tuesday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Full Backspot Strength workout"
        ]

    },


    Wednesday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Lower body workout",
            "Strength workout"
        ]

    },


    Thursday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Full Backspot Strength workout"
        ]

    },


    Friday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Upper body workout",
            "Strength workout"
        ]

    },


    Saturday: {

        morning: [
            "Lilly Sabri Abs",
            "Deep core activation",
            "Jumps and flexibility"
        ],

        midday: [
            "Grow with Jo Full Body Cardio"
        ],

        nighttime: [
            "Lilly Sabri Glutes/Butt",
            "Full backspot Strength workout"
        ]

    }


};
const workoutTypes = {


    // CORE

    "Lilly Sabri Abs": {

        xp: 20,

        category: "core"

    },


    "Deep core activation": {

        xp: 15,

        category: "core"

    },



    // FLEXIBILITY + JUMPS

    "Jumps and flexibility": {

        xp: 20,

        category: "flexibility"

    },



    // LOWER BODY

    "Lilly Sabri Glutes/Butt": {

        xp: 20,

        category: "lowerBody"

    },


    "Lower body workout": {

        xp: 25,

        category: "lowerBody"

    },



    // UPPER BODY

    "Upper body workout": {

        xp: 25,

        category: "upperBody"

    },



    // STRENGTH

    "Strength workout": {

        xp: 30,

        category: "strength"

    },



    // BACKSPOT

    "Full Backspot Strength workout": {

        xp: 30,

        category: "backspot"

    },


    "Full backspot Strength workout": {

        xp: 30,

        category: "backspot"

    },


    // MIDDAY CARDIO

    "Grow with Jo Full Body Cardio": {

        xp: 25,

        category: "strength"

    }


};







const vacationWorkouts = {

    morning: [

        "Stomach Vacuums (15 secs x 10)",

        "90/90 Toe Taps (45 secs)",

        "Dead Bugs (45 secs)",

        "Plank (1 min)"

    ],

    nighttime: [

        "25 Pushups",

        "15 Bulgarian Split Squats",

        "45 Calf Raises",

        "15 Pump Squats"

    ]

};





// Vacation workout categories

workoutTypes["25 Pushups"] = {

    xp: 15,

    category: "strength"

};


workoutTypes["In and outs (45 seconds x2)"] = {

    xp: 15,

    category: "core"

};


workoutTypes["Plank (1 minute x2)"] = {

    xp: 15,

    category: "core"

};
