import "./RockListItem.css"

export default function RockListItem({ rock, handleAddToOrder }) {
    return (
    <div className="">
        <div>{rock.name}</div>
        <div>{rock.rockType.name}</div>
        <img className="rockPicture" src={rock.img} />
        <div>${rock.price} lb</div>
        <button className="btn-sm" onClick={() => handleAddToOrder(rock._id)}>
          ADD
        </button>

    </div>
    )
}