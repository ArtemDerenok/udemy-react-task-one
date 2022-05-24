import {nanoid} from "nanoid";
import './app-filter.css'

const AppFilter = ({onFilterValue, filter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salaryMoreThan1000', label: 'З/П больше 1000'},
    ]

    return (
        <div className='btn-group'>
            {buttonsData.map(button => {
                const active = filter === button.name;
                const className = active ? 'btn-light' : 'btn-outline-light';
                return <button className={`btn ${className}`}
                               onClick={() => onFilterValue(button.name)}
                               key={nanoid()}
                               type='button'>{button.label}</button>
            })}
        </div>
    )
};

export default AppFilter;