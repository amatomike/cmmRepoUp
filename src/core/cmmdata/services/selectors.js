import { createSelector } from 'reselect';


export function getCmmData(state) {
  return state.cmmData;
}

export function getCmmDataList(state) {
  return getCmmData(state).list;
}

export function getEmployees(state) {
  return state.empoyees;
}

//=====================================
//  MEMOIZED SELECTORS\\\
//-------------------------------------

export const getCmmDataTypes = createSelector(
  getCmmDataList,
  getCmmDataFilter,
  (cmmdata, filter) => {
    switch (filter) {
      case 'employees':
        return cmmdata.filter(cmmdata => cmmdata.employees);

      case 'jobs':
        return cmmdata.filter(cmmdata => cmmdata.jobs);

      case 'services':
        return cmmdata.filter(cmmdata => cmmdata.services);

      default:
        return cmmdata;
    }
  }
);
