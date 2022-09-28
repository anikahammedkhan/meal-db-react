import React from 'react';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = React.useState([]);
    React.useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    const [modal, setModal] = React.useState({});
    const loadModal = (idMeal) => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setModal(data.meals[0]))
    }
    const [cart, setCart] = React.useState([]);
    const addToCart = (idMeal) => {
        const newCart = [...cart, idMeal];
        setCart(newCart);
    }
    return (
        <div>
            <h1 className='text-center text-xl mt-7 font-bold'>Available Meals</h1>
            <div className='meals-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {
                        meals.map(meal =>
                            <div div className='shadow-lg rounded-lg overflow-hidden'>
                                <img src={meal.strMealThumb} alt="" />
                                <div className='p-4'>
                                    <h1 className='text-center text-xl font-bold'>{meal.strMeal}</h1>
                                    <p className='text-center'>{meal.strInstructions.slice(0, 100)}</p>
                                </div>
                                <div className='flex justify-evenly items-center p-4'>
                                    <label htmlFor="my-modal-3" className="btn bg-green-500 text-white px-4 rounded-lg border-none" onClick={() => loadModal(meal.idMeal)}>Details</label>
                                    <button className='bg-red-500 text-white px-4 py-2 rounded-lg' onClick={() => addToCart(meal)}>Order Now</button>
                                </div>
                            </div>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <Modal modal={modal}></Modal>
        </div >
    );
};

export default Meals;