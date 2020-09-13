import React, { Component } from 'react';

class Business extends Component {
    state = { 
        dataFull: {},
        data: []

    }
        componentDidMount() {
            fetch('http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=e86b7e46b097496baf69899e50907ede')
          .then(response => response.json())
                .then(json => {
                    this.setState({ dataFull: json });
                    this.setState({ data: this.state.dataFull.articles });
                    console.log(this.state.data)
                })
            }
    
    render() { 
        return (<div id="news-grid">
            {this.state.data.map((elt, i) => <div key={i}>

                    <img src={elt.urlToImage} alt="" />
                    <h1>{elt.title}</h1>
                    <p>{elt.description}</p>
                    <p>{elt.publishedAt.slice(0,10)}</p>
                    <a href={elt.url} target="_blank">Read More</a>


            </div>
            
            
            )}
        </div> );
    }
}
 
export default Business;