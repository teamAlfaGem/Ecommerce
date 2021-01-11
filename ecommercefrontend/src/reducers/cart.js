export const cartProducts = (products = [], action) => {
    switch (action.type) {
        case 'ADD':
            return products
        case 'REMOVE':
            return products
        case 'INCREMENT_QTY':
            return products
        case 'DECREMENT_QTY':
            return products
        default:
            return products;
    }
}
    