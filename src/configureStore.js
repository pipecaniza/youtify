import reduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import reducers from './reducers/index';

const configureStore = () => {
    const persistedState = loadState()

    let composeEnhancers = compose;
    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    
    const store = createStore(
      reducers,
      persistedState,
      composeEnhancers(applyMiddleware(reduxThunk))
    )

    store.subscribe(throttle(() => {    
        saveState({
          auth: store.getState().auth,
          playlists: store.getState().playlists
        })
    }, 1000))

    return store
}

export default configureStore