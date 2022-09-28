import React from 'react';

const Modal = ({ modal }) => {
    console.log(modal);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={modal.strMealThumb
                    } alt="" className='rounded-4' />
                    <h3 className="text-lg font-bold">{modal.strMeal}</h3>
                    <p className="py-4">{modal.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;