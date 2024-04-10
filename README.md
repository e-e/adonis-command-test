## Steps to reproduce
```text
node ace migration:run
node ace test:command
```

Should see:
```text
[ error ] Cannot read properties of undefined (reading 'query')
          at User.query (file:///<your-path>/adonis-command-test/node_modules/@adonisjs/lucid/build/src/orm/base_model/index.js:160:30)
          at Test.run (file:///<your-path>/adonis-command-test/commands/test.ts:8:33)
          at ContainerResolver.call (file:///<your-path>/adonis-command-test/node_modules/@adonisjs/fold/build/chunk-IGHHTAHI.js:410:25)
          at async Test.exec (file:///<your-path>/adonis-command-test/node_modules/@adonisjs/core/build/modules/ace/commands.js:51:28)
          at async #execMain (file:///<your-path>/adonis-command-test/node_modules/@adonisjs/ace/build/index.js:1481:7)
          at async AceProcess.handle (file:///<your-path>/adonis-command-test/node_modules/@adonisjs/core/build/src/ignitor/ace.js:66:9)
```
