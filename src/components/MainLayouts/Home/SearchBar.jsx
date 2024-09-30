import React from 'react'
import Css from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={Css.SearchBox}>
        <input type="text"  placeholder='Find Your Favourite University' />
        <button className={Css.Btn}>Search</button>
    </div>
  )
}

export default SearchBar