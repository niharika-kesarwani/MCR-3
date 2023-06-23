import { snackConstants } from "../constants/snack-constant";
import { snacks } from "../data/snacks-data";

const {
  SORT_BY_SEARCH,
  SORT_BY_ID,
  SORT_BY_NAME,
  SORT_BY_WEIGHT,
  SORT_BY_PRICE,
  SORT_BY_CALORIES,
  SORT_BY_INGREDIENTS,
} = snackConstants;

export const snackReducer = (state, action) => {
  switch (action.payload) {
    case SORT_BY_SEARCH:
      return { ...initialSnack, searchInput: action.data };
    case SORT_BY_ID:
      return {
        ...initialSnack,
        idOrder:
          state?.idOrder === ""
            ? "LTH"
            : state?.idOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    case SORT_BY_NAME:
      return {
        ...initialSnack,
        nameOrder:
          state?.nameOrder === ""
            ? "LTH"
            : state?.nameOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    case SORT_BY_WEIGHT:
      return {
        ...initialSnack,
        weightOrder:
          state?.weightOrder === ""
            ? "LTH"
            : state?.weightOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    case SORT_BY_PRICE:
      return {
        ...initialSnack,
        priceOrder:
          state?.priceOrder === ""
            ? "LTH"
            : state?.priceOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    case SORT_BY_CALORIES:
      return {
        ...initialSnack,
        caloriesOrder:
          state?.caloriesOrder === ""
            ? "LTH"
            : state?.caloriesOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    case SORT_BY_INGREDIENTS:
      return {
        ...initialSnack,
        ingredientsOrder:
          state?.ingredientsOrder === ""
            ? "LTH"
            : state?.ingredientsOrder === "LTH"
            ? "HTL"
            : "LTH",
      };
    default:
      return state;
  }
};

export const initialSnack = {
  originalSnacks: snacks,
  searchInput: "",
  idOrder: "",
  nameOrder: "",
  weightOrder: "",
  priceOrder: "",
  caloriesOrder: "",
  ingredientsOrder: "",
};
