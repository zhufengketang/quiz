### Babel
#### React 
```
{
    "babel-cli": "^6.6.5",
    "babel-core": "^6.0.0",
    "babel-eslint": "^7.1.0",
    "babel-jest": "^19.0.0",
    "babel-plugin-check-es2015-constants": "^6.5.0",
    "babel-plugin-external-helpers": "^6.22.0",
    "babel-plugin-syntax-trailing-function-commas": "^6.5.0",
    "babel-plugin-transform-async-to-generator": "^6.22.0",
    "babel-plugin-transform-class-properties": "^6.11.5",
    "babel-plugin-transform-es2015-arrow-functions": "^6.5.2",
    "babel-plugin-transform-es2015-block-scoped-functions": "^6.5.0",
    "babel-plugin-transform-es2015-block-scoping": "^6.23.0",
    "babel-plugin-transform-es2015-classes": "^6.5.2",
    "babel-plugin-transform-es2015-computed-properties": "^6.5.2",
    "babel-plugin-transform-es2015-destructuring": "^6.5.0",
    "babel-plugin-transform-es2015-for-of": "^6.5.2",
    "babel-plugin-transform-es2015-literals": "^6.5.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.5.2",
    "babel-plugin-transform-es2015-object-super": "^6.5.0",
    "babel-plugin-transform-es2015-parameters": "^6.5.0",
    "babel-plugin-transform-es2015-shorthand-properties": "^6.5.0",
    "babel-plugin-transform-es2015-spread": "^6.5.2",
    "babel-plugin-transform-es2015-template-literals": "^6.5.2",
    "babel-plugin-transform-es3-member-expression-literals": "^6.5.0",
    "babel-plugin-transform-es3-property-literals": "^6.5.0",
    "babel-plugin-transform-object-rest-spread": "^6.6.5",
    "babel-plugin-transform-react-jsx-source": "^6.8.0",
    "babel-preset-react": "^6.5.0",
    "babel-traverse": "^6.9.0",
}

````

#### VUE

```
{
    "babel-core": "^6.9.0",
    "babel-eslint": "^7.1.0",
    "babel-helper-vue-jsx-merge-props": "^2.0.2",
    "babel-loader": "^6.2.4",
    "babel-plugin-istanbul": "^4.0.0",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-vue-jsx": "^3.2.0",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-flow-vue": "^1.0.0",

}
```

### React & VUE
babel-core
babel-eslint
一些语法不在eslint范围中


### Checking

#### React
```
{
    "eslint": "^3.10.2",
    "eslint-config-fbjs": "^1.1.1",
    "eslint-plugin-babel": "^3.3.0",
    "eslint-plugin-flowtype": "^2.25.0",
    "eslint-plugin-react": "^6.7.1",
    "eslint-plugin-react-internal": "file:./eslint-rules",
}
```

#### VUE
```
{
   "eslint": "^3.10.1",
    "eslint-config-vue": "^2.0.1",
    "eslint-loader": "^1.3.0",
    "eslint-plugin-flowtype": "^2.16.0",
    "eslint-plugin-jasmine": "^2.1.0",
    "eslint-plugin-vue": "^2.0.0",
}
```

#### React & VUE
eslint,eslint-plugin-flowtype



### 高亮
chalk
https://github.com/chalk/chalk


### FLow
flow-bin


### 打包

#### React
```
{
    "rollup": "^0.41.6",
    "rollup-plugin-alias": "^1.2.1",
    "rollup-plugin-babel": "^2.7.1",
    "rollup-plugin-commonjs": "^8.0.2",
    "rollup-plugin-inject": "^2.0.0",
    "rollup-plugin-node-resolve": "^2.0.0",
    "rollup-plugin-replace": "^1.1.1",
    "rollup-plugin-uglify": "^1.0.1",
}
```


#### VUE
```
{
    "rollup": "^0.41.4",
    "rollup-plugin-alias": "^1.2.0",
    "rollup-plugin-babel": "^2.4.0",
    "rollup-plugin-buble": "^0.15.0",
    "rollup-plugin-flow-no-whitespace": "^1.0.0",
    "rollup-plugin-replace": "^1.1.0",
    "rollup-watch": "^3.2.2",
}
```

#### React & VUE

- rollup
- rollup-plugin-alias
- rollup-plugin-babel
- rollup-plugin-replace


### 测试

#### React
```
{
    "jest": "^19.0.1",
    "jest-config": "^19.0.1",
    "jest-jasmine2": "^19.0.1",
    "jest-runtime": "^19.0.1",
}

```

#### VUE

```
{
    "jasmine": "^2.5.2",
    "jasmine-core": "^2.5.2",
    "karma": "^1.1.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.0.0",
    "karma-firefox-launcher": "^1.0.0",
    "karma-jasmine": "^1.0.2",
    "karma-mocha-reporter": "^2.0.4",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^1.0.0",
    "karma-sourcemap-loader": "^0.3.0",
    "karma-webpack": "^2.0.1",
}
```

### typescript
typescript

### 压缩
uglify-js