import express from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import base64 from 'base-64';

dotenv.config();

const app = express();

const openai = new OpenAI({
    key: process.env.OPENAI_API_KEY,
    engine: 'gpt-4-vision-preview',
});

function encodeImage(imagePath) {
    const imageContent = fs.readFileSync(imagePath, { encoding: 'base64' });
    return base64.encode(imageContent);
}

const imagePath = path.join('ticket.jpeg');

const base64Image = encodeImage(imagePath);

async function main() {
    const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "Analyze the following receipt and provide details in a spreadsheet format:" },
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image}`,
                        },
                    },
                ],
            },
        ],
        max_tokens: 300,
    });

    console.log(response.choices[0]);
}

main();

app.listen(4001, () => {
    console.log('Server is running on port 4001');
});
