import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


//TODO: Make the search function work with
//      your fight finder API.
//TODO: Generate results that are NOT hard-coded!

class SearchModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchText={this.state.searchText} />
                <SearchResults
                    searchText={this.state.searchText}
                    results={this.props.results} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    render() {

        console.log("HEY IN SearchBar render()!!!");
        console.log(this.props.searchText);

        return (
            <form id="search_form" onSubmit={this._do_search}>
                <input id="search_box" type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </form>
        );
    }

    _do_search = (e) => {
        e.preventDefault();
        console.log("IN _test. Search value is...");
        console.log(document.getElementById("search_box").value);
        //console.log(this.props.searchText);

        //THINK: Need to change props here???

        /*
        //NOTE: Can't seem to do this...
        <SearchResults results = {RESULTS} />
        */
    }
}

class SearchResults extends React.Component {
    render() {
        const searchText = this.props.searchText;

        console.log("HEY IN SearchResults render()!!!");
        console.log(this.props.searchText);
        console.log(searchText);

        /*
        //TODO: Verify if this is the right way to go about
        //      doing things...
        //Make AJAX request
        fetch("http://localhost:5000/data/hatsu_hioki")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    result: result
                });

                //FOR TESTING
                console.log(result);
          },
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
            }
        )
        */

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

//HARD-CODED RESULTS
const RESULTS = [
  { row_id: 1, opponent: "Hulk Hogan", outcome: "W" },
  { row_id: 2, opponent: "Ultimate Warrior", outcome: "L" },
];




ReactDOM.render(
    <SearchModule results={[]} />,
    document.getElementById("root")
);

//Simpler JSX syntax
//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));
