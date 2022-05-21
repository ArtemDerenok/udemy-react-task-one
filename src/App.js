import AppInfo from "./components/app-info/App-info";
import SearchPanel from "./components/search-panel/Search-panel";
import AppFilter from "./components/app-filter/App-filter";
import EmployeesList from "./components/employees-list/Employees-list";
import EmployeesAddForm from "./components/employees-add-form/Employees-add-form";
import './App.css';

function App() {
  const data = [
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

  return (
    <div className='app'>
        <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
        <EmployeesList data={data} />
        <EmployeesAddForm />
    </div>
  );
}

export default App;
