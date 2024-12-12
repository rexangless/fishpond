import React from 'react';

function Car(props) {
    return <p>Buy this {props.color} car now!</p>;
}

const header = 
(<>
    <header style={{margin: 0}}>
        <table style={{textAlign: 'center', width: "100%", }}>
            <th style={{height:'10em', paddingTop: '5em', border: "3px black thin"}}>
            <h1 style={{}}>Fi$Pond</h1>
            </th>
            <tr>
            <p style={{color: "red"}}>Your Solution, our catalog</p>
        <br/>
            </tr>
            <tr>
            <span>
            <Car color = "blue"/>
            </span>
            </tr>
        </table>
    </header>
</>);

function Headr()   {
    return header;
}

export default Headr;