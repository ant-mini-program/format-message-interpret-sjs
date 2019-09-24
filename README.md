## format-message-interpret-sjs

sjs version of [format-message-interpret v6.2.3](https://www.npmjs.com/package/format-message-interpret)


## usage

```
yarn add format-message-interpret-sjs
```

see [examples](./examples)

src/locales.sjs: auto generated from json by format-message-sjs-cli

index.axml

```xml
<import-sjs from="/locales.sjs" name="{t}" />

<view>{{ t('name', {name: 'yiminghe'}) }}</view>
```

## Supported ICU Formats

- plural
- selectordinal
- select
