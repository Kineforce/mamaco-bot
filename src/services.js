import fetch from "node-fetch";

export const getRandomAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";

    console.log("Executando requisição para buscar conselho aleatório");
    try {
        const req = await fetch(url);
        const jsonResp = await req.json();
        return jsonResp.slip.advice;
    } catch (e) {
        console.log(e);
        return "foi mal man tem conselho por agora não 🐵";
    }
}