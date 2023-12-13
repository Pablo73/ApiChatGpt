import express from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.post('/', async (req, res) => {

    const { prompt } = req.query;	

    // const openai = new OpenAI({
    //     key: process.env.OPENAI_API_KEY,
    //     organization: 'org-3yThFQYfStDZnjLBPzK7OBhZ',
    // });

    const openai = new OpenAI();

    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
    });

    console.log(image.data);

    res.send(image.data);
});

app.listen(4001, () => {
    console.log('Server is running on port 4001');
});