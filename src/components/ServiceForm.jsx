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
    <form
      className="service-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="service-form__field">
        <label>Service name</label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div className="service-form__field">
        <label>Price</label>
        <input
          className="form-input"
          type="text"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </div>
      <button className="form-btn" type="submit">Submit</button>
      { item.id && <button className="form-btn" type="reset">Cancel</button>}
    </form>
  );
};

export default ServiceForm;
