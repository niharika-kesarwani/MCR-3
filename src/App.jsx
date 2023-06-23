import "./App.css";
import { useSnack } from "../src/main";
import { snackConstants } from "./constants/snack-constant";

function App() {
  const { displaySnacks, snacks, setSnacks } = useSnack();

  const {
    SORT_BY_SEARCH,
    SORT_BY_ID,
    SORT_BY_NAME,
    SORT_BY_WEIGHT,
    SORT_BY_PRICE,
    SORT_BY_CALORIES,
    SORT_BY_INGREDIENTS,
  } = snackConstants;

  console.log(snacks);

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-3xl font-bold uppercase">Snack Table</h1>
      <input
        className="border p-2"
        placeholder="Search with Products or Ingredients..."
        onChange={(e) =>
          setSnacks({ payload: SORT_BY_SEARCH, data: e.target.value })
        }
        value={snacks?.searchInput}
      />
      <table className="table-auto border-separate border bg-white shadow-lg">
        <thead>
          <tr>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer hover:bg-blue-200"
              onClick={() => setSnacks({ payload: SORT_BY_ID })}
            >
              <p className="hover:scale-125">ID</p>
            </th>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer hover:bg-blue-200"
              onClick={() => setSnacks({ payload: SORT_BY_NAME })}
            >
              <p className="hover:scale-125">Product Name</p>
            </th>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer hover:bg-blue-200"
              onClick={() => setSnacks({ payload: SORT_BY_WEIGHT })}
            >
              <p className="hover:scale-125">Product Weight</p>
            </th>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer hover:bg-blue-200"
              onClick={() => setSnacks({ payload: SORT_BY_PRICE })}
            >
              <p className="hover:scale-125">Price (INR)</p>
            </th>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer hover:bg-blue-200"
              onClick={() => setSnacks({ payload: SORT_BY_CALORIES })}
            >
              <p className="hover:scale-125">Calories</p>
            </th>
            <th
              className="border bg-blue-100 px-8 py-4 hover:cursor-pointer"
              onClick={() => setSnacks({ payload: SORT_BY_INGREDIENTS })}
            >
              <p className="hover:scale-125">Ingredients</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {displaySnacks?.map((snack) => {
            const {
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients,
            } = snack;
            return (
              <tr key={id} className="hover:bg-gray-100">
                <td className="border px-8 py-4">{id}</td>
                <td className="border px-8 py-4">{product_name}</td>
                <td className="border px-8 py-4">{product_weight}</td>
                <td className="border px-8 py-4">{price}</td>
                <td className="border px-8 py-4">{calories}</td>
                <td className="border px-8 py-4">{ingredients.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
