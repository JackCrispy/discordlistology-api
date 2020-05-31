/**
 * @module discordlistology
 * @copyright Jack Christie 2020 - 2020
 * @license MIT
 */

const query = require('wumpfetch');

module.exports = class BoatsClient {
  /**
   * Create Boats class
   * @constructor
   * @param {string} token - API Token
   * @param {string} version - API version
   */
  constructor(token, version) {
    this.token = token;
    this.version = version || 'v1';
  }

  /**
   * Gets information about the bot.
   *
   * @param {string} botid - The bot's ID.
   * @returns {Promise} - Information about the bot in JSON format.
  */
  getBot(botid) {
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await query(`https://discordlistology.com/api/${this.version}/bots/${botid}/stats`).send();
        resolve(res.json());
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

    /**
   * Gets information about the guild.
   *
   * @param {string} guildid - The servers's ID.
   * @returns {Promise} - Information about the bot in JSON format.
  */
 getGuild(guildid) {
     if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
     return new Promise(async (resolve, reject) => {
       try {
         const res = await query(`https://discordlistology.com/api/${this.version}/guilds/${guildid}/stats`).send();
         resolve(res.json());
       } catch (err) { 
         reject(new Error(err)); 
       }
     });
   }
 

  /**
   * Checks if user has voted for a bot.
   *
   * @param {string} botid - The bot's ID.
   * @param {string} userid - The user's ID.
   * @returns {Promise} - 0/1 in JSON format.
  */
  getVoted(botid, userid) {
    if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await query(`https://discordlistology.com/api/${this.version}/bots/${userid}/hasvoted/${botid}`).send();
        resolve(res.json());
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }

  /**
   * Checks if user has voted for a server.
   *
   * @param {string} guildid - The servers's ID.
   * @param {string} userid - The user's ID.
   * @returns {Promise} - 0/1 in JSON format.
  */
 getGuildVoted(guildid, userid) {
     if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
     if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
     return new Promise(async (resolve, reject) => {
       try {
         const res = await query(`https://discordlistology.com/api/${this.version}/guilds/${userid}/hasvoted/${guildid}`).send();
         resolve(res.json());
       } catch (err) { 
         reject(new Error(err)); 
       }
     });
   }

  /**
   * Post bot stats to API.
   *
   * @param {number} servercount - The bot's server count.
   * @param {number} shardcount - The bot's shard count.
   * @param {string} botid - The bot's ID.
  */
  postStats(servercount, shardcount, botid) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof servercount !== 'number') throw new TypeError('Server count must be a number');
    if (typeof shardcount !== 'number') throw new TypeError('Shard count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
        const res = await query(`https://discordlistology.com/api/${this.version}/bots/${botid}/stats`, {
          method: 'POST', 
          headers: { 
            'Authorization': this.token 
          },
          data: { 
            'servers': servercount,
            'shards': shardcount
          }
        }).send();
        resolve(res.json());
      } catch (err) { 
        reject(new Error(err)); 
      }
    });
  }
};