import React, { Component } from 'react';
import data from './data'
import CarItem from './CarItem'
class CarList extends Component {
    state = {
        data: data.slice()
    }
    render() {
        return (
            <section id="grid">
                {this.state.data.map((elt) => <CarItem
                    key={elt.id}
                    car_year={elt.car_year}
                    car_model={elt.car_model}
                    id={elt.id}
                />
                )}
            </section>
        );
    }
}

export default CarList;