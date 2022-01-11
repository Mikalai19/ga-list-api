require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Sales } = require('../models')


router.get("/", async (request, response) => {
    // Kyle & Avery's Changes
    console.log(request.body)
    response.send('ok');

    try {
        const salesArray = await Sales.find({});
        response.json({ salesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

<<<<<<< HEAD
router.post("/new" , async (request, response) => {
    try{
=======
router.post("/new", async (request, response) => {
    try {
        // Kyle & Avery's Changes
        response.send('ok')
        console.log(request.body)
>>>>>>> 773043deb265aeff899217ec0e76f32f1dba8bb6

        const newSale = await Sales.insertMany({
            title: request.body.title, 
            description: request.body.description, 
            post_text: request.body.post_text, 
            username: request.body.username, 
            likes: request.body.likes, 
            comments: request.body.comments, 
        })
    }
    catch(error){
        response.status(500).send(error);
    }
});

// router.post("/edit" , async (request, response) => {
//     try{

//         const editSale = await Sales.updateOne({
//             title: request.body.title, 
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

//         const deleteSale = await Sales.deleteOne({
//             title: request.body.title, 
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