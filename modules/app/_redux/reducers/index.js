import { combineReducers } from "redux";
import {
  GET_NUMBER_CART,
  ADD_CART,
} from "../actions";
const initProduct = {
  numberCart: 0,
  Carts: [],
};

function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          category: action.payload.category,
          quantity: 1,
          description: action.payload.description,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          name: action.payload.name,
          sku: action.payload.sku,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, sku) => {
          if (item.sku == action.payload.sku) {
            state.Carts[sku].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            category: action.payload.category,
            quantity: 1,
            description: action.payload.description,
            imageUrl: action.payload.imageUrl,
            price: action.payload.price,
            name: action.payload.name,
            sku: action.payload.sku,
          };
          state.Carts.push(_cart);
        }
      }
      
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
   default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;