
## Docker-Compose

There is a docker-compose.yml file with settings to enable postgres in a container. You will need a .env file with the following variables to get started:

- DB_PORT
- DB_USERNAME
- DB_PASSWORD
- DB_DATABASE
- DB_HOST=localhost

## Other Notes

This API has been tested for accuracy/functionality using Postman as well.

## Installation
I used Yarn for this, but feel free to follow the instructions below for starting the server using NPM.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
