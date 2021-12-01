import { Component } from "react";

import "./App.css";

class Gocho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
        this.nextYear = this.nextYear.bind(this);//using buind
    }

    //using bind:
    nextYear() {
        this.setState(state => ({
            years: state.years + 1
        }));
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        });
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years, text} = this.state;

        console.log(this);

        return (
            <div>
                <button onClick={this.nextYear}>{text}</button>
                <h1> 
                    My name is {name}, 
                    surname - {surname}, 
                    age - {years}, 
                    position - {position} 
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Insert Position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
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
