import React, { Component } from "react";
import { render } from 'react-dom';
import Router from "./RouterPage";
import RouterPage from "./RouterPage";



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <h1>Testing react rendering.</h1>
    }
}

const NewApp = ({name, another}) => {
    return (
        <h1>New testing page{name} {another}</h1>
    )
}

const appDiv = document.getElementById("app")
render(<RouterPage name='whatever' another='interesting'/>, appDiv)

