import React from 'react';
import setMeals from '../Meals/Meals';
import './Search.css';
const Search = () => {
    const searchMeal = () => {
        const searchInput = document.getElementById('search-input').value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }
    return (
        <div>
            <div className="form-control">
                <div className="input-group">
                    <input id='search-input' type="text" placeholder="Search Your Meal Here...." className="input w-1/2 input-bordered" />
                    <button className="btn btn-square" onClick={() => searchMeal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;