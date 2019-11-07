const INITIAL_STATE = {
  name: "Abdul Qayoom Lanjo",
  School: "SayLani",
  age: 20,
  count: 0,
  array: ""
}
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.data)
  console.log(state.array)
  switch (action.type) {
    case 'text':
      return {
        array: state.data
      };
    // case 'DECREMENT':
    //   return {
    //     count: state.count - 1
    //   };
    default:
      return state;
  }
}

export default reducer