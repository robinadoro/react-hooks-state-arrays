import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleLiClick(id){
    const newFoodArray=foods.filter((food)=> food.id !==id);
    [1,2,3].filter((number)=>number !==3)
    setFoods(newFoodArray);
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray=[...foods, newFood];
    setFoods(newFoodArray);
    
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
