import { OpenAiClient } from '../adapters/openai/adapter';
import { generateInstructions } from '../adapters/openai/instructions';
import config from '../env';

const apiKey = config.OPEN_AI_KEY;
const OPEN_AI_ASSISTANT_ID = config.OPEN_AI_ASSISTANT_ID;

const instructions = generateInstructions();
export const openAiClient = new OpenAiClient(apiKey, OPEN_AI_ASSISTANT_ID, instructions);
