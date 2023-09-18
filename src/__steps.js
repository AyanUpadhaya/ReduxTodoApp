/** Redux Toolkit Steps */

/**
 * create store.js amd import configure store from redux toolkit
 * export store with empty reducer object
 * In index js import Provider from react-redux and pass store prop from store
 * create feature/counter folder and counterSlice.js
 * import createSlice from redux toolkit
 * create an initial state object and pass that create Slice api
 * export const counterSlice = createSlice({}) 
 * pass name, initialState and reducers to slice
 * export slice reducer and actions
 * export const {increament,decreament,increamentBy} = counterSlice.actions;
 * export default counterSlice.reducer
 * import reducer in store file and pass that to store 
 * const store = configureStore({
    reducer:{couter:counterReducer}
    })

 * import useSelector and useDispatch from react-redux in component
 * useSelector returns state.counter.value and useDispatch returns an dispath function
 * onClick we use dispatch for dispatching action creators
 * actionCreators will update the state in the store 
 * 
 * 


 */