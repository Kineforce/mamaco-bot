import 'dotenv/config';
import { InstallGlobalcommand } from './utils.js';
import { handleConselhoMamaco, handleFalaMamaco } from './commandHandler.js';

// Todos os comandos do bot
const FALA_MAMACO_COMMAND = {
  name: 'fala-mamaco',
  description: 'Você fala e o mamaco responde...',
  handler: handleFalaMamaco,
  type: 1
};

const CONSELHO_MAMACO_COMMAND = {
  name: 'conselho-mamaco',
  description: 'Mamaco dá conselho pra você...',
  handler: handleConselhoMamaco,
  type: 1
};

export const ALL_COMMANDS = [
  FALA_MAMACO_COMMAND,
  CONSELHO_MAMACO_COMMAND
];

InstallGlobalcommand(process.env.APP_ID, ALL_COMMANDS);