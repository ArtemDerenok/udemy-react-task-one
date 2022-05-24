import {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        this.setState(() => ({
            term: e.target.value,
        }));
        this.props.onUpdateSearch(e.target.value);
    }

    render() {
        const {term} = this.state;

        return (
            <input type='text'
                   value={term}
                   onChange={this.onUpdateSearch}
                   className='form-control search-input'
                   placeholder='Найти сотрудника'/>
        )
    }
}

export default  SearchPanel;