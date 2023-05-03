import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const chefData = useLoaderData();
    const { id, chefPicture, chefName, experience, likes, bio, recipesNum} = chefData
    console.log(chefData)
    const chefId = useParams()
    const [recipe, setRecipes] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/recipe')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    const see = recipe.filter(r => r.chef_id == chefId.id)
    console.log(see)
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
                        <p><b>Likes:</b> {likes}</p>
                        <p><b>Number of Recipes:</b> {recipesNum}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;