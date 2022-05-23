import {Component} from 'react';
import {nanoid} from 'nanoid';
import AppInfo from "./components/app-info/App-info";
import SearchPanel from "./components/search-panel/Search-panel";
import AppFilter from "./components/app-filter/App-filter";
import EmployeesList from "./components/employees-list/Employees-list";
import EmployeesAddForm from "./components/employees-add-form/Employees-add-form";
import './App.css';


class App extends  Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: [
                {
                    name: 'Artem D.',
                    salary: 1000,
                    id: 1,
                },
                {
                    name: 'Ivan P.',
                    salary: 345,
                    id: 2,
                },
                {
                    name: 'Alex I.',
                    salary: 1034,
                    id: 3,
                }
            ]
        }
    }

    onDelete = (id) => {
       this.setState(({data}) => ({
           data: data.filter(item => item.id !== id),
       }))
    }

    onAddNewUser = (e) => {
        const newUser = {
            name: e.target.elements.name.value,
            salary: e.target.elements.salary.value,
            id: nanoid(),
        }
        this.setState(({data}) => ({
            data: [...data, newUser]
        }));
        e.preventDefault();
    }

    render() {
        const {data} = this.state;

        return (
            <div className='app'>
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data}
                               onDelete={this.onDelete} />
                <EmployeesAddForm onAddNewUser={this.onAddNewUser} />
            </div>
        )
    }
}

export default App;
