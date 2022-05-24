import EmployeesListItem from "../employees-list-item/Employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryEmp}) => {
    return (
        <ul className="app-list list-group">
            {data.map((item) => <EmployeesListItem
                {...item}
                key={item.id}
                onDelete={() => onDelete(item.id)}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryEmp={(e) => onSalaryEmp(e, item.id)} />)}
        </ul>
    )
};

export default EmployeesList;