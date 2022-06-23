import { fetchUser, fetchCart } from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initalState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};
