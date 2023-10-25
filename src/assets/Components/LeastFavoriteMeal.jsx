export const LeastFavoriteMeal = ({ updateFormData, value }) => {
    const leastFavoriteMeal = (e) => updateFormData("leastFavoriteMeal", e.target.value);
    return (
      <div className = "meal">
        <div className = "meal-question">
        <label>What is your least favorite meal?</label>
        </div>
        <div>
        <select className = "meal-dropdown" value={value} onChange={leastFavoriteMeal}>
          <option value="">Select a meal</option>
          <option value="hotdogs">Hotdogs</option>
          <option value="meatballs">Meatballs</option>
          <option value="pizza">Pizza</option>
          <option value="salad">Salad</option>
          <option value="friedGrasshoppers">Fried grasshoppers</option>
          <option value="lentilstew">Lentil stew</option>
        </select>
        </div>
      </div>
    );
  };