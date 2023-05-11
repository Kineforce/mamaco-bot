import { Configuration, OpenAIApi } from "openai";

export const initOpenAiClient = async () => {
    // Open Ai
    const configuration = new Configuration({
        organization: process.env.OPEN_AI_ORG_KEY,
        apiKey: process.env.OPEN_AI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    try {
        const completion = await openai.createChatCompletion({
            model: "text-davinci-003",
            messages: [{
                role: "user",
                content: "Oi tudo bem?"
            }],
            temperature: 0,
            max_tokens: 5
        });
    
        console.log(completion.data.choices[0].text);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}