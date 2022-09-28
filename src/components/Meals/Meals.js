import React from 'react';

const Meals = () => {
    // fetch meals from mealdb api
    const [meals, setMeals] = React.useState([]);
    React.useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            <h1 className='text-center text-xl mt-7 font-bold'>Available Meals</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {
                    meals.map(meal => <div className='shadow-lg rounded-lg overflow-hidden'>
                        <img src={meal.strMealThumb} alt="" />
                        <div className='p-4'>
                            <h1 className='text-center text-xl font-bold'>{meal.strMeal}</h1>
                            <p className='text-center'>{meal.strInstructions.slice(0, 100)}</p>
                        </div>
                        {/* add two button */}
                        <div className='flex justify-evenly items-center p-4'>
                            <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Details</button>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Order Now</button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Meals;