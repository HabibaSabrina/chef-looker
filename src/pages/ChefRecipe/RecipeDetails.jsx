import React from 'react';

const RecipeDetails = ({recipe}) => {
    const {recipeName, ingredients, cookingMethod, rating} = recipe
    return (
        <div className='border-2 border-orange-600 rounded-xl p-10 bg-white'>
            <h1 className='text-center text-2xl font-bold  text-orange-700 mb-5'>{recipeName}</h1>
            <p className='text-xl font-semibold'>Ingredients</p>
            <hr className='my-5' />
            <div className='leading-7 mb-5'>
            {
                ingredients.map((ingredient,i) => <li key={i}>{ingredient}</li>)
            }
            </div>
            <p className='text-xl font-semibold'>Cooking Method</p>
            <hr className='my-5' />
            <p className='leading-7'>{cookingMethod}</p>
            
        </div>
    );
};

export default RecipeDetails;