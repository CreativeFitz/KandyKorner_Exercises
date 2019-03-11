import { Route } from 'react-router-dom';
import React, { Component } from "react";
import StoreList from './store/StoreList';
import StoreAPIManager from '../modules/StoreManager';
import StoreDetail from './store/StoreDetail';
import EmployeesList from './employee/EmployeeList';
import EmployeeAPIManager from '../modules/EmployeeManager';
import EmployeeDetail from './employee/EmployeeDetail';
import CandyTypesList from './candyType/CandyTypesList';
import CandyTypesAPIManager from '../modules/CandyTypeManager';
import CandyTypeDetail from './candyType/CandyTypeDetail';
import CandiesList from './candies/CandiesList';
import CandyAPIManager from '../modules/CandyManager';
import CandiesDetail from './candies/CandiesDetail';



// Need to finish adding in the renders for the updated exact paths. Also, check to see why delete button is not showing up for certain components.


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }
    deleteCandy = id => {
        return CandyAPIManager.deleteCandy(id)
        .then (CandyAPIManager.getAllCandies)
        .then(candies => this.setState({
            candies: candies
        }))
    }
    deleteCandyTypes = id => {
        return CandyTypesAPIManager.deleteCandyTypes(id)
        .then (CandyTypesAPIManager.getAllCandyTypes)
        .then(candyTypes => this.setState({
            candyTypes: candyTypes
        }))
    }
    deleteEmployee = id => {
        return EmployeeAPIManager.deleteEmployee(id)
        .then(EmployeeAPIManager.getAllEmployees)
        .then(employees => this.setState({
            employees: employees
            }))
    }
    deleteStore = id => {
        return StoreAPIManager.deleteStore(id)
        .then(StoreAPIManager.getAllStores)
        .then(stores => this.setState({
            stores: stores
        }))
    }




    componentDidMount(){
        const newState = {};
       StoreAPIManager.getAllStores()
        .then(parsedStores => {
            newState.stores = parsedStores;
        })
            EmployeeAPIManager.getAllEmployees()
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
        })
            CandyTypesAPIManager.getAllCandyTypes()
        .then(parsedCandyTypes =>{
            newState.candyTypes =parsedCandyTypes;
        })
            CandyAPIManager.getAllCandies()
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
                <Route path="/:storeId(\d+)"
                render={(props) => {
                    return <StoreDetail {...props}
                    deleteStore={this.deleteStore} stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {return <EmployeesList employees={this.state.employees}/>}} />
                <Route path="/employees/:employeeId(\d+)"
                render={(props) => {
                    return <EmployeeDetail {...props}
                    deleteEmployee={this.deleteEmployee} employees={this.state.animals} />
                }}/>
                <Route path="/candyTypes" render={(props) => {return <CandyTypesList candyTypes={this.state.candyTypes}/>}} />
                <Route path="/candiesList" render={(props) => { return <CandiesList deleteCandy={this.deleteCandy} candies={this.state.candies}/>}}/>
            </div>
        );
    }
}

export default ApplicationViews;