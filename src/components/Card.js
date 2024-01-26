import React from 'react';
const cad={
    width:'19rem',
}
export default function card(props) {
  return (
    <div>
      <div className="card" style={cad}>
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href="/" className="btn btn-dark">Explore more</a>
  </div>
</div>
    </div>
  )
}
