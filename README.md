[![NPM](https://nodei.co/npm/discordlistology.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discordlistology)

# discordlistology
A JavaScript Package for interacting with the discordlistology API.

## Installation
Install with NPM: `npm i discordlistology`

## Usage

Posting Bot Stats:
```js
const discordlistology = require('discordlistology');
const listology = new discordlistology('API_KEY');

listology.postStats(servercount, shardcount, 'BOT_ID').then(() => {
     console.log('Posted stats to discordlistology!');
 }).catch((err) => {
     console.error(err);
 });

```

Getting Bot Info:
```js
const discordlistology = require('discordlistology');
const listology = new discordlistology('API_KEY');

listology.getBot('BOT_ID').then(bot => {
    console.log(bot);
}).catch((err) => {
    console.error(err);
});
```

Checking if a user has voted your bot:
```js
const discordlistology = require('discordlistology');
const listology = new discordlistology('API_KEY');

listology.getVoted('BOT_ID', 'USER_ID').then((voted) => {
     console.log(voted);
 }).catch((err) => {
     console.error(err);
 });
```
Get information from a guild:
```js
const discordlistology = require('discordlistology');
const listology = new discordlistology('API_KEY');

listology.getGuild('GUILD_ID').then(bot => {
     console.log(bot);
 }).catch((err) => {
     console.error(err);
 });
 ```

Check if a user voted for a guild:
```js
const discordlistology = require('discordlistology');
const listology = new discordlistology('API_KEY');

listology.getGuildVoted('GUILD_ID', 'USER_ID').then((voted) => {
     console.log(voted);
 }).catch((err) => {
     console.error(err);
 });
 ```

## License
[MIT](https://discord.gg/HvJ4hSA)