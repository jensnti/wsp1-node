# Introduktion Node.js och Express

## Installation och förberedelse

Du behöver köra Ubuntu under WSL.
Vi kommer att köra Node version 12, vilket är deras LTS(long term support) version.
För att installera detta behöver vi göra lite annorlunda än vanligt med ubuntu, detta för att
standardversion för ubuntu är mycket äldre.

```bash
sudo apt update
sudo apt upgrade

sudo apt install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs
```
Nu kan du kolla din version av Node med(bör vara 12.x)

```bash
node --version
```

Du bör även ha npm(node package manager) installerat nu, kör(bör vara 6.x)

```bash
npm --version
```

Nu när vi har Node installerat tillsammans med npm så kan vi installera express.
[Express](https://expressjs.com/) är ett minimalistiskt ramverk för node. Expres låter
oss skapa routes och annat för vår applikation. Vi kommer även att installera en generator för 
Express för att förenkla vår setup(scaffolding).
Vi kommer att installera Express globalt på systemet, därför kommer du att behöva köra följande som
sudo.

```bash
sudo npm i -g express express-generator
```
För att kolla om det gick som tänkt så kan du köra

```bash
express --help
```

### Ett första projekt

För att "scaffolda" ett projekt så kör du enklast express i en mapp som du ska spara det i.
Skapa en mapp för ditt projekt, gå in i den och kör följande express kommando

```bash
mkdir PROJEKTNAMN
cd PROJEKTNAMN
express --view=pug --css sass --git
```

Detta ger oss grunden för en vår app. Vi kör kommandot med tilläggen view,css och git. Detta låter oss välja
vilken view motor vi vill att express ska använda. I det här fallet så är vår view [pug](https://pugjs.org/).
Vi säger även till express att vi ska använda sass för css.
Slutligen så skapar express en .gitignore fil åt oss så att vi inte laddar upp saker som inte har något på git att göra(som node_modules mappen).
För att färdigställa installationen så behöver du slutligen installera de paket som express använder. Paketen är listade i filen package.json som npm använder för att hålla koll på vilka paket som din app använder. Paketen är

```javascript
"dependencies": {
  "cookie-parser": "~1.4.4",
  "debug": "~2.6.9",
  "express": "~4.16.1",
  "http-errors": "~1.6.3",
  "morgan": "~1.9.1",
  "node-sass-middleware": "0.11.0",
  "pug": "2.0.0-beta11"
},
```

För att installera paketen kör du

```bash
npm install
```

Om kommandot kördes utan några fel (då står det npm ERR!) så kan du nu starta din server med

```bash
npm start
```

Surfa sedan till [localhost:3000](http://localhost:3000) och du är igång!

## Nodemon

Ett väldigt praktiskt tillägg till node är nodemon, det låter oss starta en server som automatiskt
startar om när vi ändrar på filer. Detta gör att vi slipper sitta och starta om node såfort vi ändrar i någon 
fil.

```bash
npm install --save-dev nodemon
```

Sedan redigerar vi package.json och gör följande ändring

```javascript
"scripts": {
  "start": "nodemon ./bin/www"
},
```

Testa sedan att starta servern igen och surfa till [localhost:3000](http://localhost:3000)

## Eslint

Det kan vara väldigt användbart och praktiskt att låta ens IDE hjälpa en med fel och kodformatering. När vi 
skriver javascript tillsammans med Node så finns det ett paket som heter [eslint](https://eslint.org/) som hjälper med detta.
För att installera det så kör du följande kommando

```bash
npm install --save-dev eslint
```

Vi kallar på npm, med install som kommando. Till det så ger vi npm parametern --save-dev som gör att paketet sparas
i package.json under dev dependencies. Sist så anger vi namnet på paketet.
För att slutföra installationen av eslint så behöver vi skapa en konfiguration. Kör

```bash
eslint --init
```

Svara som följer

    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? CommonJS (require/exports)
    ? Which framework does your project use? None of these
    ? Does your project use TypeScript? No
    ? Where does your code run? Browser, Node
    ? How would you like to define a style for your project? Use a popular style guide
    ? Which style guide do you want to follow? Standard: https://github.com/standard/standard
    ? What format do you want your config file to be in? JavaScript

Välj sedan att installera paketen med npm.

Det har nu skapats en fil som heter .eslintrc.js som innehåller dina valda inställningar. 
För att läsa mer om Javascript standard style så kolla [Standardjs](https://standardjs.com/rules.html). Du kan nu
lägga till och ändra reglerna i den. För min egen del så lägger jag alltid följande formateringsregler.

```javascript
rules: {
  // "indent": ["error", 4], // fel vid annan indentering än 4 spaces, 2 är standardjs
  "semi": ["error", "always"] // fel om det saknas semikolon, personlig preferens
}
```
## Lär känna din app

Nu är vår setup i stort sett klar för att börja ändra på vår app. Vi har installerat de paket som krävs och 
vi kan köra vår server. Nästa steg är att titta lite på express filstruktur och hur du arbetar med det.
Efter installationen så ser express filstruktur ut såhär

  bin/
    www
  node_modules/
  public/
    images/
    javascript/
    stylesheets/
  routes/
    index.js
    users.js
  views/
    error.pug
    index.pug
    layout.pug
  app.js
  package.json

I roten finns app.js och package.json samt en del andra konfigurationsfiler. När du startar servern så kör npm 
start scriptet från package.json. Det kör i sin tur www filen från bin/ mappen som sedan startar app.js från rooten.

app.js laddar in servers routes från routes/ foldern, de tar i sin tur själva html/viewen från views/ mappen och visar detta.
Statiskt innehåller finns i public/ mappen.

### Html och css

För att ändra på vår html och testa hur det fungerar så ska vi skapa en meny som gör att vi kan komma åt de andra sidorna.




## Markdown

[Markdown syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)