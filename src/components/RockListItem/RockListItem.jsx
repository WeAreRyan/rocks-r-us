import "./RockListItem.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function RockListItem({ rock, handleAddToOrder }) {
  const [rockQty, setNewRockQty] = useState(1); 
  const [rockId ] = useState(rock._id)

  const addToOrder = (evt) => {
    evt.preventDefault();
    const orderItem = {
      rockQty, rockId
    }
    handleAddToOrder(orderItem)
  }
    return (
    <Card className="rockCard">
      <form className="form-group mt-2" onSubmit={addToOrder}>
        <div className="rockName">{rock.name}</div>
        <div className="rockType">Type: {rock.rockType.name}</div>
        <img className="rockPicture" src={rock.img} />
        <div className="rockPrice">${rock.price.toFixed(2)} lb</div>
          <label className="rockPrice">Quantity in pounds</label>
          <br />
          <input
        className="rockQtyInput"
        type="number"
        value={rockQty}
        onChange={(evt) => setNewRockQty(evt.target.value)}
         />
        <input
        value={rockId}
        readOnly
        type='hidden'></input>
        <br />
        <Button type="submit" className="btn btn-light p-3 mt-3 mb-3 addCartButton">
          ADD TO CART
        </Button>
        </form>

    </Card>
    )
}