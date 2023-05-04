import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import {  HandThumbUpIcon } from '@heroicons/react/24/solid';


const ChefRecipe = () => {
    const chefData = useLoaderData();
    const { id, chefPicture, chefName, experience, likes, bio, recipesNum} = chefData
    const chefId = useParams()
    const [recipes, setRecipes] = useState([])
    
    useEffect(() =>{
        fetch('https://chef-looker-server-habibasabrina.vercel.app/recipe')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
   
    
    const chefRecipes = recipes.filter(r => r.chef_id == chefId.id)
    return (
        <div>
            <div className='flex items-center gap-10 mx-32 my-10'>
                <img className='w-96' src={chefPicture} alt="" />
                <div>
                    <p className='text-3xl my-5 font-semibold'>{chefName}</p>
                    <p className='text-2xl font-semibold my-3'>Bio</p>
                    <hr />
                    <p className='my-3'>{bio}</p>
                    <p className='text-2xl my-3 font-semibold'>Years of Experience</p>
                    <hr />
                    <p className='my-3'>{experience} years of experience</p>
                    <hr />
                    <div className='flex my-3 justify-between'>
                    <p><b>Number of Recipes:</b> {recipesNum}</p>
                        <p className='flex'><HandThumbUpIcon className="h-6 w-7" /> {likes}</p>
                        
                    </div>

                </div>
            </div>
            <div className='bg-orange-300 px-32 py-20 my-28'>
                <div className='flex items-center justify-center gap-2 mb-10'>
                <p className='text-4xl font-bold '>{chefName}'s Recipes</p>
                <img className='w-24' src="/recipe.png" alt="" />
                </div>
            <div className=' grid grid-cols-2 gap-10'>
                
                {
                    
                    chefRecipes.map(recipe => <RecipeDetails key={recipe.rid} recipe={recipe}></RecipeDetails>)
                }
            </div>
            </div>
        </div>
    );
};

export default ChefRecipe;