import propTypes from 'prop-types'
import './search.css';
import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchText, setSearch] = useState('');

    return (
        <div className="input-group">
            <div className="search-container">
                <input
                    type="search"
                    className="form-control custom-search"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}></input>
                <button type="button" className="btn btn-primary custom-button" onClick={() => onSearch(searchText)}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

Search.propTypes = {
    onclick: propTypes.func
}

export default Search;