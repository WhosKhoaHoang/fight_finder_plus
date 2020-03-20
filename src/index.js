import React from "react";
import ReactDOM from "react-dom";
import "./index.css"




class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
}

class SearchModule extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(
    <SearchModule />,
    document.getElementById("root")
);

//Simpler JSX syntax
//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));
