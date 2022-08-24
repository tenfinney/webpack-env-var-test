# Webpack Environment Variables Test

Environment variables are not being passed through to the Webpack build.

This repository has our current configuration and demonstrates the problem.

It runs the following script: 
```javascript
const p = (typeof process === 'undefined' ? null : process)
console.log({
  process: p,
  env: p?.env,
  var: p?.env?.VITE_TEST_VAR,
})
```
This prints: 
```
{
  process: null, 
  env: undefined, 
  var: undefined, 
}
```
## Running 

* `yarn webpack serve`
