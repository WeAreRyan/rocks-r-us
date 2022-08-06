import RockListItem from "../RockListItem/RockListItem";

export default function rockList({ rockItems }) {
  const rocks = rockItems.map((rock) => (
    <RockListItem key={rock._id} rock={rock} />
  ));
  return (
    <>
  <div className="">{rocks}</div>
  </>
  )
}
