/**
 * this function calculates total price of a new order
 * @param {Array} prod
 * @returns {numer} TotalPrice
 */
export const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum
}