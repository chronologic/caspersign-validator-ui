# caspersign-validator-ui

This is a part of the [CasperSign](https://blog.chronologic.network/caspersign-immutable-document-signatures-on-the-blockchain-65edc4969bf0) project.

This repository holds the UI for the document validator, where users can upload their documents and verify their validity.

The live version can be found [here](https://validate.caspersign.io/).

## Environment variables

This repo uses [`dotenv`](https://www.npmjs.com/package/dotenv) to load environment variables.

For development, and `.env` file should be created based on the `.env.example` template file. The `.env` file should never be commited.

In production, environment variables can be injected directly.

Below is a list of possible environment variables.

| Name                | Type     | Default | Description                                                                            |
| ------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `REACT_APP_API_URL` | `string` |         | The URL pointing to [CasperSign API](https://github.com/chronologic/caspersign-server) |

## :construction: Building

Run `npm run build`.

## Development

Run `npm start`.
