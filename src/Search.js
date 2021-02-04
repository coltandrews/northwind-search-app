import React, { Component } from "react";
class Search extends Component {
  
    state = {
        searchValue: '',
        employee: []
    };
    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };
    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };
    makeApiCall = searchInput => {
        var searchUrl = `https://localhost:5001/employees/${searchInput}`;
        fetch(searchUrl)
            .then(response => {
                return response.json();

            })
            .then(jsonData => {
         
                this.setState({ employee: jsonData });

                console.log(this.state.employee)
            });
    };
    render() {

        return (
            <div class="container">
                <div class="col">
                    <h2 class="text-center m-5">Employee Search</h2>
                    <div class="row justify-content-center">
                        <input name="text" type="text" placeholder="search by id, name" onChange={event => this.handleOnChange(event)}
                            value={this.state.searchValue} />
                        <button onClick={this.handleSearch} class="btn btn-primary m-2">Search</button>
                    </div>
                    <div class="text-center m-5">
                        <h4> {this.state.employee.firstName} {this.state.employee.lastName}</h4>
                        </div>
                </div>
            </div>
        );
    }
}
export default Search;
