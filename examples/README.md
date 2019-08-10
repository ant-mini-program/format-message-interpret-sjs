在 支付宝 IDE 中打开 src 目录并执行 npm i，其中 src/locales.sjs 由 npm run build 将 i18n 目录中的语言资源 json 转换而来，
在 pages/index/index.axml 中通过

````
<import-sjs from="/locales.sjs" name="{t}"/>
```

来使用翻译函数 t


```
<view>{{t('name',{name},locale)}}</view>
```

name 字符串表示语言文件中的 key， 
{name} ({name:name}) 表示从逻辑层传来的 name 字段对象， 
locale 表示从逻辑层传来的当前语言标记。
