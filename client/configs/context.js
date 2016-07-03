import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default function ({ State }) {
  return {
    Meteor,
    FlowRouter,
    State,
    Tracker,
  };
}
