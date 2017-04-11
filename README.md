#B-RC 

B-RC Components build with [React](http://facebook.github.io/react) and [Ant Design](https://ant.design/).

B-RC Components design for [MiFanFan](http://www.mifanfan.cn) Desktop front-end projects

## Install 

With [npm](http://npmjs.com)
 
 ```bash
 npm install b-rc --save
 ```
With [yarn](https://yarnpkg.com/)
 ```bash
 yarn add b-rc
 ```

## Usage


### Use modularized antd

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { libraryName: "b-rc", style: "css" }] // `style: true` for less
     ]
   }
   ```

   Then you can import components from antd, equivalent to import manually below.

   ```jsx
   // import js and css modularly, parsed by babel-plugin-import
   import { Button } from 'b-rc';
   ```

- Manually import

   ```jsx
   import DatePicker from 'b-rc/lib/button';  // for js
   import 'b-rc/lib/button/style';         // that will import less
   ```