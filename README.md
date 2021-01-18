# alienbuild-official-site

## Front end setup
Run `yarn install` in the `frontend` directory.

Create `next.config.js` in the `frontend` directory. Paste the following and adjust as needed.
```
module.exports = {
    publicRuntimeConfig: {
        APP_NAME: 'Alienbuild',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://alienbuild.uk/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://alienbuild.uk'
    }
}
```

Run `npm run dev` to start the front end.

## Back end setup
Create `.env` in the `backend` directory and paste the follow adjusting where necessary.
```
APP_NAME=Alienbuild
NODE_ENV=development
PORT=8000
CLIENT_URL=http://localhost:3000
DATABASE='mongodb+srv://alienbuild:!Daytona193@alienbuild-official-sit.yqa8e.mongodb.net/<dbname>?retryWrites=true&w=majority'
JWT_SECRET=2weowk3o4kokgFDertWAdgg435gDdfggf
```
Run `npm run start` to start the back end.