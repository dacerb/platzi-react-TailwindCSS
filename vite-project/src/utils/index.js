
/**
 * This function calculate total prices of a new order.
 * @param {Array} products cartProduct: array of objects
 * @returns {number} Total prices 
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}