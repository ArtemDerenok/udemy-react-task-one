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
                    increase: true,
                    isRise: false,
                    id: 1,
                },
                {
                    name: 'Ivan P.',
                    salary: 345,
                    increase: false,
                    isRise: true,
                    id: 2,
                },
                {
                    name: 'Alex I.',
                    salary: 1034,
                    increase: false,
                    isRise: false,
                    id: 3,
                }
            ],
            term: '',
            filter: 'all',
        }
    }

    onDelete = (id) => {
       this.setState(({data}) => ({
           data: data.filter(item => item.id !== id),
       }))
    }

    onAddNewUser = (e) => {
        e.preventDefault();
        if (!e.target.elements.name.value || !e.target.elements.salary.value) {
            return
        }
        const newUser = {
            name: e.target.elements.name.value,
            salary: +e.target.elements.salary.value,
            id: nanoid(),
        }
        this.setState(({data}) => ({
            data: [...data, newUser]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (!term) {
            return items;
        }
        return  items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPosts = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.isRise)
            case 'salaryMoreThan1000':
                return  items.filter(item => item.salary >= 1000)
            default:
                return items;
        }
    }

    onFilterValue = (value) => {
        this.setState({filter: value})
    }

    render() {
        const {data, term, filter} = this.state;
        const increases = data.filter(item => item.isRise);
        const visibleData = this.filterPosts(this.searchEmployees(data, term), filter);

        return (
            <div className='app'>
                <AppInfo totalUsers={data.length}
                         totalIncreaseUsers={increases.length} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterValue={this.onFilterValue}
                               filter={filter} />
                </div>
                <EmployeesList data={visibleData}
                               onDelete={this.onDelete}
                               onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAddNewUser={this.onAddNewUser} />
            </div>
        )
    }
}

export default App;
