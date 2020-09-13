import React from 'react';
import data from './data'

const DetailCar = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            DetailCar
            <h3>{data[props.match.params.id].car_model}</h3>
            <h3>{data[props.match.params.id].car_year}</h3>

        </div>
    );
}

export default DetailCar;