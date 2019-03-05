import { Route } from 'react-router-dom';
import React, { Component } from "react";
import StoreList from './store/StoreList';
import EmployeesList from './employee/EmployeeList';
import CandyTypesList from './candyType/CandyTypesList';
import CandiesList from './candies/CandiesList'

class ApplicationViews extends Component {

    storesFromAPI = [
        {id: 1, name: "All Da' Candies"},
        {id: 2, name: "Sweetning Sweets"},
        {id: 3, name: "Chocoholic"},
        {id: 4, name: "Bubble Trouble"}
    ]

    employeesFromAPI = [
        {id: 1, name: "Ted"},
        {id: 2, name: "Tom"},
        {id: 3, name: "Tony"},
        {id: 4, name: "Timmy"},
        {id: 5, name: "Tammy"}
    ]

    candyTypesFromAPI = [
        {id: 1, name: "Chocolate"},
        {id: 2, name: "Taffy"},
        {id: 3, name: "Bubble Gum"},
        {id: 4, name: "Cookies"}
    ]

    candiesFromAPI = [
        {id: 1, name: "Reeses"},
        {id: 2, name: "Wonka-Bar"},
        {id: 3, name: "Double Bubble"},
        {id: 4, name: "Famous Amos"}
    ]

    state = {
        stores: this.storesFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {return <StoreList stores={this.state.stores}/>
                }} />
                <Route path="/employees" render={(props) => {return <EmployeesList employees={this.state.employees}/>}} />
                <Route path="/candyTypes" render={(props) => {return <CandyTypesList candyTypes={this.state.candyTypes}/>}} />
                <Route path="/candiesList" render={(props) => { return <CandiesList candies={this.state.candies}/>}}/>
            </div>
        );
    }
}

export default ApplicationViews;