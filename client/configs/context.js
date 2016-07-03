import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default function ({ Store }) {
  return {
    Meteor,
    FlowRouter,
    Store,
    Tracker,
  };
}
