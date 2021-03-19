import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUpdateService, removeService } from '../actions/actionCreators';

const ServiceList = () => {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = e.currentTarget.dataset.id;
    const btnAction = e.target.dataset.action;

    if (btnAction === 'update') {
      const item = items.find((service) => service.id === id);
      dispatch(selectUpdateService(item));
    } else if (btnAction === 'remove') {
      dispatch(removeService(id));
    }
  }

  return (
    <ul>
      {items.map((item) =>
        <li key={item.id} data-id={item.id} onClick={handleClick}>
          {item.name} {item.price}
          <button data-action="update" disabled={item.disabled}>u</button>
          <button data-action="remove" disabled={item.disabled}>x</button>
        </li>
      )}
    </ul>
  );
};

export default ServiceList;
