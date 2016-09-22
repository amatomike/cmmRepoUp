import { createSelector } from 'reselect';


export function getEmployees(state) {
  return state.employees;
}

export function getEmployeeList(state) {
  return getEmployees(state).list;
}

export function getEmployeeFilter(state) {
  return getEmployees(state).filter;
}
export function getEmployeeFilterValue(state) {
  return getEmployees(state).filterValue;
}

//=====================================
//  MEMOIZED SELECTORS\\\
//-------------------------------------

export const getEmployeesFiltered = createSelector(
  getEmployeeList,
  getEmployeeFilter,
  (employees, filter) => {
    switch (filter) {
      case 'billingRate':
        return employees.filter(employees => employees.defaultBillingRate);
      case 'jobs':
        return cmmdata.filter(cmmdata => cmmdata.jobs);
      case 'services':
        return cmmdata.filter(cmmdata => cmmdata.services);

      default:
        return cmmdata;
    }
  }
);
