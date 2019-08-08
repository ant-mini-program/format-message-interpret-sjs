## format-message-interpret-sjs

sjs version of [format-message-interpret v6.2.3](https://www.npmjs.com/package/format-message-interpret)


## usage

see [examples](./examples)

locales.sjs: auto generated from json

```js
// auto generated
import interpreter from 'format-message-interpret-sjs/pkg/index.sjs';

var translations = {
  "name":["name:",["name"]]
};

translations.name=interpreter(translations.name);

export function t(key,args){
  return translations[key](args);
}
```

index.axml

```xml
<import-sjs from="/locales.sjs" name="{t}" />

<view>{{ t('name', {name: 'yiminghe'}) }}</view>
```

## Supported ICU Formats

From IDE (0.70)

- plural
- selectordinal
- select
