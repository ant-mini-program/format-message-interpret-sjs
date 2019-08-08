const parse = require('format-message-parse');
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'i18n');
const files = fs.readdirSync(i18nDir);
let code = `import interpreter from 'format-message-interpret-sjs/pkg/index.sjs';

// auto generated by build.js, do not modify
const translations = {
`;
files.forEach((f) => {
  const json = path.join(i18nDir, f);
  const name = path.basename(json,path.extname(json));
  const content = require(json);
  let subCode = `{`;
  Object.keys(content).forEach((k) => {
    subCode += `
    ${k}:interpreter(${JSON.stringify(parse(content[k]))}),
    `;
  });
  subCode += `}`;

  code += `
  '${name}':${subCode},
  `;
});

code += `
}

export function t(key,args,locale){
  if(arguments.length===2){
    locale=args;
  }
  const subTrans=translations[locale];
  return subTrans[key](args);
}
`;

console.log(code);
fs.writeFileSync(path.join(__dirname, 'src', 'locales.sjs'), code, 'utf-8');


