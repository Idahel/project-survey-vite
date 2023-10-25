export const FavoriteAnimal = ({ updateFormData, value }) => {
    const favoriteAnimal = (e) => updateFormData("favoriteAnimal", e.target.value);
    return (
      <div>
        <div className="animal-question">
        <label>Please choose your favorite animal:</label>
        </div>
        <div>
        <select className="animal-dropdown" value={value} onChange={favoriteAnimal}>
          <option value="">Select an animal</option>
          <option value="dog">Dog</option>
          <option value="seal">Seal</option>
          <option value="monkey">Monkey</option>
          <option value="panda">Panda</option>
          <option value="frog">Frog</option>
          <option value="sloth">Sloth</option>
        </select>
        </div>
      </div>
    );
  };