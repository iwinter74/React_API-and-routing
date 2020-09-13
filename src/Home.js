import React, { Component } from 'react';

class Home extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
                console.log(this.state.data)
            })
    }
    render() {
        return (<div>

            {this.state.data.map((elt) => <div key={elt.id}>
                <input type="checkbox" name="" id="" checked={elt.completed} />
                <h3>{elt.title}</h3>
            </div>)}
        </div>);
    }
}

export default Home;