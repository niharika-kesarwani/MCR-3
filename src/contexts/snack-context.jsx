/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { snackReducer, initialSnack } from "../reducers/snack-reducer";

export const SnackContext = createContext();

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useReducer(snackReducer, initialSnack);

  const {
    originalSnacks,
    searchInput,
    idOrder,
    nameOrder,
    weightOrder,
    priceOrder,
    caloriesOrder,
    ingredientsOrder,
  } = snacks;

  const displaySnacks =
    searchInput?.length !== 0
      ? originalSnacks?.filter(
          ({ product_name, ingredients }) =>
            product_name.toLowerCase().includes(searchInput?.toLowerCase()) ||
            ingredients.some((item) =>
              item.toLowerCase().includes(searchInput?.toLowerCase())
            )
        )
      : idOrder !== ""
      ? [...originalSnacks]?.sort((a, b) =>
          idOrder === "LTH" ? a.id - b.id : b.id - a.id
        )
      : nameOrder !== ""
      ? nameOrder !== "LTH"
        ? [...originalSnacks]?.sort((a, b) =>
            a.product_name < b.product_name
              ? 1
              : b.product_name < a.product_name
              ? -1
              : 0
          )
        : [...originalSnacks]?.sort((a, b) =>
            a.product_name > b.product_name
              ? 1
              : b.product_name > a.product_name
              ? -1
              : 0
          )
      : weightOrder !== ""
      ? [...originalSnacks]?.sort((a, b) =>
          weightOrder === "LTH"
            ? Number(a.product_weight.slice(0, -1)) -
              Number(b.product_weight.slice(0, -1))
            : Number(b.product_weight.slice(0, -1)) -
              Number(a.product_weight.slice(0, -1))
        )
      : priceOrder !== ""
      ? [...originalSnacks]?.sort((a, b) =>
          priceOrder === "LTH" ? a.price - b.price : b.price - a.price
        )
      : caloriesOrder !== ""
      ? [...originalSnacks]?.sort((a, b) =>
          caloriesOrder === "LTH"
            ? a.calories - b.calories
            : b.calories - a.calories
        )
      : ingredientsOrder !== ""
      ? ingredientsOrder !== "LTH"
        ? [...originalSnacks]?.sort((a, b) =>
            a.ingredients.join("").replace(" ", "").toLowerCase() <
            b.ingredients.join("").replace(" ", "").toLowerCase()
              ? 1
              : b.ingredients.join("").replace(" ", "").toLowerCase() <
                a.ingredients.join("").replace(" ", "").toLowerCase()
              ? -1
              : 0
          )
        : [...originalSnacks]?.sort((a, b) =>
            a.ingredients.join("").replace(" ", "").toLowerCase() >
            b.ingredients.join("").replace(" ", "").toLowerCase()
              ? 1
              : b.ingredients.join("").replace(" ", "").toLowerCase() >
                a.ingredients.join("").replace(" ", "").toLowerCase()
              ? -1
              : 0
          )
      : originalSnacks;

  return (
    <SnackContext.Provider value={{ snacks, setSnacks, displaySnacks }}>
      {children}
    </SnackContext.Provider>
  );
};

export const useSnack = () => useContext(SnackContext);
