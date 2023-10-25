export const LivingSituation = ({ value, updateFormData }) => {
  const livingSituation = (e) => {
    updateFormData('livingSituation', e.target.value);
  };

  return (
    <div className="living-situation">
        <div className="living-question">
      <label>Where do you live?</label>
        </div>
        <div className="living-radio">
      <div>
        <label>
          <input
            type="radio"
            value="apartment"
            checked={value === 'apartment'}
            onChange={livingSituation}
          />
          <span></span>
          Apartment
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="house"
            checked={value === 'house'}
            onChange={livingSituation}
          />
          <span></span>
          House
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="hut"
            checked={value === 'hut'}
            onChange={livingSituation}
          />
          <span></span>
          Hut
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="castle"
            checked={value === 'castle'}
            onChange={livingSituation}
          />
          <span></span>
          Castle
        </label>
      </div>
      </div>
    </div>
  );
};

export default LivingSituation;
