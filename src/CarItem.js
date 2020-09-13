import React from 'react';
import {
    Link
} from "react-router-dom";
const CarItem = (props) => {
    return (<article>
        <h3>{props.car_model}</h3>
        <h3>{props.car_year}</h3>
        <Link to={`/cars/${props.id}`}>Read More</Link>
    </article>);
}

export default CarItem;