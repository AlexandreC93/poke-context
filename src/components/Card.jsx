import React, { useState } from 'react'

export default function Card(props) {
    
    return (
        <div >
            
        <div id="card">
            <img src={props.image} alt={props.name} />

            <h2>{props.name}</h2>
            <h3>Height: {props.height}</h3>
            <h3>Weight: {props.weight}</h3>
            <h3>Type: {props.types}</h3>
        </div>

        </div>
    )
}
