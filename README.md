# webcv dev server tutorial

- faq: how to build this app

## Begin

### 1) organize a directory to start th cvdev project inside it. the structure must separate server from other layers. use your home for master projects directory, it's easy to access by the tilde accent.

- note: the tilde indicates that the current folder directory is your home

```bash
cd ~ #this will take you to root;

~$ mkdir ./Projects # create your projects dir
~$ mkdir ./Projects/cvdev # create current project root
~$ mkdir ./Projects/cvdev/server # create server project

~$ cd ./Projects/cdvdev/server
```

### 2) use server directory to start  
- <code> npm init -y </code> .
- create a docker compose file <code>touch docker-compose.yml</code>.
- create a directory <code>mkdir src</code>, thats where all the code logic goes.
- create the file server in src <code> touch src/server.js</code>
- your tree should look like this:

```
└── ~/Projects
    └── cvdev
        └── server
            ├── src
                ├── ...
                └── server.js    
            ├── docker-compose.yml
            └── package,json
```

### 3) and set up a postresql database with these settings inside <b>docker-compose.yml</b> file

```yml
version: '3.5'

services:
  dbwebcv:
    image: postgres
    restart: always
    environment:
      POSTGRES_DB: "cvdev"
      POSTGRES_HOST_AUTH_METHOD: "trust"
      POSTGRES_USER: "user"
      POSTGRES_PASSWORD: "qwerty123"
    ports:
      - "5432:5432"
```


if you run compose, is the database starded?

try:
```
docker-compose up
```
you should see a message like this

<code style="font-size: 11px">
<b style="color: cyan">dbwebcv_1</b> | yyyy-mm-dd UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432

<b style="color: cyan">dbwebcv_1</b> | yyyy-mm-dd UTC [1] LOG:  listening on IPv6 address "::", port 5432
</code>

stop the process by pressing <code>ctrl + C</code>

- [if you see an error, permission denied, try this link](https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue)

### 4) Install nodemon globally to run the server

```bash
sudo npm i -g nodemon
```

### 5) open the project in visual studio code (vscode), install it if you don't have it
- open the editor with this command 
```bash
code .
```

### 6) install the first project dependency
```bash
sudo npm i express
```

### 7) modify the <code>package.json</code> file
 - change the project name to <i>server-cvdev</i> and add a database + server init <i>script</i>

<pre>
{
  <b style="background-color: yellow!important; color: black!important">"name": "server-cvdev",</b>
  "version": "1.0.0",
  "description": "",
  "main": "scr/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    <b style="background-color: yellow!important; color: black!important">"start": "docker-compose up & nodemon ./src/server"</b>
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3",
  }
}
</pre>

- write <code>console.log('it works') </code> inside server.js
- then type in terminal <code>npm run start</code>, It worked?

### 8) create an app.js file next to server.js

- launch an express app inside <b>app.js</b> and export it

```js
const express = require('express')
const app = express();

    app.get('/', (req, res) => {
        res.send('it works');
    })

module.exports = { app };
```
- and indicate the <b>server.js</b> file the startup application

```js
const { app } = require("./app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('running server at http://localhost:' + PORT);
});
```
 - note: In Node. js, process.env <b>is a global variable that is injected during runtime</b>. It is a view of the state of the system environment variables. When we set an environment variable, it is loaded into process. [see this link for more information](https://www.section.io/engineering-education/nodejs-environment-variables/#:~:text=js-,In%20Node.,it%20is%20loaded%20into%20process.)

 - if the server is started, you can access the url localhost:3001 through chrome, try to access

 #
 ## Prisma

- Prisma is an open-source [ORM](https://www.devmedia.com.br/orm-object-relational-mapper/19056) for Node. js and TypeScript. It is used as an alternative to writing plain SQL, or using another database access tool such as SQL query builders (like knex. js) or ORMs (like TypeORM and Sequelize). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite and MongoDB (preview). [see this link for more information](https://docs.nestjs.com/recipes/prisma#:~:text=Prisma%20is%20an%20open%2Dsource,SQLite%20and%20MongoDB%20(preview).)

 - open the terminal in the <b>server</b> folder (this is the project root).
 <i>whenever you run the package installation script, the terminal must be in root</i>

- to use this, you must install the prism engine as devDependecies by adding the <b>--save-dev</b> tag
 ```bash
npm install prisma --save-dev
 ```
- then install the prisma client
```bash
npm install @prisma/client 
```

 - and then start the client


 ```bash
npx prisma init
 ```

- a new file called <b>.env</b> appeared, change the password and user of this file in DATABASE_URL to the same ones that are in dockercompose

```bash
DATABASE_URL="postgresql://user:qwerty123@localhost:5432/cvdev"
```

- a new directory called <b>prisma</b> appeared
- on line 13 in the schema.prisma file, create the user model

```prisma
model User {
  id         Int         @id @default(autoincrement())
  uuid       String      @unique @default(uuid())
  email      String      @unique
  password   String
  name       String?
}
```
- note: <code>name  String?</code> 

- whenever you change this file, those changes must be pushed to the database, so run
```
npx prisma db push
```
- next to the schema.prisma file, create an index.js to export the database connection
```js
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient()

module.exports = db;
```

- view the database and add users manually in the user table
```
npx prisma studio
```
- go back on your get route and try to perform some actions
- [practice the express](https://expressjs.com/pt-br/guide/routing.html)

``` js
    const express = require('express') 
    const app = express();

    const db = require('../prisma');

  /**
   * - app.get = This route path matches requests to the root route "http://localhost/api"
   * - :email? =  the "symbol ?", means it is an optional property
   */
    
    app.get('/api/:email?', async (req, res) => {

      if(req.params.email){
           /**
            * if the route is http://localhost:3001/api/some-email-registered
            * enter this condition
            */
            const user = await db.user.findFirst({
                where: {
                    email: req.params.email
                }
            });
     
          /**
           * Sends a JSON response.
           */
            res.json(user);

        } else {
            const user = await db.user.findMany(); // brings all users with prisma in database

            /**
             * Sends a JSON response.
             */
            res.json(user);
        }
    })

    module.exports = { app };

```

