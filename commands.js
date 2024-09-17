import 'dotenv/config';
import { fakeGameItems } from './game.js';
import { InstallGlobalCommands } from './utils.js';

const SIGMA_COMMAND = {
  name: 'sigma',
  type: 1,
  description: 'For Super skibidi Sigmas only',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const SKIBIDI_COMMAND = {
  name: 'skibidi',
  type: 1,
  description: 'Skibidi Toilet Refrence',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const DIDDYCOUSIN_COMMAND = {
  name: 'drdiddycousin',
  type: 1,
  description: 'the bot will explan its relation to dr diddy',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const THUMBSUP_COMMAND = {
  name: 'thumbsup',
  type: 1,
  description: 'bot writes a thumbs up emoji',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const THUMBSDOWN_COMMAND = {
  name: 'thumbsdown',
  type: 1,
  description: 'the bot will write a thumbs down emoji',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const FREAKY_COMMAND = {
  name: 'freaky',
  type: 1,
  description: 'the bot will write a freak chika gif',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const JOKERFREESTYLE_COMMAND = {
  name: 'jokerfreestyle',
  type: 1,
  description: 'the bot will write a freak sigma image',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const SIGMA2_COMMAND = {
  name: 'sigmamoismokingcigar',
  type: 1,
  description: 'the bot is so sigma',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const DEBATING_COMMAND = {
  name: 'debating',
  type: 1,
  description: 'im sure bud, im sure',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const TRASH_COMMAND = {
  name: 'trash',
  type: 1,
  description: 'so close to trash',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const DIAMONDS_COMMAND = {
  name: 'diamonds',
  type: 1,
  description: 'so close to jewls',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const HORSE_COMMAND = {
  name: 'horse',
  type: 1,
  description: 'horse stuck in drain',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const ALPHA_COMMAND = {
  name: 'alpha',
  type: 1,
  description: 'so alpha',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const MAD_COMMAND = {
  name: 'mad',
  type: 1,
  description: 'free-mad-faces.com',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
const JONSIGMA_COMMAND = {
  name: 'jonsigma',
  type: 1,
  description: 'jon is a very sigma man',
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [
  SIGMA_COMMAND,
  SKIBIDI_COMMAND,
  DIDDYCOUSIN_COMMAND,
  THUMBSUP_COMMAND,
  THUMBSDOWN_COMMAND,
  FREAKY_COMMAND,
  JOKERFREESTYLE_COMMAND,
  SIGMA2_COMMAND,
  DEBATING_COMMAND,
  TRASH_COMMAND,
  DIAMONDS_COMMAND,
  HORSE_COMMAND,
  ALPHA_COMMAND,
  MAD_COMMAND,
  JONSIGMA_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
