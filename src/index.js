import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


//TODO: Play around with using a non-HOC approach for generating results
//TODO: Use everything that the API JSON response has to offer, not just
//      the fightHistory!

class SearchModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            results: []
        }

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    //Will pass this to children:
    handleSearchTextChange(e) {
        console.log("In handleSearchTextChange()...");
        //console.log(e.target.value);

        this.setState({
            searchText: e.target.value
        });
    }

    handleSearch() {
        console.log("In handleSearch()...");
        console.log(this.state.searchText);
        console.log(this.state.results);

        const searchText = this.state.searchText.replace(" ", "_");
        fetch("http://localhost:5000/data/"+searchText)
        .then(res => res.json())
        .then(
            (results) => {
                //FOR TESTING
                console.log("HELLO result.fightHistory!!");
                console.log(results.fightHistory);
                this.setState({results: results.fightHistory})
            },
            (error) => {
                console.log("UH-OH. ERROR!");
                console.log(error);
            }
        )

        /*
        // Simulate AJAX call FOR TESTING.
        setTimeout(() => {
          this.setState({results: RESULTS});
        }, 1000)
        */
    }

    render() {
        console.log("In searchModule's render()...");
        //console.log(this.handleSearchTextChange);
        //console.log(this.handleSearch);
        const {results, searchText} = this.state;

        return (
            <div>
                <SearchBar
                    searchText={searchText}
                    onSearchTextChange={this.handleSearchTextChange}
                    search={this.handleSearch}
                />
                <SearchResults
                    results={results} />
            </div>
        );
    }
}


const SearchBar = (props) => {
    const {
        searchText,
        onSearchTextChange,
        search
    } = props;

    console.log("In SearchBar...");
    console.log("props is...");
    console.log(searchText);

    return (
        <div>
            <input id="search_box" type="text"
                value={searchText}
                onChange={onSearchTextChange}
                placeholder="Search..." />
            <button onClick={search} type="button">Search</button>
        </div>
    );
}


const SearchResults = ({results}) => {
    console.log("In SearchResults...");
    console.log("results is...");
    console.log(results);

    const rows = [];
    results.forEach((result, i) => {
        rows.push(<RecordRow
                    result={result}
                    key={i} />);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Opponent</th>
                    <th>result</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}


class RecordRow extends React.Component {
    render() {
        const result = this.props.result;
        return (
            <tr>
                <td>{result.opponent}</td>
                <td>{result.result}</td>
            </tr>
        );
    }
}




ReactDOM.render(
    <SearchModule />,
    document.getElementById("root")
);

//Simpler JSX syntax
//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));
