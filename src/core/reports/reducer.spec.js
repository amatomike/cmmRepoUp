import { List } from 'immutable';
import { SIGN_OUT_SUCCESS } from 'src/core/auth';

import {
  CREATE_REPORT_SUCCESS,
  DELETE_REPORT_SUCCESS,
  FILTER_REPORTS,
  LOAD_REPORTS_SUCCESS,
  UPDATE_REPORT_SUCCESS
} from './action-types';

import { Report } from './report';
import { reportsReducer, ReportsState } from './reducer';


describe('reports', () => {
  describe('reportsReducer', () => {
    let report1;
    let report2;

    beforeEach(() => {
      report1 = new Report({completed: false, key: '0', title: 'report 1'});
      report2 = new Report({completed: false, key: '1', title: 'report 2'});
    });


    describe('CREATE_REPORT_SUCCESS', () => {
      it('should prepend new report to list', () => {
        let state = new ReportsState({list: new List([report1])});

        let nextState = reportsReducer(state, {
          type: CREATE_REPORT_SUCCESS,
          payload: report2
        });

        expect(nextState.list.get(0)).toBe(report2);
        expect(nextState.list.get(1)).toBe(report1);
      });
    });


    describe('DELETE_REPORT_SUCCESS', () => {
      it('should remove report from list', () => {
        let state = new ReportsState({list: new List([report1, report2])});

        let nextState = reportsReducer(state, {
          type: DELETE_REPORT_SUCCESS,
          payload: report2
        });

        expect(nextState.deleted).toBe(report2);
        expect(nextState.list.size).toBe(1);
        expect(nextState.list.get(0)).toBe(report1);
        expect(nextState.previous).toBe(state.list);
      });
    });


    describe('FILTER_REPORTS', () => {
      it('should set filter with provided value', () => {
        let state = new ReportsState();

        let nextState = reportsReducer(state, {
          type: FILTER_REPORTS,
          payload: {
            filterType: 'completed'
          }
        });

        expect(nextState.filter).toBe('completed');
      });
    });


    describe('LOAD_REPORTS_SUCCESS', () => {
      it('should set report list', () => {
        let state = new ReportsState();

        let nextState = reportsReducer(state, {
          type: LOAD_REPORTS_SUCCESS,
          payload: [report1, report2]
        });

        expect(nextState.list.size).toBe(2);
      });

      it('should order reports newest first', () => {
        let state = new ReportsState();

        let nextState = reportsReducer(state, {
          type: LOAD_REPORTS_SUCCESS,
          payload: [report1, report2]
        });

        expect(nextState.list.get(0)).toBe(report2);
        expect(nextState.list.get(1)).toBe(report1);
      });
    });


    describe('UPDATE_REPORT_SUCCESS', () => {
      it('should update report', () => {
        let state = new ReportsState({list: new List([report1, report2])});
        let changedReport = report2.set('title', 'changed');

        let nextState = reportsReducer(state, {
          type: UPDATE_REPORT_SUCCESS,
          payload: changedReport
        });

        expect(nextState.list.get(0)).toBe(report1);
        expect(nextState.list.get(1)).toBe(changedReport);
      });
    });


    describe('SIGN_OUT_SUCCESS', () => {
      it('should reset state', () => {
        let state = new ReportsState({
          delete: report1,
          list: new List([report1, report2]),
          previous: new List()
        });

        let nextState = reportsReducer(state, {
          type: SIGN_OUT_SUCCESS
        });

        expect(nextState.deleted).toBe(null);
        expect(nextState.list.size).toBe(0);
        expect(nextState.previous).toBe(null);
      });
    });
  });
});
