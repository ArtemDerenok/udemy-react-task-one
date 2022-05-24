import './employees-list-item.css'

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, increase, isRise, onSalaryEmp}) => {
    const classNames = `list-group-item ${increase ? 'increase' : ''} ${isRise ? 'like' : ''} d-flex justify-content-between`;

    return (
        <li className={classNames}>
                <span onClick={onToggleProp}
                      data-toggle='isRise'
                      className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" value={salary} onChange={onSalaryEmp} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm"
                        data-toggle='increase'
                        onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;