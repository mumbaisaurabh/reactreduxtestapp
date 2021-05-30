export const incNumber = (num) => {
    console.log('incNumber action');
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    console.log('decNumber action');
    return {
        type: "DECREMENT"
    }
}