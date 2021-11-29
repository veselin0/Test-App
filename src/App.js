import "./App.css";

const Gocho = ({name, surname, link}) => {
    return (
        <div>
            <h1> My name is {name()}, surname - {surname} </h1>
            <a href={link}>My profile</a>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Gocho name={() => {return 'Gocho'}} surname="Kochev" link="twitter.com"/>
            <Gocho name={() => {return 'Mocho'}} surname="Bochev" link="twitter.com"/>
        </div>
    );
}

export default App;
