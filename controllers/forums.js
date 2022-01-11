require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Forums } = require('../models')


router.get("/", async (request, response) => {
    // Kyle & Avery's Changes
    console.log(request.body)
    response.send('ok');

    try {
        const forumsArray = await Forums.find({});
        response.json({ forumsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new" , async (request, response) => {
    try{

        const newForum = await Forums.insertMany({
            title: request.body.title, 
            description: request.body.description, 
            post_text: request.body.post_text, 
            username: request.body.username, 
            likes: request.body.lips, 
            comments: request.body.comments, 
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});

// router.post("/edit" , async (request, response) => {
//     try{

//         const editForum = await Forums.updateOne({
//             title: request.body.title, 
//             description: request.body.description, 
//             post_text: request.body.post_text, 
//             username: request.body.username, 
//             likes: request.body.lips, 
//             comments: request.body.comments, 
//         })
//     }
//     catch(error){
//         response.status(500).send(error);
//     }
// });

// router.post("/delete" , async (request, response) => {
//     try{

//         const deleteForum = await Forums.deleteOne({
//             title: request.body.title, 
//             description: request.body.description, 
//             post_text: request.body.post_text, 
//             username: request.body.username, 
//             likes: request.body.lips, 
//             comments: request.body.comments, 
//         })
//     }
//     catch(error){
//         response.status(500).send(error);
//     }
// });

module.exports = router;