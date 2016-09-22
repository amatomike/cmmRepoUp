import { List, Record } from 'immutable';

import {
  SIGN_OUT_SUCCESS
} from './../../auth';
import {
    LOAD_CMMDATA_EMPLOYEES_SUCCESS,
    FILTER_EMPLOYEES,
    UNLOAD_CMMDATA_EMPLOYEES_SUCCESS
} from './action-types';
// export function escapeRegexCharacters(str) {
//   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}
// export function theregex(thedata){
//   function escapeChars(str) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}
//  const escapedValue = escapeChars(this.state.searchValue.trim());
//   const regex = new RegExp('.*' + escapedValue, 'i');
//   return thedata.filter = > regex.test(thedata.name)
// }

  export const EmployeeState = new Record({
  list: new List(),
  filter: '',
  filterValue: ''
});


export function employeeReducer(state = new EmployeeState(), {payload, type}) {
  switch (type) {
    case LOAD_CMMDATA_EMPLOYEES_SUCCESS:
      return state.set('list', new List(payload.reverse()));
    case FILTER_EMPLOYEES:
      state.set('filter', payload.filterType || '');
      payload.filterValue?state.set('filterValue', payload.filterValue || ''):'';
      return state;
    case SIGN_OUT_SUCCESS:
      return new EmployeeState();
    default:
      return state;
  }
}
