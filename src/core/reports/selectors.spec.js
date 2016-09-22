import { List } from 'immutable';
import { ReportsState } from './reducer';
import { getVisibleReports } from './selectors';
import { Report } from './report';


describe('reports', () => {
  describe('selectors', () => {
    let reports;

    beforeEach(() => {
      reports = new ReportsState({
        list: new List([
          new Report({completed: false, title: 'report-1'}),
          new Report({completed: true, title: 'report-2'})
        ])
      });
    });


    describe('getVisibleReports()', () => {
      it('should return list of all reports', () => {
        let reportList = getVisibleReports({reports});
        expect(reportList.size).toBe(2);
      });

      it('should return list of active (incomplete) reports', () => {
        reports = reports.set('filter', 'active');
        let reportList = getVisibleReports({reports});

        expect(reportList.size).toBe(1);
        expect(reportList.get(0).title).toBe('report-1');
      });

      it('should return list of completed reports', () => {
        reports = reports.set('filter', 'completed');
        let reportList = getVisibleReports({reports});

        expect(reportList.size).toBe(1);
        expect(reportList.get(0).title).toBe('report-2');
      });
    });
  });
});
