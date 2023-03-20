// Use for delaying dispatch calls in a thunk:
// https://lifesaver.codes/answer/store-dispatch-then-is-not-a-function-1251
//
export const delay = ms =>
  new Promise((resolve, failure) => {
    if (resolve) {
      setTimeout(resolve, ms);
    } else {
      failure(new Error('No params passed to delay'));
    }
  });

export const tmp = '';
