import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender, setAge, setHeight, setWeight, setActivity, setReset, setResult } from '../features/caloriesSlice';


const CaloriesCalculator = () => {

  const dispatch = useDispatch();

  const gender = useSelector((state) => state.calories.gender);
  const age = useSelector((state) => state.calories.age);
  const height = useSelector((state) => state.calories.height);
  const weight = useSelector((state) => state.calories.weight);
  const active = useSelector((state) => state.calories.activity);
  const result = useSelector((state) => state.calories.result);

  const handleSubmit = (e) => {
    formula();
    e.preventDefault();
  }

  const formula = () => {
    if (gender === 'male') {
      const kcal = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * active;
      dispatch(setResult(kcal));
    } else if (gender === 'female') {
      const kcal = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * active;
      dispatch(setResult(kcal));
    } else {
      console.log('no result');
    }
  }

  const disabledStatus = age === '' || height === '' || weight === '' ? true : false;

  return (
    <>
      <div className='caloriesCalculator'>
        <h1 className='calories-header'>Calories Calculator</h1>
        <form onSubmit={handleSubmit} className='calories-form'>

          <fieldset className='form-item genders'>
            <legend className='legend-header'>Gender</legend>
            <ul className='gender-list'>

              <li className='gender-item'>
                <input
                  className='gender'
                  id='male'
                  name='gender'
                  type='radio'
                  value='male'
                  onChange={(e) => dispatch(setGender('male'))}
                  checked={gender === 'male' ? true : false}
                />
                <label className='gender-label' htmlFor='male'>Male</label>
              </li>

              <li className='gender-item'>
                <input
                  className='gender'
                  id='female'
                  name='gender'
                  type='radio'
                  value='female'
                  onChange={(e) => dispatch(setGender('female'))}
                  checked={gender === 'female' ? true : false}
                />
                <label className='gender-label' htmlFor='female'>Female</label>
              </li>

            </ul>
          </fieldset>

          <fieldset className='form-item parameters'>
            <legend className='hidden'>Physical Parameters</legend>

            <div className='param age'>
              <label htmlFor='age'>Age</label>
              <input
                type="number"
                min='1'
                id='age'
                placeholder='0'
                value={age}
                onChange={(e) => dispatch(setAge(e.target.value))}
                required
              />
            </div>

            <div className='param height'>
              <label htmlFor='height'>Height</label>
              <input
                type="number"
                min='1'
                id='height'
                placeholder='0'
                value={height}
                onChange={(e) => dispatch(setHeight(e.target.value))}
                required
              />
            </div>

            <div className='param weight'>
              <label htmlFor='weight'>Weight</label>
              <input
                type="number"
                min='1'
                id='weight'
                placeholder='0'
                value={weight}
                onChange={(e) => dispatch(setWeight(e.target.value))}
                required
              />
            </div>
          </fieldset>

          <fieldset className='form-item activity'>
            <legend className='legend-header'>Physical activity</legend>
            <ul className='activity-list'>

              <li className='activity-item'>
                <input
                  className='active-radio'
                  type='radio'
                  name='activity'
                  id='minimal'
                  onChange={() => dispatch(setActivity(1.2))}
                  checked={active === 1.2 ? true : false}
                />
                <label htmlFor="minimal">Minimal</label>
                <p className='activity-description'>Sedentary work and no physical activity</p>
              </li>

              <li className='activity-item'>
                <input
                  className='active-radio'
                  type='radio'
                  name='activity'
                  id='low'
                  onChange={() => dispatch(setActivity(1.375))}
                  checked={active === 1.375 ? true : false}
                />
                <label htmlFor="low">Low</label>
                <p className='activity-description'>Infrequent irregular training, activity at home</p>
              </li>

              <li className='activity-item'>
                <input
                  className='active-radio'
                  type='radio'
                  name='activity'
                  id='medium'
                  onChange={() => dispatch(setActivity(1.55))}
                  checked={active === 1.55 ? true : false}
                />
                <label htmlFor="medium">Medium</label>
                <p className='activity-description'>Training 3-5 times a week</p>
              </li>

              <li className='activity-item'>
                <input
                  className='active-radio'
                  type='radio'
                  name='activity'
                  id='high'
                  onChange={() => dispatch(setActivity(1.725))}
                  checked={active === 1.725 ? true : false}
                />
                <label htmlFor="high">High</label>
                <p className='activity-description'>Training 6-7 times a week</p>
              </li>

              <li className='activity-item'>
                <input
                  className='active-radio'
                  type='radio'
                  name='activity'
                  id='veryhigh'
                  onChange={() => dispatch(setActivity(1.9))}
                  checked={active === 1.9 ? true : false}
                />
                <label htmlFor="veryhigh">Very high</label>
                <p className='activity-description'>More than 6 training per week and physical work</p>
              </li>

            </ul>
          </fieldset>

          <fieldset className='form-item buttons'>

            <button className='btn btn-submit' type='submit' disabled={disabledStatus}>Calculate</button>

            <button className='btn btn-reset' type='button' disabled={disabledStatus} onClick={() => dispatch(setReset())}>Reset</button>
          </fieldset>
        </form>
      </div>

      {result !== null && 
        <div className='resultCalories'>
          <h1 className='calories-header'>Norm Calory</h1>
          <ul className='result-list'>
            <li className='result-item'>
              <p className='result-value'>{Math.round(result * 0.85)} kcal</p>
              <p className='result-description'>Weight Loss</p>
            </li>
            <li className='result-item'>
              <p className='result-value'>{Math.round(result)} kcal</p>
              <p className='result-description'>Weight Maintenance</p>
            </li>
            <li className='result-item'>
              <p className='result-value'>{Math.round(result * 1.15)} kcal</p>
              <p className='result-description'>Weight Gain</p>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

export default CaloriesCalculator;