import { FirebaseList } from 'src/core/firebase';
import * as employeeActions from './actions';
import { employee } from './employee';

export const employeesList  = new FirebaseList({
  onLoad: employeeActions.loadCmmdataEmployeesSuccess()
}, employee);

