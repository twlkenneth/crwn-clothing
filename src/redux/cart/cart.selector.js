import { createSelector } from 'reselect';

const seelctCart = state => state.cart;

export const selectCartItems = createSelector(
    [seelctCart],
    cart => cart.cartItems


);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
     cartItems.reduce(
         (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
     )
);