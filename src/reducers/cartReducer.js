export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':
            const { id, title, image, rating, price } = action.payload;
            return {
                basket: [...state.basket, { id, title, image, rating, price}]
            }
        case 'REMOVE_FROM_BASKET':
            console.log(state.basket.filter((item) => item.id !== action.payload.id));
            return {
                basket: state.basket.filter((item) => item.id !== action.payload.id)
            };
        default:
            return state;
    };
}