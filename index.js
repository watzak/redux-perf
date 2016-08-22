export default store => next => action => {
    console.time(action.type);

    // `next` is a function that takes an 'action' and sends it through to the 'reducers'
    // this will result in a re-render of your application
    const result = next(action);

    // how long did the render take?
    console.timeEnd(action.type);

    return result;
};
