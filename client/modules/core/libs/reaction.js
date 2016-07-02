import { autorun as mobxAutorun } from 'mobx';
import { Tracker } from 'meteor/tracker';

// See https://github.com/mobxjs/mobx/issues/84 for usage

export default (reaction) => {
  let mobxDisposer = null;
  let computation = null;
  let hasBeenStarted = false;

  return {
    start() {
      let isFirstRun = true;

      computation = Tracker.autorun(() => {
        if (mobxDisposer) {
          mobxDisposer();
          isFirstRun = true;
        }

        mobxDisposer = mobxAutorun(() => {
          if (isFirstRun) {
            reaction();
          } else {
            computation.invalidate();
          }

          isFirstRun = false;
        });
      });

      hasBeenStarted = true;
    },
    stop() {
      if (hasBeenStarted) {
        computation.stop();
        mobxDisposer();
      }
    },
  };
};
