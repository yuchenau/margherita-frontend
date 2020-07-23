import React from 'react';

export default function PizzaDetails(props) {
    const productId = props.match.params.id;
    return (
        <div>
            <h1>This is pizza details for {productId}</h1>
        </div>
    );
}
