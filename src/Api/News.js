import React from 'react';

const News = (props) => {
    return (
        <article>
            <img src={props.bild} alt="" />
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
        </article>
    );
}

export default News;