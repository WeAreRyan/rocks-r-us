import "./RockListItem.css"

export default function RockListItem({ rock }) {
    return (
    <div className="">
        <div>{rock.name}</div>
        <div>{rock.rockType.name}</div>
        <img className="rockPicture" src={rock.img} />
        <div>${rock.price} lb</div>

    </div>
    )
}