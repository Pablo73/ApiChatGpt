import express from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', async (req, res) => {
    const openai = new OpenAI({
        key: process.env.OPENAI_API_KEY,
        organization: 'org-3yThFQYfStDZnjLBPzK7OBhZ',
    });

    const response = await openai.createImage({
        engine: "text-davinci-003",
        prompt: "a white siamese cat",
        max_tokens: 50,
    });

    const imageUrl = response.choices[0].text.trim();

    res.send(imageUrl);
});

app.listen(4001, () => {
    console.log('Server is running on port 4001');
});