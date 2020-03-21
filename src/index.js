import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


//TODO: Make the search function work with
//      your fight finder API.

class SearchModule extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults results={this.props.results}/>
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </form>
        );
    }
}

class SearchResults extends React.Component {
    render() {
        const rows = [];
        this.props.results.forEach((result) => {
            rows.push(<RecordRow
                        result={result}
                        key={result.row_id} />);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Opponent</th>
                        <th>Outcome</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class RecordRow extends React.Component {
    render() {
        const result = this.props.result;
        return (
            <tr>
                <td>{result.opponent}</td>
                <td>{result.outcome}</td>
            </tr>
        );
    }
}

//HARD-CODE RESULTS FOR NOW
const RESULTS = [
  { row_id: 1, opponent: "Hulk Hogan", outcome: "W" },
  { row_id: 2, opponent: "Ultimate Warrior", outcome: "L" },
];




ReactDOM.render(
    <SearchModule results={RESULTS} />,
    document.getElementById("root")
);

//Simpler JSX syntax
//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));
