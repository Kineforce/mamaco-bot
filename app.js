import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType
} from 'discord-interactions';
import { VerifyDiscordRequest } from './src/utils.js';
import { ALL_COMMANDS } from './src/command.js';
import { initDiscordClient } from './client/discordClient.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Interactions
app.post('/interactions', async function (req, res) {
  const { type, id, data } = req.body;

  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;
    const matchCommand = ALL_COMMANDS.find(c => c.name == name);

    if (matchCommand != null) {
      console.log(`Executando comando --> ${matchCommand.name}`)
      matchCommand.handler(res);
    }
  }
});

// Init clients
initDiscordClient();
// initOpenAiClient();

// Init server
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});