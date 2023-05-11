import { InteractionResponseType } from "discord-interactions";
import { getRandomAdvice } from "./services.js";

export const handleFalaMamaco = (res) => {
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'podicrê erh erh erh',
        }
    });
}

export const handleConselhoMamaco = async (res) => {
    const randomAdvice = await getRandomAdvice();
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: randomAdvice
        }
    });
}