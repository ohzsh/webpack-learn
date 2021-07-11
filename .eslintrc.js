/*
 * @Author: json
 * @Date: 2021-07-11 08:48:04
 * @LastEditTime: 2021-07-11 12:17:03
 * @LastEditors: json
 * @Description: eslint配置
 * @FilePath: /webpack/.eslintrc.js
 */
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    'global-require': 'off',
    // "semi" : "error"
  },
};
