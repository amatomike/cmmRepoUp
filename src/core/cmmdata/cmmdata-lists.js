import { FirebaseList } from 'src/core/firebase';
import * as cmmDataActions from './actions';
import {CMMData, employees, jobs, services } from './cmmdata-types';


export const cmmDataList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataSuccess()
}, CMMData);
export const employeesList  = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataEmployeesSuccess()
}, employees);
export const jobsList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataJobsSuccess()
}, jobs);
export const servicesList = new FirebaseList({
  onLoad: cmmDataActions.loadCmmdataServicesSuccess()
}, services);

