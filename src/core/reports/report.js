import { Record } from 'immutable';


export const Report = new Record({
  date: null,
  key: null,
  employee:null,
  jobs:null,
  customers:null,
  services:null,
  totalHours: null,
  approved:false,
  approvedBy:null,
  needsReview:false,
tasks:null
});
//createdBy:null,
const status = new Record({});
const qbStatus = new Record({
  key:null,
  sendToQB:false,
  sentToQB:false,
  confirmedByQB:false
  confirmedOnDate:null,
  sentOnDate:null
});