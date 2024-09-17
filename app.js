import 'dotenv/config';
import express from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import {
  VerifyDiscordRequest,
  getServerLeaderboard,
  createPlayerEmbed,
} from './utils.js';
import { getFakeProfile, getWikiItem } from './game.js';

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post('/interactions', async function (req, res) {
  // Interaction type and data
  const { type, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  // Log request bodies
  console.log(req.body);

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    //sigma command
    if (name === 'sigma') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'sigma mode activated',
        },
      });
    }

    if (name === 'skibidi') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'skibidi toliet watched',
        },
      });
    }
    if (name === 'drdiddycousin') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'Dr. Diddy and Mr. Sigma are characters from the world of O.K. K.O.! Lets Be Heroes, an animated television series created by Ian Jones-Quartey Dr. Diddy is a scientist and inventor, known for his quirky and eccentric personality. He often finds himself in conflict with Mr. Sigma, a superhero who embodies the ideals of strength and justice. Their relationship is marked by a classic hero-villain dynamic, with Dr. Diddy frequently creating inventions or schemes that Mr. Sigma must thwart. However, the shows tone is often humorous and light-hearted, so their interactions are more playful than genuinely antagonistic. Mr. Sigma represents the archetypal superhero, with powers and abilities that make him a formidable force for good. His relationship with Dr. Diddy adds a layer of depth to the shows narrative, blending action with comedy as they engage in various battles and encounters.',
        },
      });
    }
    if (name === 'thumbsup') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://c8.alamy.com/comp/2BWXA9N/emoticon-showing-thumb-up-2BWXA9N.jpg',
        },
      });
    }
    if (name === 'thumbsdown') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://media.tenor.com/9sPQlkbGzDQAAAAe/sad-emote.png',
        },
      });
    }
    if (name === 'freaky') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://tenor.com/view/chica-fnaf-rizz-w-rizz-fnaf-meme-gif-6058095616017147707',
        },
      });
    }
    if (name === 'jokerfreestyle') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'mb i was geeked https://cdn.discordapp.com/attachments/747896421226643587/1278192659361566720/v09044490000bo8bb9dc7tdan3sdobn0.mov?ex=66cfe92d&is=66ce97ad&hm=6dc6ec174161a67cded3170184a7419ce6e54834ed032501ae543dbe6c21acfc&',
        },
      });
    }
    if (name === 'sigmamoismokingcigar') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://cdn.discordapp.com/attachments/747896421226643587/1278192502205317140/IMG_7524.png?ex=66cfe908&is=66ce9788&hm=cd09592017ec29c39b12f41a08977377f1cecdbf2de0e461e3b17e32e15789b2&',
        },
      });
    }
    if (name === 'debating') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbPteqnNs0GskHugaukXSzm_KzOCR5sNlCbjkjSLtVrwDTVzWb',
        },
      });
    }
    if (name === 'trash') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://cdn.discordapp.com/attachments/1216856997069062197/1278199463885934602/IMG_2408.jpg?ex=66cfef83&is=66ce9e03&hm=623ceebcacf37424464efd5f897ed713fef6db55eb2a7039e1ed644d00bc97aa&',
        },
      });
    }
    if (name === 'diamonds') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://i.ytimg.com/vi/7zndiUyDSf0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gUSgTMA8=&rs=AOn4CLB-hA9PnRa7WRJegE5dM1dw42dHBw',
        },
      });
    }
    if (name === 'horse') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://cdn.discordapp.com/attachments/1216856997069062197/1278201254027198518/image.png?ex=66cff12e&is=66ce9fae&hm=59a91ea36c174abd0e4df75a178664a38931738c5bc01a22814b69d770e1f24e&',
        },
      });
    }
    if (name === 'alpha') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://content.imageresizer.com/images/memes/Sitting-Wolf-meme-6z9kbk.jpg',
        },
      });
    }
    if (name === 'mad') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: 'https://cdn.discordapp.com/attachments/1216856997069062197/1278229076598853652/IMG_6602.jpg?ex=66d00b18&is=66ceb998&hm=b0dcbc17455be7d9f355d116693448d9b40de8bdbf6c759bcf00af638e39a92c&',
        },
      });
    }
    if (name === 'jonsigma') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { 
          content: '"when i was twas just a boy" https://cdn.discordapp.com/attachments/1216856997069062197/1279638946988429432/IMG_0553.jpg?ex=66d52c23&is=66d3daa3&hm=49653d8599b420cc528366f659cb81b30aace23079551c89134c6967aa627cec&',
        },
      });
    }

  }
  
          
  // handle button interaction
  if (type === InteractionType.MESSAGE_COMPONENT) {
    const profile = getFakeProfile(0);
    const profileEmbed = createPlayerEmbed(profile);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        embeds: [profileEmbed],
      },
    });
  }
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
