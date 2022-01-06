const { Users } = require("./models");
const { Sales } = require("./models");
const { Jobs } = require("./models");
const { Forums } = require("./models")
const { Posts } = require("./models")
const { Comments } = require("./models");

// create jobs
Jobs.insertMany([
    {
        title: 'PAID research study for mobile gamers!',
        description: 'We are a user research company specializing in market research and usability testing, and we are looking for participants for an upcoming paid user research study!',
        payment: '$100',
        contact_info: 'jjbigboy@hotmail.com',
        location: 'lansing'
    },
    {
        title: 'Calling all gamers',
        description: "Mint condition game gear",
        payment: '$5',
        contact_info: 'perice@msu.edu',
        location: 'lansing'
    },
])
    .then((newJobs) => {
        console.log(newJobs);
    })
    .catch((error) => {
        console.log(error);
    });

//create a comments
db.comments.insertMany([
    {
        header: 'Most Covid infections are fake and mass hysteria',
        content: 'They believe a threat to be real because someone says so, </br>or because it fits their experience. Due to the threatening delusion, a large group of people gets collectively very upset. In other words, a threat, whether real or imaginary [17], causes collective anxiety [18].',
        date: new Date()
    },
    {
        header: "Let's never forget this gem",
        content: "Look, the results of the vaccine are very good, and if you do get (Covid), it's a very minor form.",
        date: new Date()
    },
    {
        header: "I've solved the energy crisis",
        content: 'Turn cellulite into fuel. Mandatory lipo for all fat asses in the USA',
        date: new Date()
    },
    {
        header: 'FYI Do not sign a solar contract w Sunnova',
        content: "We purchased a house w an existing Sunnova contract.I didn't know it but the system was already not working",
        date: new Date()
    },
    {
        header: 'New Chef Ramsey show starts tonight',
        content: 'Next Level Chef. Welcome to the Next Level. Fifteen contestants from around the country prepare to level up their cooking skills.',
        date: new Date()
    }

])

    .then((newComments) => {
        console.log(newComments);
    })
    .catch((error) => {
        console.log(error);
    });