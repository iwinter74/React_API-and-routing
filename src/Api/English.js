import React, { Component } from 'react';
import News from './News';

class English extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=3060deabfb6d4a2e9867e0d2004a5f88')
            .then(response => response.json())
            .then(json => this.setState({ data: json.articles }))

    }
    render() {
        return (
            <div className="grid">{this.state.data.map((elt, i) => <News key={i} bild={elt.urlToImage} title={elt.title} description={elt.description} />)}</div>
        );
    }
}

export default English;