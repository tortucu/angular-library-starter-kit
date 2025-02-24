# Ng Library with Demo app

## Develop with Demo

Develop libaray: components with Demo app
`npm run watch:components`
`npm run start`
`Demo app should be opened through  http://localhost:4200 with the updated library: components`

## Publishing with Gitlab

Web component
`ng build components && cd dist/components && NPM_TOKEN=XXXX npm publish && cd ../..`


## Install

Run this in your console, it will set gitlab as the registry for @tortu packages and authorize you for this registry:

`npm config set @xxx:registry=https://gitlab.com/api/v4/projects/XXXX/packages/npm/`

`npm config set -- //gitlab.com/api/v4/projects/XXXX/packages/npm/:_authToken=XXXX`