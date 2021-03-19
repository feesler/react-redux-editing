import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addService, updateService, changeServiceField, resetServiceForm } from '../actions/actionCreators';

const ServiceForm = () => {
  const item = useSelector(state => state.serviceForm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  }

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetServiceForm());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.name.length || !Number(item.price)) {
      return;
    }

    if (item.id) {
      dispatch(updateService(item.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input type="text" name="name" onChange={handleChange} value={item.name} />
      <input type="text" name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Submit</button>
      { item.id && <button type="reset">Cancel</button>}
    </form>
  );
};

export default ServiceForm;
