require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Jobs } = require('../models')


router.get("/", async (request, response) => {
    // Kyle & Avery's Changes
    console.log(request.body)
    response.send('ok');
    try {
        const jobsArray = await Jobs.find({});
        response.json({ jobsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {
        response.send('ok');
        console.log(request.body);
        return;
        const newJob = await Jobs.insertMany({
            title: request.body.name,
            description: request.body.description,
            post_text: request.body.post_text,
            username: request.body.username,
            likes: request.body.likes,
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});






// router.post("/edit" , async (request, response) => {
//     try{

//         const editJob = await Jobs.updateOne({
//             title: request.body.name, 
//             description: request.body.description, 
//             post_text: request.body.post_text, 
//             username: request.body.username, 
//             likes: request.body.likes, 
//             comments: request.body.comments, 
//         })
//     }
//     catch(error){
//         response.status(500).send(error);
//     }
// });

// router.post("/delete" , async (request, response) => {
//     try{

//         const deleteJob = await Jobs.deleteOne({
//             title: request.body.name, 
//             description: request.body.description, 
//             post_text: request.body.post_text, 
//             username: request.body.username, 
//             likes: request.body.likes, 
//             comments: request.body.comments, 
//         })
//     }
//     catch(error){
//         response.status(500).send(error);
//     }
// });


module.exports = router;
