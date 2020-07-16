const Reducer = (state, action) => {
    switch (action.type) {
        case 'NEW_PRODUCT':
            return {
                ...state,
                id_counter: parseInt(action.product.id),
                items_list: state.items_list.concat(action.product)
            };
        default:
            alert("Error, bad call!");
            return state;
    }
};

export default Reducer;