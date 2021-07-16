import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

// The special prop which is built into react, which every component receives,
// even if you are never setting it explicitly and that is 
// the prop which value I wanna output between opening and closing tag of this div
// It is the children prop


export default Card;