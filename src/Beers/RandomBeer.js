import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BeerItem from './BeerItem';


class RandomBeer extends Component {
    state = { 
        data: [],
        j: 0,
        isLoaded: false
     
    }
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => response.json())
          
            .then(json => {
                console.log(json)
                this.setState({ data: json }, () => {
                    console.log(this.state.data)
                    let i = this.state.data.length - 1
                    console.log(i)
                    let num = Math.floor(Math.random() * i)
                    console.log(num)
                    this.setState({ j: num }, () => {
                        console.log(this.state.j)
                        console.log(this.state.data[this.state.j].image_url)
                        console.log(this.state.data[this.state.j].name)
                        this.setState({ isLoaded: true  });
                    });
            
                  
                });
                
               
            })
            
    

    }

    // function Rand(NewDictionary){
    //     const keys = Object.keys(NewDictionary);
    //     let i = keys.length - 1;
    //     const j = Math.floor(Math.random() * i);
    //     return NewDictionary[keys[j]];
    //   }

    render() { 
        return (
            <div>
                {this.state.isLoaded?    <BeerItem
                    name={this.state.data[this.state.j].name}
                    tagline={this.state.data[this.state.j].tagline}
                    image_url={this.state.data[this.state.j].image_url}
                    first_brewed={this.state.data[this.state.j].first_brewed}
                    attenuation_level={this.state.data[this.state.j].attenuation_level}
                    description={this.state.data[this.state.j].description}
                    contributed_by={this.state.data[this.state.j].contributed_by}
                    
                />  : "Is loading"}
          
        </div>  );
    }
}
 
export default RandomBeer;