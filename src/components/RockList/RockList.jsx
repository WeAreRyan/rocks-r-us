import "./RockList.css";
import RockListItem from "../RockListItem/RockListItem";

export default function rockList({
  rockItems,
  handleAddToOrder,
  cartToggleOn,
  showCart,
}) {
  const rocks = rockItems.map((rock) => (
    <RockListItem
      key={rock._id}
      rock={rock}
      handleAddToOrder={handleAddToOrder}
      cartToggleOn={cartToggleOn}
      showCart={showCart}
    />
  ));
  return <>{rocks}</>;
}
