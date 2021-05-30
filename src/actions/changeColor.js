export const changeColorAction = (color) => {
    console.log('changeColor action');
    return {
        type: "CHANGE_COLOR",
        payload: color
    }
}

