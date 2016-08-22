# redux-perf

Redux middleware to measure the time that actions need to change the state!

-- Little helper to see which action takes longest! --

[![NPM](https://nodei.co/npm/redux-perf.png)](https://nodei.co/npm/redux-perf/)


## Getting started

`npm install redux-perf --save`


## Usage

```javascript
import stopwatch from 'redux-perf';

const store = createStore(reducer, applyMiddleware(ReduxThunk, stopwatch));

```


## All Credits to original author
[Alexander Reardon](https://github.com/alexreardon)

[Original post](https://medium.com/@alexandereardon/performance-optimisations-for-react-applications-b453c597b191#.q0uobfylw)


## License
MIT


##DEMO

![Alt Text](https://github.com/watzak/redux-perf/raw/master/redux-perf.gif)
