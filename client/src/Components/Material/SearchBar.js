import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.css';


class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <SearchIcon className="search-bar-search-icon"/>
                <input type="text" className="search-bar-input" placeholder="Tìm kiếm..."/>
            </div>
        );
    }
}


export default SearchBar;