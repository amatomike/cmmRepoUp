import { createSelector } from 'reselect';


export function getReports(state) {
  return state.reports;
}

export function getReportList(state) {
  return getReports(state).list;
}

export function getReportFilter(state) {
  return getReports(state).filter;
}

export function getDeletedReport(state) {
  return getReports(state).deleted;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleReports = createSelector(
  getReportList,
  getReportFilter,
  (reports, filter) => {
    switch (filter) {
      case 'active':
        return reports.filter(report => !report.completed);

      case 'completed':
        return reports.filter(report => report.completed);

      case 'approved':
        return reports.filter(report => report.completed);

      default:
        return reports;
    }
  }
);
