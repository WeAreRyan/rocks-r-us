import RockListItem from "../RockListItem/RockListItem";

export default function rockList({ rockItems, handleAddToOrder }) {
  const rocks = rockItems.map((rock) => (
    <RockListItem key={rock._id} rock={rock}
    handleAddToOrder={handleAddToOrder}
     />
  ));
  return (
    <>
  <div className="">{rocks}</div>
  </>
  )
}
