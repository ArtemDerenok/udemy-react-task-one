import AppInfo from "./components/app-info/App-info";
import SearchPanel from "./components/search-panel/Search-panel";
import AppFilter from "./components/app-filter/App-filter";
import EmployeesList from "./components/employees-list/Employees-list";
import EmployeesAddForm from "./components/employees-add-form/Employees-add-form";
import './App.css';

function App() {
  return (
    <div className='app'>
        <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
        <EmployeesList />
        <EmployeesAddForm />
    </div>
  );
}

export default App;
