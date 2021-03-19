import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  REMOVE_SERVICE,
  SELECT_UPDATE_SERVICE,
  CHANGE_SERVICE_FIELD,
  RESET_SERVICE_FORM,
} from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function updateService(id, name, price) {
  return { type: UPDATE_SERVICE, payload: { id, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function selectUpdateService(service) {
  return { type: SELECT_UPDATE_SERVICE, payload: { ...service } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function resetServiceForm() {
  return { type: RESET_SERVICE_FORM };
}