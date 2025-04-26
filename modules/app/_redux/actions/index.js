export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}

