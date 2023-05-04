import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import toast, { Toaster } from 'react-hot-toast';
const RecipeDetails = ({ recipe, setRecipeId }) => {
    const [fav, setFav] = useState(false)
    const { rid, recipeName, ingredients, cookingMethod, rating } = recipe
    const handleFav = (favcon) =>{
        toast.success("This recipe is now your favorite")
        setFav(favcon)
    }
    return (
        <div className='border-2 border-orange-600 rounded-xl p-10 bg-white'>
            
            <h1 className='text-center text-2xl font-bold  text-orange-700 mb-5'>{recipeName}</h1>
            <div className='my-5 text-right'>
            <button disabled={fav} className='my-3 disabled:opacity-50' onClick={() => handleFav(true)}><FaHeart className='text-red-600 w-6 h-6'></FaHeart></button>
                <div className='flex items-center justify-end'>
                <span className='mr-2'> {rating}</span>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(rating || 0)} readOnly />
                    
                </div>
                
                
            </div>
            <p className='text-xl font-semibold'>Ingredients</p>
            <hr className='my-5' />
            <div className='leading-7 mb-5'>
                {
                    ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                }
            </div>
            <p className='text-xl font-semibold'>Cooking Method</p>
            <hr className='my-5' />
            <p className='leading-7'>{cookingMethod}</p>
            

        </div>
    );
};

export default RecipeDetails;