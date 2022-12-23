# Azure Function TypeScript Boilerplate

## Getting Started Local Dev

```bash
npm install
cp local.settings.example.json local.settings.json
npm run watch
# On another tab of terminal
npm start
```

### Deploy to Prod/UAT

```bash
npm run deploy
```

### Bump Version
https://docs.npmjs.com/cli/v8/commands/npm-version

```bash
npm version patch --force -m "Bump Version %s"
```

## Azure Functions Doc

"My"'s Docs: https://typescript-th.thadaw.com/docs/platforms/azure-functions

Official Docs:
- https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-cli%2Cbrowser
- https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript
- https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=in-process&pivots=programming-language-javascript

