"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    return function (next) {
        return function (action) {
            console.time(action.type);

            // `next` is a function that takes an 'action' and sends it through to the 'reducers'
            // this will result in a re-render of your application
            var result = next(action);

            // how long did the render take?
            console.timeEnd(action.type);

            return result;
        };
    };
};