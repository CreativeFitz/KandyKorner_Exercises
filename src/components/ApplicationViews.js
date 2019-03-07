import { Route } from 'react-router-dom';
import React, { Component } from "react";
import StoreList from './store/StoreList';
import EmployeesList from './employee/EmployeeList';
import CandyTypesList from './candyType/CandyTypesList';
import CandiesList from './candies/CandiesList'

class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }
    deleteCandies = id => {
        return fetch(`http://localhost:5002/candies/${id}`,{
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/candies`))
        .then(e => e.json ()
        .then(candies => this.setState({
            candies:candies
        })))
    }

    componentDidMount(){
        const newState = {};
        fetch("http://localhost:5002/stores")
        .then(stores => stores.json())
        .then(parsedStores => {
            newState.stores = parsedStores;
            return fetch("http://localhost:5002/employees")
        }).then(employees => employees.json())
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
            return fetch("http://localhost:5002/candyTypes")
        }).then(candyTypes => candyTypes.json())
        .then(parsedCandyTypes =>{
            newState.candyTypes =parsedCandyTypes;
            return fetch("http://localhost:5002/candies")
        }).then(candies => candies.json())
        .then(parsedCandies => {
            newState.candies = parsedCandies;
            this.setState(newState);
        })
    }


    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {return <StoreList stores={this.state.stores}/>
                }} />
                <Route path="/employees" render={(props) => {return <EmployeesList employees={this.state.employees}/>}} />
                <Route path="/candyTypes" render={(props) => {return <CandyTypesList candyTypes={this.state.candyTypes}/>}} />
                <Route path="/candiesList" render={(props) => { return <CandiesList deleteCandy={this.deleteCandy} candies={this.state.candies}/>}}/>
            </div>
        );
    }
}

export default ApplicationViews;