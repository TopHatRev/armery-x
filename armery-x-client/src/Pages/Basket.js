import { useCart } from "react-use-cart";
import AnimCard from "../Components/AnimCard";

function Basket() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button className="btn btn-circle bg-base-200" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button
              className="btn btn-circle bg-base-200 m-5"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="btn btn-circle bg-base-200" onClick={() => removeItem(item.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>

      {items.map((product) => {
        return <AnimCard product={product} />;
      })}
    </>
  );
}
export default Basket;
