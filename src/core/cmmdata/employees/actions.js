import { Employee } from './employee'
import { employeesList } from './employee-list';
import {
  FILTER_EMPLOYEES,
  LOAD_CMMDATA_EMPLOYEES_SUCCESS,
  UNLOAD_CMMDATA_EMPLOYEES_SUCCESS
} from './action-types';

export function setupEmployeeWith( name, id, key, qbId, uid, defaultBillingRate, user, reports ) {
    return new Employee({
      name:name,
      id:id,
      key:key,
      qbId:qbId,
      uid:uid,
      defaultBillingRate:defaultBillingRate,
      user:user,
      reports:reports
    })
}
export function setupNewEmployee() {
  return new Employee({
    name:null,
    id:null,
    key:null,
    qbId:null,
    uid:null,
    defaultBillingRate:null,
    user:null,
    reports:null
  })
}

export function filterEmployee(filterType, filterValue) {
  return {
    type: FILTER_EMPLOYEES,
    payload: {filterType, filterValue}
  };
}
export function loadEmployees() {
  return (dispatch, getState) => {
    const { auth } = getState();
    employeesList.path = `cmmdata/employees`;
    employeesList.subscribe(dispatch);
  };
}
export function loadEmployeesSuccess(employeeData) {
  return {
    type: LOAD_CMMDATA_EMPLOYEES_SUCCESS,
    payload: employeeData
  };
}

export function unloadEmployees() {
  employeesList.unsubscribe();
  return {
    type: UNLOAD_CMMDATA_EMPLOYEES_SUCCESS
  };
}
