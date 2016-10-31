declare module 'testcase-es6' {

  declare class Foo {
    fooMethod(): void;
  }

  declare class Bar {
    barMethod(): void;
  }

  declare var fooOrBar: Foo | Bar

}

declare module 'testcase-commonjs' {

  declare class Spam {
    spamMethod(): void;
  }

  declare class Eggs {
    eggsMethod(): void;
  }

  declare module.exports: {
    Spam: Class<Spam>,
    Eggs: Class<Eggs>,
    spamOrEggs: Spam | Eggs
  }

}