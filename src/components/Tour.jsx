import React from 'react'

const Tour = ({ id, info, image, name, price, removeData }) => {
  const style = {
    color: "red"
  }
  return <>
    <div className="container">
    <div className="item">
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>{info}</p>
        <h3 style={style}>${price}</h3>
        <button onClick={() => removeData(id)}>Not Interested</button>
      </div>
    </div>
    </div>
  </>
}

export default Tour;