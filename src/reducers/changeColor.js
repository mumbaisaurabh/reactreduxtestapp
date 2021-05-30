// const initialState = 'red';
// const changeTheColor = (state = initialState, action) => {
const changeTheColor = (state={}, action) => {
    console.log('changeTheColor REDUCER');
    switch (action.type) {
        case "CHANGE_COLOR":
            return document.body.style.backgroundColor = action.payload;
            // return action.payload;
        default:
            return state;
    }
}
export default changeTheColor;