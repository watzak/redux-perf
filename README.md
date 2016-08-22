# redux-perf

Redux middleware to measure the time that actions need to change the state!
-- Little helper to see which action takes longest! --


## Getting started

`npm install redux-perf --save`


## Usage

```javascript
import stopwatch from 'redux-perf';

const store = createStore(reducer, applyMiddleware(ReduxThunk, stopwatch));

```


## All Credits to original author
Alexander Reardon (https://github.com/alexreardon)
Original post (https://medium.com/@alexandereardon/performance-optimisations-for-react-applications-b453c597b191#.q0uobfylw)



### License
MIT
