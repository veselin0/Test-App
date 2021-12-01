import { Component } from "react";

import "./App.css";

class Gocho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1
        }));
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1> My name is {name}, surname - {surname}, age - {this.state.years} </h1>
                <a href={link}>My profile</a>
            </div>
        );
    }
    
};

function App() {
    return (
        <div className="App">
            <Gocho name= 'Gocho' surname="Kochev" link="twitter.com"/>
            <Gocho name='Mocho' surname="Bochev" link="twitter.com"/>
        </div>
    );
}

export default App;
