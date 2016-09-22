import { List, Record } from 'immutable';

import {
  SIGN_OUT_SUCCESS

} from 'src/core/auth';

import {
  CREATE_REPORT_SUCCESS,
  DELETE_REPORT_SUCCESS,
  FILTER_REPORTS,
  LOAD_REPORTS_SUCCESS,
  UPDATE_REPORT_SUCCESS
} from './action-types';


export const ReportsState = new Record({
  deleted: null,
  filter: '',
  list: new List(),
  previous: null
});


export function reportsReducer(state = new ReportsState(), {payload, type}) {
  switch (type) {
    case CREATE_REPORT_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.deleted && state.deleted.key === payload.key ?
              state.previous :
              state.list.unshift(payload)
      });

    case DELETE_REPORT_SUCCESS:
      return state.merge({
        deleted: payload,
        previous: state.list,
        list: state.list.filter(report => report.key !== payload.key)
      });

    case FILTER_REPORTS:
      return state.set('filter', payload.filterType || '');

    case LOAD_REPORTS_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    case UPDATE_REPORT_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.list.map(report => {
          return report.key === payload.key ? payload : report;
        })
      });

    case SIGN_OUT_SUCCESS:
      return new ReportsState();

    default:
      return state;
  }
}
