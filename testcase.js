// @flow

import { Foo, Bar, fooOrBar } from 'testcase-es6';

// Flow refines maybeFoo into a Foo just fine, if
// maybeFoo is exported ES6-style.
if (fooOrBar instanceof Foo) {
  fooOrBar.fooMethod(); // OK
  fooOrBar.barMethod(); // error
}

// However, when using a commonJS export...
var { Spam, Eggs, spamOrEggs } = require('testcase-commonjs');

// Flow still knows that maybeBar is a maybe:
spamOrEggs.spamMethod(); // error

// And it won't let us coerce without refining...
(spamOrEggs: Spam).spamMethod(); // error

// But it won't throw the right error with just
// an if ... instanceof refinement:
if (spamOrEggs instanceof Spam) {
  spamOrEggs.eggsMethod(); // missing error!
  spamOrEggs.spamMethod(); // OK
}

// Instead, we need to refine and then coerce:
if (spamOrEggs instanceof Spam) {
  (spamOrEggs: Spam).eggsMethod(); // error
  (spamOrEggs: Spam).spamMethod(); // OK
}
