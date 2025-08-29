import { useSelector, useDispatch } from "react-redux";
import { deletefromcart } from "../../../Store/CartSlice";
import MainNavbar from "../navbar/MainNavbar";

function Cart() {
  const selector = useSelector((state) => state.ReducerOne);
  const dispatch = useDispatch();

  // Check if the cart is empty
  if (selector.length === 0) {
    return (
      <>
        <MainNavbar />
        <p className="text-gray-500 p-4">Your cart is empty.</p>
      </>
    );
  } else {
    return (
      <>
        <MainNavbar />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
          {selector.map((item, index) => (
            <div key={item.id} className="mb-4 p-4 border rounded flex items-center">
              <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover mr-4" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-amber-900 px-4 py-2 text-white rounded hover:bg-amber-700 transition"
                onClick={() => dispatch(deletefromcart({ index }))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
