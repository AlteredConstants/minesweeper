declare module "lodash/fp" {
  type mixed = {};
  type Args = Array<any>;
  interface Dictionary<T> {
    [key: string]: T;
  }
  // Common interface between Arrays and jQuery objects.
  interface List<T> {
    [index: number]: T;
    length: number;
  }
  type Collection<T> = List<T> | Dictionary<T>;
  type ObjPath = string | Array<string>;

  type MatchesIterateeShorthand = Dictionary<mixed>;
  type MatchesPropertyIterateeShorthand = [string, mixed];

  type F0<R> = () => R;
  type F1<A, R> = (a: A) => R;
  type F2<A, B, R> = (a: A, b: B) => R;
  type F3<A, B, C, R> = (a: A, b: B, c: C) => R;
  type F4<A, B, C, D, R> = (a: A, b: B, c: C, d: D) => R;
  type F5<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E) => R;
  type F6<A, B, C, D, E, F, R> = (a: A, b: B, c: C, d: D, e: E, f: F) => R;
  type FX<R> = (...args: Args) => R;

  function flow<A, B, C, D, E, F, R>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fr: (f: F) => R,
  ): (a: A) => R;
  function flow<A, B, C, D, E, R>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    er: (e: E) => R,
  ): (a: A) => R;
  function flow<A, B, C, D, R>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    dr: (d: D) => R,
  ): (a: A) => R;
  function flow<A, B, C, R>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cr: (c: C) => R,
  ): (a: A) => R;
  function flow<A, B, R>(ab: (a: A) => B, br: (b: B) => R): (a: A) => R;
  function flow<A, R>(ar: (a: A) => R): (a: A) => R;
  function flow<A>(a: (a: A) => any, ...args: Args): (a: A) => mixed;

  type FillCurried2 = {
    <T, U>(value: T, array: List<U>): Array<T | U>;
    <T>(value: T): <U>(array: List<U>) => Array<T | U>;
  };
  function fill<T, U>(
    start: number,
    end: number,
    value: T,
    array: List<U>,
  ): Array<T | U>;
  function fill<T>(
    start: number,
    end: number,
    value: T,
  ): <U>(array: List<U>) => Array<T | U>;
  function fill<T, U>(start: number, end: number): FillCurried2;
  function fill(
    start: number,
  ): {
    <T, U>(end: number, value: T, array: List<U>): Array<T | U>;
    <T>(end: number, value: T): <U>(array: List<U>) => Array<T | U>;
    (end: number): FillCurried2;
  };

  function isEqual<T>(value1: T, value2: T): boolean;

  type MapWithPropertyIterateeShorthand = {
    <T, K extends keyof T>(
      propertyIteratee: K,
      collection: Collection<T>,
    ): Array<T[K]>;
    <K extends string>(propertyIteratee: K): <R>(
      collection: Collection<Record<K, R>>,
    ) => Array<R>;
  };

  var map: {
    <T, R>(iteratee: (item: T) => R, collection: Collection<T>): Array<R>;
    <T, R>(iteratee: (item: T) => R): (collection: Collection<T>) => Array<R>;
    convert<T extends { cap: false }>(options: T): typeof uncappedMap;
  } & MapWithPropertyIterateeShorthand;

  var uncappedMap: {
    <T, U extends List<T>, R>(
      iteratee: (item: T, index: number, array: U) => R,
      array: U,
    ): Array<R>;
    <T, U extends List<T>, R>(
      iteratee: (item: T, index: number, array: U) => R,
    ): (array: U) => Array<R>;
    <T, U extends Dictionary<T>, R>(
      iteratee: (item: T, key: string, object: U) => R,
      object: U,
    ): Array<R>;
    <T, U extends Dictionary<T>, R>(
      iteratee: (item: T, key: string, object: U) => R,
    ): (object: U) => Array<R>;
  } & MapWithPropertyIterateeShorthand;

  function shuffle<T>(collection: Collection<T>): Array<T>;

  // type MatchesIterateeShorthand = Dictionary<mixed>;
  // type MatchesPropertyIterateeShorthand = [string, mixed];
  type Predicate<T> = (
    item: T,
  ) => any | MatchesIterateeShorthand | MatchesPropertyIterateeShorthand;

  var filter: {
    <T>(predicate: (item: T) => any, collection: Collection<T>): Array<T>;
    <T>(predicate: (item: T) => any): (collection: Collection<T>) => Array<T>;

    <T, U extends Dictionary<T>, K extends keyof U>(
      matchesIteratee: [K, U[K]] | Partial<U>,
      collection: Collection<U>,
    ): Array<U>;
    <T, U extends Dictionary<T>, K extends keyof U>(
      matchesIteratee: [K, U[K]] | Partial<U>,
    ): (collection: Collection<U>) => Array<U>;
  };
  // <T, U extends Dictionary<T>>(matchesIteratee: Partial<U>, collection: Collection<U>): Array<U>,
  // (matchesIteratee: MatchesIterateeShorthand): <T, U extends Dictionary<T>>(collection: Collection<U>) => Array<U>,

  var sumBy: {
    <T>(iteratee: (item: T) => number, array: Array<T>): number;
    <T>(iteratee: (item: T) => number): (array: Array<T>) => number;
  };

  var set: {
    <T extends object>(path: ObjPath, value: any, object: T): T;
    <T extends object>(path: ObjPath, value: any): (object: T) => T;
    <T extends object>(path: ObjPath): {
      (value: any, object: T): T;
      (value: any): (object: T) => T;
    };
  };

  var compose: {
    <A, B, C, D, E, F, R>(
      fr: (f: F) => R,
      ef: (e: E) => F,
      de: (d: D) => E,
      cd: (c: C) => D,
      bc: (b: B) => C,
      ab: (a: A) => B,
    ): (a: A) => R;
    <A, B, C, D, E, R>(
      er: (e: E) => R,
      de: (d: D) => E,
      cd: (c: C) => D,
      bc: (b: B) => C,
      ab: (a: A) => B,
    ): (a: A) => R;
    <A, B, C, D, R>(
      dr: (d: D) => R,
      cd: (c: C) => D,
      bc: (b: B) => C,
      ab: (a: A) => B,
    ): (a: A) => R;
    <A, B, C, R>(cr: (c: C) => R, bc: (b: B) => C, ab: (a: A) => B): (
      a: A,
    ) => R;
    <A, B, R>(br: (b: B) => R, ab: (a: A) => B): (a: A) => R;
    <A, R>(ar: (a: A) => R): (a: A) => R;
    (...args: Args): (a: mixed) => mixed;
  };

  function isFunction(value?: any): value is Function;
}
