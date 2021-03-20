import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUpdateService, removeService } from '../actions/actionCreators';
import { ReactComponent as UpdateIcon } from '../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/close.svg';

const ServiceList = () => {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    const item = items.find((service) => service.id === id);
    dispatch(selectUpdateService(item));
  }

  const handleDelete = (id) => {
    dispatch(removeService(id));
  }

  return (
    <ul className="service-list">
      {items.map((item) =>
        <li key={item.id} className="service-item"        >
          <span className="service-item__name">{item.name}</span>
          <span className="service-item__price">{item.price}</span>
          <button className="icon-btn" disabled={item.disabled} onClick={() => handleUpdate(item.id)}>
            <UpdateIcon />
          </button>
          <button className="icon-btn" disabled={item.disabled} onClick={() => handleDelete(item.id)} >
            <DeleteIcon />
          </button>
        </li>
      )}
    </ul>
  );
};

export default ServiceList;
