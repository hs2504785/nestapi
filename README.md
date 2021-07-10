## Dev

```
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

npm run populate-db
```

## Test

```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy

```
npm install -g heroku
heroku login
heroku git:remote -a hksocket
git push heroku master
```

API - https://hksocket.herokuapp.com/users
