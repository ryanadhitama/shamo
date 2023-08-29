import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;
