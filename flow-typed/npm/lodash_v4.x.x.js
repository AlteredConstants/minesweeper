// flow-typed signature: a7d253bb465906a2d746884b23c74257
// flow-typed version: df11ef698b/lodash_v4.x.x/flow_>=v0.38.x

declare module 'lodash' {
  declare type TemplateSettings = {
    escape?: RegExp,
    evaluate?: RegExp,
    imports?: Object,
    interpolate?: RegExp,
    variable?: string,
  };

  declare type TruncateOptions = {
    length?: number,
    omission?: string,
    separator?: RegExp|string,
  };

  declare type DebounceOptions = {
    leading?: bool,
    maxWait?: number,
    trailing?: bool,
  };

  declare type ThrottleOptions = {
    leading?: bool,
    trailing?: bool,
  };

  declare type NestedArray<T> = Array<Array<T>>;

  declare type matchesIterateeShorthand = Object;
  declare type matchesPropertyIterateeShorthand = [string, any];
  declare type propertyIterateeShorthand = string;

  declare type OPredicate<A, O> =
    | ((value: A, key: string, object: O) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, O, R> = Object|string|((value: V, key: string, object: O) => R);
  declare type OIteratee<O> = OIterateeWithResult<any, O, any>;
  declare type OFlatMapIteratee<T, U> = OIterateeWithResult<any, T, Array<U>>;

  declare type Predicate<T> =
    | ((value: T, index: number, array: Array<T>) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type _ValueOnlyIteratee<T> = (value: T) => mixed;
  declare type ValueOnlyIteratee<T> = _ValueOnlyIteratee<T>|string;
  declare type _Iteratee<T> = (item: T, index: number, array: ?Array<T>) => mixed;
  declare type Iteratee<T> = _Iteratee<T>|Object|string;
  declare type FlatMapIteratee<T, U> = ((item: T, index: number, array: ?Array<T>) => Array<U>)|Object|string;
  declare type Comparator<T> = (item: T, item2: T) => bool;

  declare type MapIterator<T,U> =
    | ((item: T, index: number, array: Array<T>) => U)
    | propertyIterateeShorthand;

  declare type OMapIterator<T,O,U> =
    | ((item: T, key: string, object: O) => U)
    | propertyIterateeShorthand;

  declare class Lodash {
    // Array
    chunk<T>(array: ?Array<T>, size?: number): Array<Array<T>>;
    compact<T,N:?T>(array: Array<N>): Array<T>;
    concat<T>(base: Array<T>, ...elements: Array<any>): Array<T|any>;
    difference<T>(array: ?Array<T>, values?: Array<T>): Array<T>;
    differenceBy<T>(array: ?Array<T>, values: Array<T>, iteratee: ValueOnlyIteratee<T>): T[];
    differenceWith<T>(array: T[], values: T[], comparator?: Comparator<T>): T[];
    drop<T>(array: ?Array<T>, n?: number): Array<T>;
    dropRight<T>(array: ?Array<T>, n?: number): Array<T>;
    dropRightWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    dropWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    fill<T, U>(array: ?Array<T>, value: U, start?: number, end?: number): Array<T|U>;
    findIndex<T>(array: ?Array<T>, predicate?: Predicate<T>): number;
    findLastIndex<T>(array: ?Array<T>, predicate?: Predicate<T>): number;
    // alias of _.head
    first<T>(array: ?Array<T>): T;
    flatten<T,X>(array: Array<Array<T>|X>): Array<T|X>;
    flattenDeep<T>(array: any[]): Array<T>;
    flattenDepth(array: any[], depth?: number): any[];
    fromPairs<T>(pairs: Array<T>): Object;
    head<T>(array: ?Array<T>): T;
    indexOf<T>(array: ?Array<T>, value: T, fromIndex?: number): number;
    initial<T>(array: ?Array<T>): Array<T>;
    intersection<T>(...arrays: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    intersectionBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    intersectionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionWith<T>(a1: Array<T>, comparator: Comparator<T>): Array<T>;
    intersectionWith<T>(a1: Array<T>, a2: Array<T>, comparator: Comparator<T>): Array<T>;
    intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator: Comparator<T>): Array<T>;
    intersectionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator: Comparator<T>): Array<T>;
    join<T>(array: ?Array<T>, separator?: string): string;
    last<T>(array: ?Array<T>): T;
    lastIndexOf<T>(array: ?Array<T>, value: T, fromIndex?: number): number;
    nth<T>(array: T[], n?: number): T;
    pull<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>;
    pullAll<T>(array: ?Array<T>, values: Array<T>): Array<T>;
    pullAllBy<T>(array: ?Array<T>, values: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    pullAllWith<T>(array?: T[], values: T[], comparator?: Function): T[];
    pullAt<T>(array: ?Array<T>, ...indexed?: Array<number>): Array<T>;
    pullAt<T>(array: ?Array<T>, indexed?: Array<number>): Array<T>;
    remove<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    reverse<T>(array: ?Array<T>): Array<T>;
    slice<T>(array: ?Array<T>, start?: number, end?: number): Array<T>;
    sortedIndex<T>(array: ?Array<T>, value: T): number;
    sortedIndexBy<T>(array: ?Array<T>, value: T, iteratee?: ValueOnlyIteratee<T>): number;
    sortedIndexOf<T>(array: ?Array<T>, value: T): number;
    sortedLastIndex<T>(array: ?Array<T>, value: T): number;
    sortedLastIndexBy<T>(array: ?Array<T>, value: T, iteratee?: ValueOnlyIteratee<T>): number;
    sortedLastIndexOf<T>(array: ?Array<T>, value: T): number;
    sortedUniq<T>(array: ?Array<T>): Array<T>;
    sortedUniqBy<T>(array: ?Array<T>, iteratee?: (value: T) => mixed): Array<T>;
    tail<T>(array: ?Array<T>): Array<T>;
    take<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRight<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRightWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    takeWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    union<T>(...arrays?: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    unionBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    unionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    unionBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
    unionWith<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>;
    unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>;
    unionWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>;
    uniq<T>(array: ?Array<T>): Array<T>;
    uniqBy<T>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    uniqWith<T>(array: ?Array<T>, comparator?: Comparator<T>): Array<T>;
    unzip<T>(array: ?Array<T>): Array<T>;
    unzipWith<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    without<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>;
    xor<T>(...array: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    xorBy<T>(a1: Array<T>, a2: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    xorBy<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
    xorWith<T>(a1: Array<T>, a2: Array<T>, comparator?: Comparator<T>): Array<T>;
    xorWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, comparator?: Comparator<T>): Array<T>;
    xorWith<T>(a1: Array<T>, a2: Array<T>, a3: Array<T>, a4: Array<T>, comparator?: Comparator<T>): Array<T>;
    zip<A, B>(a1: A[], a2: B[]): Array<[A, B]>;
    zip<A, B, C>(a1: A[], a2: B[], a3: C[]): Array<[A, B, C]>;
    zip<A, B, C, D>(a1: A[], a2: B[], a3: C[], a4: D[]): Array<[A, B, C, D]>;
    zip<A, B, C, D, E>(a1: A[], a2: B[], a3: C[], a4: D[], a5: E[]): Array<[A, B, C, D, E]>;

    zipObject(props?: Array<any>, values?: Array<any>): Object;
    zipObjectDeep(props?: any[], values?: any): Object;
    //Workaround until (...parameter: T, parameter2: U) works
    zipWith<T>(a1: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    zipWith<T>(a1: NestedArray<T>, a2: NestedArray<T>, a3: NestedArray<T>, a4: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;

    // Collection
    countBy<T>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): Object;
    countBy<T: Object>(object: T, iteratee?: ValueOnlyIteratee<T>): Object;
    // alias of _.forEach
    each<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    each<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    // alias of _.forEachRight
    eachRight<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    eachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    every<T>(array: ?Array<T>, iteratee?: Iteratee<T>): bool;
    every<T: Object>(object: T, iteratee?: OIteratee<T>): bool;
    filter<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    filter<A, T: {[id: string]: A}>(object: T, predicate?: OPredicate<A, T>): Array<A>;
    find<T>(array: ?Array<T>, predicate?: Predicate<T>): T|void;
    find<V, A, T: {[id: string]: A}>(object: T, predicate?: OPredicate<A, T>): V;
    findLast<T>(array: ?Array<T>, predicate?: Predicate<T>): T|void;
    findLast<V, A, T: {[id: string]: A}>(object: T, predicate?: OPredicate<A, T>): V;
    flatMap<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>): Array<U>;
    flatMap<T: Object, U>(object: T, iteratee?: OFlatMapIteratee<T, U>): Array<U>;
    flatMapDeep<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>): Array<U>;
    flatMapDeep<T: Object, U>(object: T, iteratee?: OFlatMapIteratee<T, U>): Array<U>;
    flatMapDepth<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>, depth?: number): Array<U>;
    flatMapDepth<T: Object, U>(object: T, iteratee?: OFlatMapIteratee<T, U>, depth?: number): Array<U>;
    forEach<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    forEach<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    forEachRight<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    forEachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    groupBy<V, T>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): {[key: V]: ?Array<T>};
    groupBy<V, A, T: {[id: string]: A}>(object: T, iteratee?: ValueOnlyIteratee<A>): {[key: V]: ?Array<A>};
    includes<T>(array: ?Array<T>, value: T, fromIndex?: number): bool;
    includes<T: Object>(object: T, value: any, fromIndex?: number): bool;
    includes(str: string, value: string, fromIndex?: number): bool;
    invokeMap<T>(array: ?Array<T>, path: ((value: T) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;
    invokeMap<T: Object>(object: T, path: ((value: any) => Array<string>|string)|Array<string>|string, ...args?: Array<any>): Array<any>;
    keyBy<T, V>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): {[key: V]: ?T};
    keyBy<V, A, T: {[id: string]: A}>(object: T, iteratee?: ValueOnlyIteratee<A>): {[key: V]: ?A};
    map<T, U>(array: ?Array<T>, iteratee?: MapIterator<T, U>): Array<U>;
    map<V, T: Object, U>(object: ?T, iteratee?: OMapIterator<V, T, U>): Array<U>;
    map(str: ?string, iteratee?: (char: string, index: number, str: string) => any): string;
    orderBy<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>|string, orders?: Array<'asc'|'desc'>|string): Array<T>;
    orderBy<V, T: Object>(object: T, iteratees?: Array<OIteratee<*>>|string, orders?: Array<'asc'|'desc'>|string): Array<V>;
    partition<T>(array: ?Array<T>, predicate?: Predicate<T>): NestedArray<T>;
    partition<V, A, T: {[id: string]: A}>(object: T, predicate?: OPredicate<A, T>): NestedArray<V>;
    reduce<T, U>(array: ?Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: ?Array<T>) => U, accumulator?: U): U;
    reduce<T: Object, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;
    reduceRight<T, U>(array: ?Array<T>, iteratee?: (accumulator: U, value: T, index: number, array: ?Array<T>) => U, accumulator?: U): U;
    reduceRight<T: Object, U>(object: T, iteratee?: (accumulator: U, value: any, key: string, object: T) => U, accumulator?: U): U;
    reject<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    reject<V: Object, A, T: {[id: string]: A}>(object: T, predicate?: OPredicate<A, T>): Array<V>;
    sample<T>(array: ?Array<T>): T;
    sample<V, T: Object>(object: T): V;
    sampleSize<T>(array: ?Array<T>, n?: number): Array<T>;
    sampleSize<V, T: Object>(object: T, n?: number): Array<V>;
    shuffle<T>(array: ?Array<T>): Array<T>;
    shuffle<V, T: Object>(object: T): Array<V>;
    size(collection: Array<any>|Object): number;
    some<T>(array: ?Array<T>, predicate?: Predicate<T>): bool;
    some<A, T: {[id: string]: A}>(object?: ?T, predicate?: OPredicate<A, T>): bool;
    sortBy<T>(array: ?Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>;
    sortBy<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>;
    sortBy<V, T: Object>(object: T, ...iteratees?: Array<OIteratee<T>>): Array<V>;
    sortBy<V, T: Object>(object: T, iteratees?: Array<OIteratee<T>>): Array<V>;

    // Date
    now(): number;

    // Function
    after(n: number, fn: Function): Function;
    ary(func: Function, n?: number): Function;
    before(n: number, fn: Function): Function;
    bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
    bindKey(obj: Object, key: string, ...partials: Array<any>): Function;
    curry(func: Function, arity?: number): Function;
    curryRight(func: Function, arity?: number): Function;
    debounce(func: Function, wait?: number, options?: DebounceOptions): Function;
    defer(func: Function, ...args?: Array<any>): number;
    delay(func: Function, wait: number, ...args?: Array<any>): number;
    flip(func: Function): Function;
    memoize(func: Function, resolver?: Function): Function;
    negate(predicate: Function): Function;
    once(func: Function): Function;
    overArgs(func: Function, ...transforms: Array<Function>): Function;
    overArgs(func: Function, transforms: Array<Function>): Function;
    partial(func: Function, ...partials: any[]): Function;
    partialRight(func: Function, ...partials: Array<any>): Function;
    partialRight(func: Function, partials: Array<any>): Function;
    rearg(func: Function, ...indexes: Array<number>): Function;
    rearg(func: Function, indexes: Array<number>): Function;
    rest(func: Function, start?: number): Function;
    spread(func: Function): Function;
    throttle(func: Function, wait?: number, options?: ThrottleOptions): Function;
    unary(func: Function): Function;
    wrap(value: any, wrapper: Function): Function;

    // Lang
    castArray(value: *): any[];
    clone<T>(value: T): T;
    cloneDeep<T>(value: T): T;
    cloneDeepWith<T, U>(value: T, customizer?: ?(value: T, key: number|string, object: T, stack: any) => U): U;
    cloneWith<T, U>(value: T, customizer?: ?(value: T, key: number|string, object: T, stack: any) => U): U;
    conformsTo<T:{[key:string]:mixed}>(source: T, predicates: T&{[key:string]:(x:any)=>boolean}): boolean;
    eq(value: any, other: any): bool;
    gt(value: any, other: any): bool;
    gte(value: any, other: any): bool;
    isArguments(value: any): bool;
    isArray(value: any): bool;
    isArrayBuffer(value: any): bool;
    isArrayLike(value: any): bool;
    isArrayLikeObject(value: any): bool;
    isBoolean(value: any): bool;
    isBuffer(value: any): bool;
    isDate(value: any): bool;
    isElement(value: any): bool;
    isEmpty(value: any): bool;
    isEqual(value: any, other: any): bool;
    isEqualWith<T, U>(value: T, other: U, customizer?: (objValue: any, otherValue: any, key: number|string, object: T, other: U, stack: any) => bool|void): bool;
    isError(value: any): bool;
    isFinite(value: any): bool;
    isFunction(value: Function): true;
    isFunction(value: number|string|void|null|Object): false;
    isInteger(value: any): bool;
    isLength(value: any): bool;
    isMap(value: any): bool;
    isMatch(object?: ?Object, source: Object): bool;
    isMatchWith<T: Object, U: Object>(object: T, source: U, customizer?: (objValue: any, srcValue: any, key: number|string, object: T, source: U) => bool|void): bool;
    isNaN(value: any): bool;
    isNative(value: any): bool;
    isNil(value: any): bool;
    isNull(value: any): bool;
    isNumber(value: any): bool;
    isObject(value: any): bool;
    isObjectLike(value: any): bool;
    isPlainObject(value: any): bool;
    isRegExp(value: any): bool;
    isSafeInteger(value: any): bool;
    isSet(value: any): bool;
    isString(value: string): true;
    isString(value: number|Function|void|null|Object|Array<any>): false;
    isSymbol(value: any): bool;
    isTypedArray(value: any): bool;
    isUndefined(value: any): bool;
    isWeakMap(value: any): bool;
    isWeakSet(value: any): bool;
    lt(value: any, other: any): bool;
    lte(value: any, other: any): bool;
    toArray(value: any): Array<any>;
    toFinite(value: any): number;
    toInteger(value: any): number;
    toLength(value: any): number;
    toNumber(value: any): number;
    toPlainObject(value: any): Object;
    toSafeInteger(value: any): number;
    toString(value: any): string;

    // Math
    add(augend: number, addend: number): number;
    ceil(number: number, precision?: number): number;
    divide(dividend: number, divisor: number): number;
    floor(number: number, precision?: number): number;
    max<T>(array: ?Array<T>): T;
    maxBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    mean(array: Array<*>): number;
    meanBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;
    min<T>(array: ?Array<T>): T;
    minBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    multiply(multiplier: number, multiplicand: number): number;
    round(number: number, precision?: number): number;
    subtract(minuend: number, subtrahend: number): number;
    sum(array: Array<*>): number;
    sumBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;

    // number
    clamp(number: number, lower?: number, upper: number): number;
    inRange(number: number, start?: number, end: number): bool;
    random(lower?: number, upper?: number, floating?: bool): number;

    // Object
    assign(object?: ?Object, ...sources?: Array<Object>): Object;
    assignIn<A, B>(a: A, b: B): A & B;
    assignIn<A, B, C>(a: A, b: B, c: C): A & B & C;
    assignIn<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    assignIn<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    assignInWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    assignInWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    assignInWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;
    assignWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    assignWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    assignWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;
    at(object?: ?Object, ...paths: Array<string>): Array<any>;
    at(object?: ?Object, paths: Array<string>): Array<any>;
    create<T>(prototype: T, properties?: Object): $Supertype<T>;
    defaults(object?: ?Object, ...sources?: Array<Object>): Object;
    defaultsDeep(object?: ?Object, ...sources?: Array<Object>): Object;
    // alias for _.toPairs
    entries(object?: ?Object): NestedArray<any>;
    // alias for _.toPairsIn
    entriesIn(object?: ?Object): NestedArray<any>;
    // alias for _.assignIn
    extend<A, B>(a: A, b: B): A & B;
    extend<A, B, C>(a: A, b: B, c: C): A & B & C;
    extend<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    extend<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // alias for _.assignInWith
    extendWith<T: Object, A: Object>(object: T, s1: A, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    extendWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    extendWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    extendWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;
    findKey<A, T: {[id: string]: A}>(object?: ?T, predicate?: OPredicate<A, T>): string|void;
    findLastKey<A, T: {[id: string]: A}>(object?: ?T, predicate?: OPredicate<A, T>): string|void;
    forIn(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forInRight(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forOwn(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forOwnRight(object?: ?Object, iteratee?: OIteratee<*>): Object;
    functions(object?: ?Object): Array<string>;
    functionsIn(object?: ?Object): Array<string>;
    get(object?: ?Object, path?: ?Array<string>|string, defaultValue?: any): any;
    has(object?: ?Object, path?: ?Array<string>|string): bool;
    hasIn(object?: ?Object, path?: ?Array<string>|string): bool;
    invert(object?: ?Object, multiVal?: bool): Object;
    invertBy(object: ?Object, iteratee?: Function): Object;
    invoke(object?: ?Object, path?: ?Array<string>|string, ...args?: Array<any>): any;
    keys(object?: ?Object): Array<string>;
    keysIn(object?: ?Object): Array<string>;
    mapKeys(object?: ?Object, iteratee?: OIteratee<*>): Object;
    mapValues(object?: ?Object, iteratee?: OIteratee<*>): Object;
    merge(object?: ?Object, ...sources?: Array<?Object>): Object;
    mergeWith<T: Object, A: Object>(object: T, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A) => any|void): Object;
    mergeWith<T: Object, A: Object, B: Object>(object: T, s1: A, s2: B, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B) => any|void): Object;
    mergeWith<T: Object, A: Object, B: Object, C: Object>(object: T, s1: A, s2: B, s3: C, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C) => any|void): Object;
    mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(object: T, s1: A, s2: B, s3: C, s4: D, customizer?: (objValue: any, srcValue: any, key: string, object: T, source: A|B|C|D) => any|void): Object;
    omit(object?: ?Object, ...props: Array<string>): Object;
    omit(object?: ?Object, props: Array<string>): Object;
    omitBy<A, T: {[id: string]: A}>(object?: ?T, predicate?: OPredicate<A, T>): Object;
    pick(object?: ?Object, ...props: Array<string>): Object;
    pick(object?: ?Object, props: Array<string>): Object;
    pickBy<A, T: {[id: string]: A}>(object?: ?T, predicate?: OPredicate<A, T>): Object;
    result(object?: ?Object, path?: ?Array<string>|string, defaultValue?: any): any;
    set(object?: ?Object, path?: ?Array<string>|string, value: any): Object;
    setWith<T>(object: T, path?: ?Array<string>|string, value: any, customizer?: (nsValue: any, key: string, nsObject: T) => any): Object;
    toPairs(object?: ?Object|Array<*>): NestedArray<any>;
    toPairsIn(object?: ?Object): NestedArray<any>;
    transform(collection: Object|Array<any>, iteratee?: OIteratee<*>, accumulator?: any): any;
    unset(object?: ?Object, path?: ?Array<string>|string): bool;
    update(object: Object, path: string[]|string, updater: Function): Object;
    updateWith(object: Object, path: string[]|string, updater: Function, customizer?: Function): Object;
    values(object?: ?Object): Array<any>;
    valuesIn(object?: ?Object): Array<any>;

    // Seq
    // harder to read, but this is _()
    (value: any): any;
    chain<T>(value: T): any;
    tap<T>(value: T, interceptor: (value:T)=>any): T;
    thru<T1,T2>(value: T1, interceptor: (value:T1)=>T2): T2;
    // TODO: _.prototype.*

    // String
    camelCase(string?: ?string): string;
    capitalize(string?: string): string;
    deburr(string?: string): string;
    endsWith(string?: string, target?: string, position?: number): bool;
    escape(string?: string): string;
    escapeRegExp(string?: string): string;
    kebabCase(string?: string): string;
    lowerCase(string?: string): string;
    lowerFirst(string?: string): string;
    pad(string?: string, length?: number, chars?: string): string;
    padEnd(string?: string, length?: number, chars?: string): string;
    padStart(string?: string, length?: number, chars?: string): string;
    parseInt(string: string, radix?: number): number;
    repeat(string?: string, n?: number): string;
    replace(string?: string, pattern: RegExp|string, replacement: ((string: string) => string)|string): string;
    snakeCase(string?: string): string;
    split(string?: string, separator: RegExp|string, limit?: number): Array<string>;
    startCase(string?: string): string;
    startsWith(string?: string, target?: string, position?: number): bool;
    template(string?: string, options?: TemplateSettings): Function;
    toLower(string?: string): string;
    toUpper(string?: string): string;
    trim(string?: string, chars?: string): string;
    trimEnd(string?: string, chars?: string): string;
    trimStart(string?: string, chars?: string): string;
    truncate(string?: string, options?: TruncateOptions): string;
    unescape(string?: string): string;
    upperCase(string?: string): string;
    upperFirst(string?: string): string;
    words(string?: string, pattern?: RegExp|string): Array<string>;

    // Util
    attempt(func: Function): any;
    bindAll(object?: ?Object, methodNames: Array<string>): Object;
    bindAll(object?: ?Object, ...methodNames: Array<string>): Object;
    cond(pairs: NestedArray<Function>): Function;
    conforms(source: Object): Function;
    constant<T>(value: T): () => T;
    defaultTo<T1:string|boolean|Object,T2>(value: T1, default: T2): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
    defaultTo<T1:number,T2>(value: T1, default: T2): T1|T2;
    defaultTo<T1:void|null,T2>(value: T1, default: T2): T2;
    flow(...funcs?: Array<Function>): Function;
    flow(funcs?: Array<Function>): Function;
    flowRight(...funcs?: Array<Function>): Function;
    flowRight(funcs?: Array<Function>): Function;
    identity<T>(value: T): T;
    iteratee(func?: any): Function;
    matches(source: Object): Function;
    matchesProperty(path?: ?Array<string>|string, srcValue: any): Function;
    method(path?: ?Array<string>|string, ...args?: Array<any>): Function;
    methodOf(object?: ?Object, ...args?: Array<any>): Function;
    mixin<T: Function|Object>(object?: T, source: Object, options?: { chain: bool }): T;
    noConflict(): Lodash;
    noop(): void;
    nthArg(n?: number): Function;
    over(...iteratees: Array<Function>): Function;
    over(iteratees: Array<Function>): Function;
    overEvery(...predicates: Array<Function>): Function;
    overEvery(predicates: Array<Function>): Function;
    overSome(...predicates: Array<Function>): Function;
    overSome(predicates: Array<Function>): Function;
    property(path?: ?Array<string>|string): Function;
    propertyOf(object?: ?Object): Function;
    range(start: number, end: number, step?: number): Array<number>;
    range(end: number, step?: number): Array<number>;
    rangeRight(start: number, end: number, step?: number): Array<number>;
    rangeRight(end: number, step?: number): Array<number>;
    runInContext(context?: Object): Function;

    stubArray(): Array<*>;
    stubFalse(): false;
    stubObject(): {};
    stubString(): '';
    stubTrue(): true;
    times(n: number, ...rest: Array<void>): Array<number>;
    times<T>(n: number, iteratee: ((i: number) => T)): Array<T>;
    toPath(value: any): Array<string>;
    uniqueId(prefix?: string): string;

    // Properties
    VERSION: string;
    templateSettings: TemplateSettings;
  }

  declare var exports: Lodash;
}

declare module 'lodash/fp' {
  declare type ObjMap<T> = { [string]: T };
  declare type Collection<T> = Array<T> | ObjMap<T>;

  declare type Args = Array<*>;
  declare type None = Array<void>;
  declare type Thunk = (...None) => mixed;
  declare type PassThroughFunc = (...Args) => *;
  declare type ObjPath = string | Array<string>;

  declare type matchesIterateeShorthand = ObjMap<mixed>;
  declare type matchesPropertyIterateeShorthand = [string, mixed];
  declare type propertyIterateeShorthand = string;

  declare type MapIteratee<T,R> =
    | ((item: T, ...None) => R)
    | propertyIterateeShorthand;

  declare type Iteratee<T> = MapIteratee<T, mixed>;

  declare type Predicate<T> =
    | MapIteratee<T, mixed>
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand;

  declare type UncappedMapIteratee<T,R> =
    | ((item: T, index: number, array: Array<T>) => R)
    | propertyIterateeShorthand;

  declare type UncappedObjectMapIteratee<T,U:ObjMap<T>,R> =
    | ((item: T, key: string, object: U) => R)
    | propertyIterateeShorthand;

  declare type Comparator<T> = (item1: T, item2: T, ...None) => boolean;

  ///////////////////
  // Array
  ///////////////////

  declare type ArrayPick = <T>(array: Array<T>) => T | void;

  declare type ArrayFilter = <T>(array: Array<T>) => Array<T>;

  declare type ArrayTrim = {
    <T>(n: number, ...None): (array: Array<T>) => Array<T>,
    <T>(n: number, array: Array<T>): Array<T>,
  };

  declare type ArrayIterateeFilter = {
    <T>(iteratee: Iteratee<T>, ...None): (array: Array<T>) => Array<T>,
    <T>(iteratee: Iteratee<T>, array: Array<T>): Array<T>,
  };

  declare type ArrayPredicateFilter = {
    <T>(predicate: Predicate<T>, ...None): (array: Array<T>) => Array<T>,
    <T>(predicate: Predicate<T>, array: Array<T>): Array<T>,
  };

  declare type ArraySetOperator = {
    <T>(array1: Array<T>, ...None): (array2: Array<T>) => Array<T>,
    <T>(array1: Array<T>, array2: Array<T>): Array<T>,
  };

  declare type ArraySetIterateeOperator = {
    <T>(iteratee: Iteratee<T>, ...None): {
      (array1: Array<T>, ...None): (array2: Array<T>) => Array<T>,
      (array1: Array<T>, array2: Array<T>): Array<T>,
    },
    <T>(iteratee: Iteratee<T>, array1: Array<T>, ...None): (array2: Array<T>) => Array<T>,
    <T>(iteratee: Iteratee<T>, array1: Array<T>, array2: Array<T>): Array<T>,
  };

  declare type ArraySetComparisonOperator = {
    <T>(iteratee: Comparator<T>, ...None): {
      (array1: Array<T>, ...None): (array2: Array<T>) => Array<T>,
      (array1: Array<T>, array2: Array<T>): Array<T>,
    },
    <T>(iteratee: Comparator<T>, array1: Array<T>, ...None): (array2: Array<T>) => Array<T>,
    <T>(iteratee: Comparator<T>, array1: Array<T>, array2: Array<T>): Array<T>,
  };

  declare type ArrayIndexSearch = {
    <T>(value: T, ...None): (array: Array<T>) => number,
    <T>(value: T, array: Array<T>): number,
  };

  declare type ArrayIndexFromSearch = {
    <T>(value: T, ...None): {
      (fromIndex: number, ...None): (array: Array<T>) => number,
      (fromIndex: number, array: Array<T>): number,
    },
    <T>(value: T, fromIndex: number, ...None): (array: Array<T>) => number,
    <T>(value: T, fromIndex: number, array: Array<T>): number,
  };

  declare type ArrayIndexPredicateSearch = {
    <T>(predicate: Predicate<T>, ...None): (array: Array<T>) => number,
    <T>(predicate: Predicate<T>, array: Array<T>): number,
  };

  declare type ArrayIndexFromPredicateSearch = {
    <T>(predicate: Predicate<T>, ...None): {
      (fromIndex: number, ...None): (array: Array<T>) => number,
      (fromIndex: number, array: Array<T>): number,
    },
    <T>(predicate: Predicate<T>, fromIndex: number, ...None): (array: Array<T>) => number,
    <T>(predicate: Predicate<T>, fromIndex: number, array: Array<T>): number,
  };

  declare type ArrayIndexIterateeSearch = {
    <T>(iteratee: MapIteratee<T,number>, ...None): {
      (value: T, ...None): (array: Array<T>) => number,
      (value: T, array: Array<T>): number,
    },
    <T>(iteratee: MapIteratee<T,number>, value: T, ...None): (array: Array<T>) => number,
    <T>(iteratee: MapIteratee<T,number>, value: T, array: Array<T>): number,
  };

  declare type FillCurried2<T,U> = {
    (value: T, ...None): (array: Array<U>) => Array<T|U>,
    (value: T, array: Array<U>): Array<T|U>,
  };

  ///////////////////
  // Collection
  ///////////////////

  declare type CollectionFind = {
    <T>(predicate: Predicate<T>, ...None): (collection: Collection<T>) => T | void,
    <T>(predicate: Predicate<T>, collection: Collection<T>): T | void,
  };

  declare type CollectionFindFrom = {
    <T>(predicate: Predicate<T>, ...None): {
      (fromIndex: number, ...None): (collection: Collection<T>) => T | void,
      (fromIndex: number, collection: Collection<T>): T | void,
    },
    <T>(predicate: Predicate<T>, fromIndex: number, ...None): (collection: Collection<T>) => T | void,
    <T>(predicate: Predicate<T>, fromIndex: number, collection: Collection<T>): T | void,
  };

  declare type CollectionTest = {
    <T>(predicate: Predicate<T>, ...None): (collection: Collection<T>) => boolean,
    <T>(predicate: Predicate<T>, collection: Collection<T>): boolean,
  };

  declare type CollectionPredicateFilter = {
    <T>(predicate: Predicate<T>, ...None): (collection: Collection<T>) => Array<T>,
    <T>(predicate: Predicate<T>, collection: Collection<T>): Array<T>,
  };

  declare type CollectionForEach = {
    <T,R:Collection<T>>(iteratee: Iteratee<T>, ...None): (collection: R) => R,
    <T,R:Collection<T>>(iteratee: Iteratee<T>, collection: R): R,
  };

  declare type SortFields<T> = string | Iteratee<T> | Array<string> | Array<Iteratee<T>>;
  declare type SortOrders = 'asc' | 'desc' | Array<'asc'|'desc'>;

  declare type UncappedMap = {
    <T,U>(iteratee: UncappedMapIteratee<T,U>, ...None): (array: Array<T>) => Array<U>,
    <T,U>(iteratee: UncappedMapIteratee<T,U>, array: Array<T>): Array<U>,
    <T,U:ObjMap<T>,R>(iteratee: UncappedObjectMapIteratee<T,U,R>, ...None): (object: U) => Array<R>,
    <T,U:ObjMap<T>,R>(iteratee: UncappedObjectMapIteratee<T,U,R>, object: U): Array<R>,
  };

  declare type ReduceIteratee<T,R> = (result: R, value: T, ...None) => R;
  declare type ReduceRightIteratee<T,R> = (value: T, result: R, ...None) => R;

  ///////////////////
  // Function
  ///////////////////

  declare type F0<R> = (...None) => R;
  declare type F1<A,R> = (a: A) => R;
  declare type F2<A,B,R> = (a: A, b: B) => R;
  declare type F3<A,B,C,R> = (a: A, b: B, c: C) => R;
  declare type F4<A,B,C,D,R> = (a: A, b: B, c: C, d: D) => R;
  declare type F5<A,B,C,D,E,R> = (a: A, b: B, c: C, d: D, e: E) => R;
  declare type F6<A,B,C,D,E,F,R> = (a: A, b: B, c: C, d: D, e: E, f: F) => R;
  declare type FX<R> = (...Args) => R;

  declare type FunctionWrap = <T:PassThroughFunc>(func: T) => T;

  declare type FunctionLimitWrap = {
    <T:PassThroughFunc>(func: T, ...None): (n: number) => T,
    <T:PassThroughFunc>(func: T, n: number): T,
  };

  declare type FunctionThrottleResult<U,R> = {
    (...args: U): R,
    flush(): R,
    cancel(): void,
  };

  declare type FunctionThrottle = {
    <T:Args,R>(wait: number, ...None): (func: (...args: T) => R) => FunctionThrottleResult<T,R>,
    <T:Args,R>(wait: number, func: (...args: T) => R): FunctionThrottleResult<T,R>,
  };

  declare type Curried2<A,B,R> = {
    (a: A, ...None): (b: B) => R,
    (a: A, b: B): R,
  };
  declare type Curried3<A,B,C,R> = {
    (a: A, ...None): Curried2<B,C,R>,
    (a: A, b: B, ...None): (c: C) => R,
    (a: A, b: B, c: C): R,
  };
  declare type Curried4<A,B,C,D,R> = {
    (a: A, ...None): Curried3<B,C,D,R>,
    (a: A, b: B, ...None): Curried2<C,D,R>,
    (a: A, b: B, c: C, ...None): (d: D) => R,
    (a: A, b: B, c: C, d: D): R,
  };
  declare type Curried5<A,B,C,D,E,R> = {
    (a: A, ...None): Curried4<B,C,D,E,R>,
    (a: A, b: B, ...None): Curried3<C,D,E,R>,
    (a: A, b: B, c: C, ...None): Curried2<D,E,R>,
    (a: A, b: B, c: C, d: D, ...None): (e: E) => R,
    (a: A, b: B, c: C, d: D, e: E): R,
  };
  declare type Curried6<A,B,C,D,E,F,R> = {
    (a: A, ...None): Curried5<B,C,D,E,F,R>,
    (a: A, b: B, ...None): Curried4<C,D,E,F,R>,
    (a: A, b: B, c: C, ...None): Curried3<D,E,F,R>,
    (a: A, b: B, c: C, d: D, ...None): Curried2<E,F,R>,
    (a: A, b: B, c: C, d: D, e: E, ...None): (f: F) => R,
    (a: A, b: B, c: C, d: D, e: E, f: F): R,
  };

  declare type CurriedRight2<A,B,R> = {
    (b: B, ...None): (a: A) => R,
    (a: A, b: B): R,
  };
  declare type CurriedRight3<A,B,C,R> = {
    (c: C, ...None): CurriedRight2<A,B,R>,
    (b: B, c: C, ...None): (a: A) => R,
    (a: A, b: B, c: C): R,
  };
  declare type CurriedRight4<A,B,C,D,R> = {
    (d: D, ...None): CurriedRight3<A,B,C,R>,
    (c: C, d: D, ...None): CurriedRight2<A,B,R>,
    (b: B, c: C, d: D, ...None): (a: A) => R,
    (a: A, b: B, c: C, d: D): R,
  };
  declare type CurriedRight5<A,B,C,D,E,R> = {
    (e: E, ...None): CurriedRight4<A,B,C,D,R>,
    (d: D, e: E, ...None): CurriedRight3<A,B,C,R>,
    (c: C, d: D, e: E, ...None): CurriedRight2<A,B,R>,
    (b: B, c: C, d: D, e: E, ...None): (a: A) => R,
    (a: A, b: B, c: C, d: D, e: E): R,
  };
  declare type CurriedRight6<A,B,C,D,E,F,R> = {
    (f: F, ...None): CurriedRight5<A,B,C,D,E,R>,
    (e: E, f: F, ...None): CurriedRight4<A,B,C,D,R>,
    (d: D, e: E, f: F, ...None): CurriedRight3<A,B,C,R>,
    (c: C, d: D, e: E, f: F, ...None): CurriedRight2<A,B,R>,
    (b: B, c: C, d: D, e: E, f: F, ...None): (a: A) => R,
    (a: A, b: B, c: C, d: D, e: E, f: F): R,
  };

  declare type MemoizeMap<K,V> = {
    delete(key: K): boolean,
    get(key: K): V | void,
    has(key: K): boolean,
    set(key: K, value: V): MemoizeMap<K,V>,
  };

  ///////////////////
  // Lang
  ///////////////////

  declare type TypePredicate = (value: mixed) => boolean;
  declare type TypeConverter<T> = (value: mixed) => T;

  declare type TypeComparator = {
    (value: mixed, ...None): (other: mixed) => boolean;
    (value: mixed, other: mixed): boolean;
  };

  declare type ObjectMatcher = {
    (source: Object, ...None): (object: Object) => boolean,
    (source: Object, object: Object): boolean,
  };

  declare type CloneDeepCustomizer<T,U> = (value: U, key?: mixed, object?: T) => U | void;
  declare type CloneCustomizer<T> = (value: T) => T | void;
  declare type EqualityCustomizer = (objectValue: mixed, otherValue: mixed, key?: mixed, object?: mixed, other?: mixed) => boolean;
  declare type MatchCustomizer = (objectValue: mixed, sourceValue: mixed, key?: mixed, object?: mixed, source?: mixed) => boolean;

  declare function isArrayCheck(value: mixed): boolean %checks(Array.isArray(value));
  declare function isArrayBufferCheck(value: mixed): boolean %checks(value instanceof ArrayBuffer);
  declare function isBooleanCheck(value: mixed): boolean %checks(typeof value == 'boolean');
  declare function isBufferCheck(value: mixed): boolean %checks(value instanceof Buffer);
  declare function isDateCheck(value: mixed): boolean %checks(value instanceof Date);
  declare function isElementCheck(value: mixed): boolean %checks(value instanceof HTMLElement);
  declare function isErrorCheck(value: mixed): boolean %checks(value instanceof Error);
  declare function isFiniteCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isFunctionCheck(value: mixed): boolean %checks(typeof value == 'function');
  declare function isIntegerCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isLengthCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isMapCheck(value: mixed): boolean %checks(value instanceof Map);
  declare function isNaNCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isNilCheck(value: mixed): boolean %checks(value == null);
  declare function isNullCheck(value: mixed): boolean %checks(value === null);
  declare function isNumberCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isObjectCheck(value: mixed): boolean %checks(value != null);
  declare function isObjectLikeCheck(value: mixed): boolean %checks(value != null);
  declare function isPlainObjectCheck(value: mixed): boolean %checks(value != null);
  declare function isRegExpCheck(value: mixed): boolean %checks(value instanceof RegExp);
  declare function isSafeIntegerCheck(value: mixed): boolean %checks(typeof value == 'number');
  declare function isSetCheck(value: mixed): boolean %checks(value instanceof Set);
  declare function isStringCheck(value: mixed): boolean %checks(typeof value == 'string');
  declare function isSymbolCheck(value: mixed): boolean %checks(typeof value == 'symbol');
  declare function isUndefinedCheck(value: mixed): boolean %checks(value === undefined);
  declare function isWeakMapCheck(value: mixed): boolean %checks(value instanceof WeakMap);
  declare function isWeakSetCheck(value: mixed): boolean %checks(value instanceof WeakSet);

  ///////////////////
  // Math
  ///////////////////

  declare type MathOperation = {
    (first: number, ...None): (second: number) => number,
    (first: number, second: number): number,
  };

  declare type MathValueIterateeOperation = {
    <T>(iteratee: MapIteratee<T,number>, ...None): (array: Array<T>) => number,
    <T>(iteratee: MapIteratee<T,number>, array: Array<T>): number,
  };

  declare type MathCompareIterateeOperation = {
    <T>(iteratee: Iteratee<T>, ...None): (array: Array<T>) => number | void,
    <T>(iteratee: Iteratee<T>, array: Array<T>): number | void,
  };

  ///////////////////
  // Number
  ///////////////////

  declare type NumberBounds<R> = {
    (lower: number, ...None): {
      (upper: number, ...None): (number: number) => R,
      (upper: number, number: number): R,
    },
    (lower: number, upper: number, ...None): (number: number) => R,
    (lower: number, upper: number, number: number): R,
  };

  ///////////////////
  // Object
  ///////////////////

  declare type ObjectAssignCustomizer<T,U> = (objValue: mixed, srcValue: mixed, key: string, object: T, source: U) => mixed;
  declare type ObjectAssignAllCustomizer = (objValue: mixed, srcValue: mixed, key: string|number, object: mixed, source: mixed) => mixed;
  declare type ObjectUpdateCustomizer = (nsValue: mixed, key: string, nsObject: mixed) => mixed;

  declare type ObjectAssign = {
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(object: T, ...None): (source: U) => T & U,
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(object: T, source: U): T & U,
  };

  declare type ObjectAssignAll = <T:ObjMap<mixed>>(objects: Array<T>, ...None) => T;

  declare type ObjectCustomAssign = {
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(customizer: ObjectAssignCustomizer<T,U>, ...None): {
      (object: T, ...None): (source: U) => ObjMap<mixed>,
      (object: T, source: U): ObjMap<mixed>,
    },
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(customizer: ObjectAssignCustomizer<T,U>, object: T, ...None): (source: U) => ObjMap<mixed>,
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(customizer: ObjectAssignCustomizer<T,U>, object: T, source: U): ObjMap<mixed>,
  };

  declare type ObjectCustomAssignAll = {
    <T:ObjMap<mixed>>(customizer: ObjectAssignAllCustomizer, ...None): (objects: Array<T>) => ObjMap<mixed>,
    <T:ObjMap<mixed>>(customizer: ObjectAssignAllCustomizer, objects: Array<T>): ObjMap<mixed>,
  };

  declare type ObjectDefault = {
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(source: T, ...None): (object: U) => T & U,
    <T:ObjMap<mixed>,U:ObjMap<mixed>>(source: T, object: U): T & U,
  };

  declare type ObjectDefaultAll = <T:ObjMap<mixed>>(objects: Array<T>) => T;

  declare type ObjectPredicateFindKey = {
    <T,U:ObjMap<T>>(predicate: Predicate<T>, ...None): (object: U) => string,
    <T,U:ObjMap<T>>(predicate: Predicate<T>, object: U): string,
  };

  declare type ObjectIterateeFor = {
    <T,U:ObjMap<T>>(iteratee: (value: T, ...None) => false | void, ...None): (object: U) => U,
    <T,U:ObjMap<T>>(iteratee: (value: T, ...None) => false | void, object: U): U,
  };

  declare type ObjectPathSearch<R> = {
    (path: ObjPath, ...None): (object: Object) => R,
    (path: ObjPath, object: Object): R,
  };

  declare type ObjectFilter = {
    (props: string | Array<string>, ...None): (object: Object) => ObjMap<mixed>,
    (props: string | Array<string>, object: Object): ObjMap<mixed>,
  };

  declare type ObjectPredicateFilter = {
    <T>(predicate: (value: T, key: string) => boolean, ...None): (object: ObjMap<T>) => ObjMap<mixed>,
    <T>(predicate: (value: T, key: string) => boolean, object: ObjMap<T>): ObjMap<mixed>,
  };

  declare type ObjectPairs = {
    <T,U>(object: Map<T,U>): Array<[T,U]>,
    <T>(object: Set<T>): Array<[T,T]>,
    <T>(object: ObjMap<T>): Array<[string,T]>,
  };

  declare type SetWithCurried2<T> = {
    (value: mixed, ...None): (object: T) => T,
    (value: mixed, object: T): T,
  };

  declare type TransformIteratee<T,R> = (result: R, value: T, ...None) => false | void;

  declare type UpdateIteratee = (value: mixed) => mixed;
  declare type UpdateCurried2<T> = {
    (updater: UpdateIteratee, ...None): (object: T) => T,
    (updater: UpdateIteratee, object: T): T,
  };

  ///////////////////
  // String
  ///////////////////

  declare type StringPattern = string|RegExp;
  declare type StringMap = (string: string) => string;

  declare type StringMatch = {
    (target: string, ...None): (string: string) => boolean,
    (target: string, string: string): boolean,
  };

  declare type StringPad = {
    (length: number, ...None): StringMap,
    (length: number, string: string): string,
  };

  declare type StringPadChars = {
    (chars: string, ...None): {
      (length: number, ...None): StringMap,
      (length: number, string: string): string,
    },
    (chars: string, length: number, ...None): StringMap,
    (chars: string, length: number, string: string): string,
  };

  declare type TruncateOptions = {|
    length?: number,
    omission?: string,
    separator?: StringPattern,
  |};

  declare type StringTrimChars = {
    (chars: string, ...None): StringMap,
    (chars: string, string: string): string,
  };

  ///////////////////
  // Util
  ///////////////////

  declare type UtilPredicateOver = <T:Args,U:(...T)=>boolean>(predicates: U|Array<U>) => (...T) => boolean;

  declare type UtilRange = {
    (start: number, ...None): (end: number) => Array<number>,
    (start: number, end: number): Array<number>,
  };

  declare type UtilRangeStep = {
    (step: number, ...None): {
      (start: number, ...None): (end: number) => Array<number>,
      (start: number, end: number): Array<number>,
    },
    (step: number, start: number, ...None): (end: number) => Array<number>,
    (step: number, start: number, end: number): Array<number>,
  };

  declare class _ {

    ///////////////////
    // Array
    ///////////////////

    static chunk: {
      <T>(size: number, ...None): (array: Array<T>) => Array<Array<T>>,
      <T>(size: number, array: Array<T>): Array<Array<T>>,
    };
    static compact: ArrayFilter;
    static concat: {
      <T,U>(array1: Array<T>|T, ...None): (array2: Array<U>|U) => Array<T|U>,
      <T,U>(array1: Array<T>|T, array2: Array<U>|U): Array<T|U>,
    };
    static difference: ArraySetOperator;
    static differenceBy: ArraySetIterateeOperator;
    static differenceWith: ArraySetComparisonOperator;
    static drop: ArrayTrim;
    static dropRight: ArrayTrim;
    static dropRightWhile: ArrayPredicateFilter;
    static dropWhile: ArrayPredicateFilter;
    static fill: {
      <T,U>(start: number, ...None): {
        (end: number, ...None): FillCurried2<T,U>,
        (end: number, value: T, ...None): (array: Array<U>) => Array<T|U>,
        (end: number, value: T, array: Array<U>): Array<T|U>,
      },
      <T,U>(start: number, end: number, ...None): FillCurried2<T,U>,
      <T,U>(start: number, end: number, value: T, ...None): (array: Array<U>) => Array<T|U>,
      <T,U>(start: number, end: number, value: T, array: Array<U>): Array<T|U>,
    };
    static findIndex: ArrayIndexPredicateSearch;
    static findIndexFrom: ArrayIndexFromPredicateSearch;
    static findLastIndex: ArrayIndexPredicateSearch;
    static findLastIndexFrom: ArrayIndexFromPredicateSearch;
    static flatten: {
      <T>(array: Array<Array<T>|T>): Array<T>,
    };
    // Unfortunately, this doesn't work for reasons I don't fully understand.
    // declare type NestedArray<T> = Array<NestedArray<T>|T>;
    // TODO: NestedArray
    static flattenDeep: {
      (array: Array<mixed>): Array<mixed>,
    };
    static flattenDepth: {
      (depth: number, ...None): (array: Array<mixed>) => Array<mixed>,
      (depth: number, array: Array<mixed>): Array<mixed>,
    };
    static fromPairs: <T>(pairs: Array<[string, T]>) => ObjMap<T>;
    static head: ArrayPick;
    static indexOf: ArrayIndexSearch;
    static indexOfFrom: ArrayIndexFromSearch;
    static initial: ArrayFilter;
    static intersection: ArraySetOperator;
    static intersectionBy: ArraySetIterateeOperator;
    static intersectionWith: ArraySetComparisonOperator;
    static join: {
      <T>(separator: string, array: Array<T>): string;
      <T>(separator: string, ...None): (array: Array<T>) => string;
    };
    static last: ArrayPick;
    static lastIndexOf: ArrayIndexSearch;
    static lastIndexOfFrom: ArrayIndexFromSearch;
    static nth: {
      <T>(index: number, ...None): (array: Array<T>) => T | void,
      <T>(index: number, array: Array<T>): T | void,
    };
    static pull: {
      <T>(value: T, ...None): (array: Array<T>) => Array<T>,
      <T>(value: T, array: Array<T>): Array<T>,
    };
    static pullAll: ArraySetOperator;
    static pullAllBy: ArraySetIterateeOperator;
    static pullAllWith: ArraySetComparisonOperator;
    static pullAt: {
      <T>(indexes: Array<number>|number, ...None): (array: Array<T>) => Array<T>,
      <T>(indexes: Array<number>|number, array: Array<T>): Array<T>,
    };
    static remove: ArrayPredicateFilter;
    static reverse: ArrayFilter;
    static slice: {
      <T>(start: number, ...None): {
        (end: number, ...None): (array: Array<T>) => Array<T>,
        (end: number, array: Array<T>): Array<T>,
      },
      <T>(start: number, end: number, ...None): (array: Array<T>) => Array<T>,
      <T>(start: number, end: number, array: Array<T>): Array<T>,
    };
    static sortedIndex: ArrayIndexSearch;
    static sortedIndexBy: ArrayIndexIterateeSearch;
    static sortedIndexOf: ArrayIndexSearch;
    static sortedLastIndex: ArrayIndexSearch;
    static sortedLastIndexBy: ArrayIndexIterateeSearch;
    static sortedLastIndexOf: ArrayIndexSearch;
    static sortedUniq: ArrayFilter;
    static sortedUniqBy: ArrayIterateeFilter;
    static tail: ArrayFilter;
    static take: ArrayTrim;
    static takeRight: ArrayTrim;
    static takeRightWhile: ArrayPredicateFilter;
    static takeWhile: ArrayPredicateFilter;
    static union: ArraySetOperator;
    static unionBy: ArraySetIterateeOperator;
    static unionWith: ArraySetComparisonOperator;
    static uniq: ArrayFilter;
    static uniqBy: ArrayIterateeFilter;
    static uniqWith: {
      <T>(comparator: Comparator<T>, ...None): (array: Array<T>) => Array<T>,
      <T>(comparator: Comparator<T>, array: Array<T>): Array<T>,
    };
    static unzip: {
      <T>(array: Array<Array<T>>): Array<Array<T>>,
    };
    static unzipWith: {
      <T,R>(iteratee: MapIteratee<T,R>, ...None): (array: Array<Array<T>>) => Array<R>,
      <T,R>(iteratee: MapIteratee<T,R>, array: Array<Array<T>>): Array<R>,
    };
    static without: ArraySetOperator;
    static xor: ArraySetOperator;
    static xorBy: ArraySetIterateeOperator;
    static xorWith: ArraySetComparisonOperator;
    static zip: {
      <T,U>(array1: Array<T>, ...None): (array2: Array<U>) => Array<[T,U]>,
      <T,U>(array1: Array<T>, array2: Array<U>): Array<[T,U]>,
    };
    static zipAll: (arrays: Array<Array<mixed>>) => Array<Array<mixed>>;
    static zipObject: {
      <T>(props: Array<string>, ...None): (values: Array<T>) => ObjMap<T>,
      <T>(props: Array<string>, values: Array<T>): ObjMap<T>,
    };
    static zipObjectDeep: {
      (props: Array<string>, ...None): (values: Array<mixed>) => {},
      (props: Array<string>, values: Array<mixed>): {},
    };
    static zipWith: {
      <T,U,R>(iteratee: (v1: T, v2: U) => R, ...None): {
        (array1: Array<T>, ...None): (array2: Array<U>) => Array<R>,
        (array1: Array<T>, array2: Array<U>): Array<R>,
      },
      <T,U,R>(iteratee: (v1: T, v2: U) => R, array1: Array<T>, ...None): (array2: Array<U>) => Array<R>,
      <T,U,R>(iteratee: (v1: T, v2: U) => R, array1: Array<T>, array2: Array<U>): Array<R>,
    };

    ///////////////////
    // Collection
    ///////////////////

    static countBy: {
      <T>(iteratee: Iteratee<T>, ...None): (collection: Collection<T>) => ObjMap<number>,
      <T>(iteratee: Iteratee<T>, collection: Collection<T>): ObjMap<number>,
    };
    static every: CollectionTest;
    static filter: CollectionPredicateFilter;
    static find: CollectionFind;
    static findFrom: CollectionFindFrom;
    static findLast: CollectionFind;
    static findLastFrom: CollectionFindFrom;
    static flatMap: {
      <T,R>(iteratee: MapIteratee<T,Array<R>>, ...None): (collection: Collection<T>) => Array<R>,
      <T,R>(iteratee: MapIteratee<T,Array<R>>, collection: Collection<T>): Array<R>,
    };
    // TODO: NestedArray
    static flatMapDeep: {
      <T>(iteratee: MapIteratee<T,Array<mixed>>, ...None): (collection: Collection<T>) => Array<mixed>,
      <T>(iteratee: MapIteratee<T,Array<mixed>>, collection: Collection<T>): Array<mixed>,
    };
    static flatMapDepth: {
      <T>(iteratee: MapIteratee<T,Array<mixed>>, ...None): {
        (depth: number, ...None): (collection: Collection<T>) => Array<mixed>,
        (depth: number, collection: Collection<T>): Array<mixed>,
      },
      <T>(iteratee: MapIteratee<T,Array<mixed>>, depth: number, ...None): (collection: Collection<T>) => Array<mixed>,
      <T>(iteratee: MapIteratee<T,Array<mixed>>, depth: number, collection: Collection<T>): Array<mixed>,
    };
    static forEach: CollectionForEach;
    static forEachRight: CollectionForEach;
    static groupBy: {
      <T>(iteratee: Iteratee<T>, ...None): (collection: Collection<T>) => ObjMap<Array<T>>,
      <T>(iteratee: Iteratee<T>, collection: Collection<T>): ObjMap<Array<T>>,
    };
    static includes: {
      <T>(value: T, ...None): (collection: Collection<T>|string) => boolean,
      <T>(value: T, collection: Collection<T>|string): boolean,
    };
    static includesFrom: {
      <T>(value: T, ...None): {
        (fromIndex: number, ...None): (collection: Collection<T>|string) => boolean,
        (fromIndex: number, collection: Collection<T>|string): boolean,
      },
      <T>(value: T, fromIndex: number, ...None): (collection: Collection<T>|string) => boolean,
      <T>(value: T, fromIndex: number, collection: Collection<T>|string): boolean,
    };
    static invokeArgsMap: {
      <T,R>(path: ObjPath|MapIteratee<T,R>, ...None): {
        (args: Array<mixed>, ...None): (collection: Collection<T>) => Array<R>,
        (args: Array<mixed>, collection: Collection<T>): Array<R>,
      },
      <T,R>(path: ObjPath|MapIteratee<T,R>, args: Array<mixed>, ...None): (collection: Collection<T>) => Array<R>,
      <T,R>(path: ObjPath|MapIteratee<T,R>, args: Array<mixed>, collection: Collection<T>): Array<R>,
    };
    static invokeMap: {
      <T,R>(path: ObjPath|MapIteratee<T,R>, ...None): (collection: Collection<T>) => Array<R>,
      <T,R>(path: ObjPath|MapIteratee<T,R>, collection: Collection<T>): Array<R>,
    };
    static keyBy: {
      <T>(iteratee: MapIteratee<T,string>, ...None): (collection: Collection<T>) => ObjMap<T>,
      <T>(iteratee: MapIteratee<T,string>, collection: Collection<T>): ObjMap<T>,
    };
    static map: {
      <T,R>(iteratee: MapIteratee<T,R>, ...None): (collection: Collection<T>) => Array<R>,
      <T,R>(iteratee: MapIteratee<T,R>, collection: Collection<T>): Array<R>,
      convert(options: { cap: false }): UncappedMap,
    };
    static orderBy: {
      <T>(iteratees: SortFields<T>, ...None): {
        (orders: SortOrders, ...None): (collection: Collection<T>) => Array<T>,
        (orders: SortOrders, collection: Collection<T>): Array<T>,
      },
      <T>(iteratees: SortFields<T>, orders: SortOrders, ...None): (collection: Collection<T>) => Array<T>,
      <T>(iteratees: SortFields<T>, orders: SortOrders, collection: Collection<T>): Array<T>,
    };
    static partition: {
      <T>(predicate: Predicate<T>, ...None): (collection: Collection<T>) => Array<Array<T>>,
      <T>(predicate: Predicate<T>, collection: Collection<T>): Array<Array<T>>,
    };
    static reduce: {
      <T,R>(iteratee: ReduceIteratee<T,R>, ...None): {
        (accumulator: R, ...None): (collection: Collection<T>) => R,
        (accumulator: R, collection: Collection<T>): R,
      },
      <T,R>(iteratee: ReduceIteratee<T,R>, accumulator: R, ...None): (collection: Collection<T>) => R,
      <T,R>(iteratee: ReduceIteratee<T,R>, accumulator: R, collection: Collection<T>): R,
    };
    static reduceRight: {
      <T,R>(iteratee: ReduceRightIteratee<T,R>, ...None):  {
        (accumulator: R, ...None): (collection: Collection<T>) => R,
        (accumulator: R, collection: Collection<T>): R,
      },
      <T,R>(iteratee: ReduceRightIteratee<T,R>, accumulator: R, ...None): (collection: Collection<T>) => R,
      <T,R>(iteratee: ReduceRightIteratee<T,R>, accumulator: R, collection: Collection<T>): R,
    };
    static reject: CollectionPredicateFilter;
    static sample: <T>(collection: Collection<T>) => T;
    static sampleSize: {
      <T>(n: number, ...None): (collection: Collection<T>) => T,
      <T>(n: number, collection: Collection<T>): T,
    };
    static shuffle: <T>(collection: Collection<T>) => Array<T>;
    static size: <T>(collection: Collection<T>|string) => number;
    static some: CollectionTest;
    static sortBy: {
      <T>(iteratees: SortFields<T>, ...None): (collection: Collection<T>) => Array<T>,
      <T>(iteratees: SortFields<T>, collection: Collection<T>): Array<T>,
    };

    ///////////////////
    // Date
    ///////////////////

    static now: () => number;

    ///////////////////
    // Function
    ///////////////////

    static after: FunctionLimitWrap;
    static ary: FunctionLimitWrap;
    static before: FunctionLimitWrap;
    static bind: {
      <T:PassThroughFunc>(func: T, ...None): (thisArg: mixed) => T,
      <T:PassThroughFunc>(func: T, thisArg: mixed): T,
    };
    // Unknown result function signature so return catch-all function type.
    // TODO: Use $PropertyType if it ever supports arbitary types.
    static bindKey: {
      <T:Object>(object: T, ...None): (key: string) => () => mixed,
      <T:Object>(object: T, key: string): () => mixed,
    };
    static curry: {
      <A,R>(func: F1<A,R>): F1<A,R>,
      <A,B,R>(func: F2<A,B,R>): Curried2<A,B,R>,
      <A,B,C,R>(func: F3<A,B,C,R>): Curried3<A,B,C,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>): Curried4<A,B,C,D,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>): Curried5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>): Curried6<A,B,C,D,E,F,R>,
      (func: FX<mixed>): FX<mixed>,
    };
    static curryN: {
      <A,R>(arity: 1, ...None): (func: F1<A,R>) => F1<A,R>,
      <A,R>(arity: 1, func: F1<A,R>): F1<A,R>,
      <A,B,R>(arity: 2, ...None): (func: F2<A,B,R>) => Curried2<A,B,R>,
      <A,B,R>(arity: 2, func: F2<A,B,R>): Curried2<A,B,R>,
      <A,B,C,R>(arity: 3, ...None): (func: F3<A,B,C,R>) => Curried3<A,B,C,R>,
      <A,B,C,R>(arity: 3, func: F3<A,B,C,R>): Curried3<A,B,C,R>,
      <A,B,C,D,R>(arity: 4, ...None): (func: F4<A,B,C,D,R>) => Curried4<A,B,C,D,R>,
      <A,B,C,D,R>(arity: 4, func: F4<A,B,C,D,R>): Curried4<A,B,C,D,R>,
      <A,B,C,D,E,R>(arity: 5, ...None): (func: F5<A,B,C,D,E,R>) => Curried5<A,B,C,D,E,R>,
      <A,B,C,D,E,R>(arity: 5, func: F5<A,B,C,D,E,R>): Curried5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(arity: 6, ...None): (func: F6<A,B,C,D,E,F,R>) => Curried6<A,B,C,D,E,F,R>,
      <A,B,C,D,E,F,R>(arity: 6, func: F6<A,B,C,D,E,F,R>): Curried6<A,B,C,D,E,F,R>,
      (arity: number, func: FX<mixed>): FX<mixed>,
    };
    static curryRight: {
      <A,R>(func: F1<A,R>): F1<A,R>,
      <A,B,R>(func: F2<A,B,R>): CurriedRight2<A,B,R>,
      <A,B,C,R>(func: F3<A,B,C,R>): CurriedRight3<A,B,C,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>): CurriedRight4<A,B,C,D,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>): CurriedRight5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>): CurriedRight6<A,B,C,D,E,F,R>,
      (func: FX<mixed>): FX<mixed>,
    };
    static curryRightN: {
      <A,R>(arity: 1, ...None): (func: F1<A,R>) => F1<A,R>,
      <A,R>(arity: 1, func: F1<A,R>): F1<A,R>,
      <A,B,R>(arity: 2, ...None): (func: F2<A,B,R>) => CurriedRight2<A,B,R>,
      <A,B,R>(arity: 2, func: F2<A,B,R>): CurriedRight2<A,B,R>,
      <A,B,C,R>(arity: 3, ...None): (func: F3<A,B,C,R>) => CurriedRight3<A,B,C,R>,
      <A,B,C,R>(arity: 3, func: F3<A,B,C,R>): CurriedRight3<A,B,C,R>,
      <A,B,C,D,R>(arity: 4, ...None): (func: F4<A,B,C,D,R>) => CurriedRight4<A,B,C,D,R>,
      <A,B,C,D,R>(arity: 4, func: F4<A,B,C,D,R>): CurriedRight4<A,B,C,D,R>,
      <A,B,C,D,E,R>(arity: 5, ...None): (func: F5<A,B,C,D,E,R>) => CurriedRight5<A,B,C,D,E,R>,
      <A,B,C,D,E,R>(arity: 5, func: F5<A,B,C,D,E,R>): CurriedRight5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(arity: 6, ...None): (func: F6<A,B,C,D,E,F,R>) => CurriedRight6<A,B,C,D,E,F,R>,
      <A,B,C,D,E,F,R>(arity: 6, func: F6<A,B,C,D,E,F,R>): CurriedRight6<A,B,C,D,E,F,R>,
      (arity: number, func: FX<mixed>): FX<mixed>,
    };
    static debounce: FunctionThrottle;
    static defer: <T:Args>(func: (...args: T) => mixed, ...args: T) => number;
    static delay: {
      (wait: number, ...None): (func: Thunk) => number,
      (wait: number, func: Thunk): number,
    };
    static flip: {
      <A,R>(func: F1<A,R>): F1<A,R>,
      <A,B,R>(func: F2<A,B,R>): (b: B, a: A) => R,
      <A,B,C,R>(func: F3<A,B,C,R>): (c: C, b: B, a: A) => R,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>): (d: D, c: C, b: B, a: A) => R,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>): (e: E, d: D, c: C, b: B, a: A) => R,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>): (f: F, e: E, d: D, c: C, b: B, a: A) => R,
      <R>(func: FX<R>): FX<R>,
    };
    static memoize: {
      <T,U:Array<*>,R>(func: (keyArg: T, ...rest: U) => R): {
        (first: T, ...rest: U): R,
        cache: MemoizeMap<T,R>,
      },
      // Seems not possible to get type info for a constructor so can't validate object type here.
      // https://github.com/facebook/flow/issues/1409
      Cache: mixed,
    };
    static negate: <T:FX<boolean>>(func: T) => T;
    static once: FunctionWrap;
    static overArgs: {
      <A,R>(func: F1<A,R>, ...None): (transforms: [(a:A)=>A]) => F1<A,R>,
      <A,R>(func: F1<A,R>, transforms: [(a:A)=>A]): F1<A,R>,
      <A,B,R>(func: F2<A,B,R>, ...None): (transforms: [(a:A)=>A, (b:B)=>B]) => F2<A,B,R>,
      <A,B,R>(func: F2<A,B,R>, transforms: [(a:A)=>A, (b:B)=>B]): F2<A,B,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C]) => F3<A,B,C,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C]): F3<A,B,C,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D]) => F4<A,B,C,D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D]): F4<A,B,C,D,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D, (e:E)=>E]) => F5<A,B,C,D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D, (e:E)=>E]): F5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D, (e:E)=>E, (f:F)=>F]) => F6<A,B,C,D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, transforms: [(a:A)=>A, (b:B)=>B, (c:C)=>C, (d:D)=>D, (e:E)=>E, (f:F)=>F]): F6<A,B,C,D,E,F,R>,
      <T:PassThroughFunc>(func: T, transforms: Array<(arg: mixed) => mixed>): T,
    };
    static partial: {
      <A,R>(func: F1<A,R>, ...None): (partials: [A]) => F0<R>,
      <A,R>(func: F1<A,R>, partials: [A]): F0<R>,
      <A,B,R>(func: F2<A,B,R>, ...None): (partials: [A]) => F1<B,R>,
      <A,B,R>(func: F2<A,B,R>, partials: [A]): F1<B,R>,
      <A,B,R>(func: F2<A,B,R>, ...None): (partials: [A,B]) => F0<R>,
      <A,B,R>(func: F2<A,B,R>, partials: [A,B]): F0<R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [A]) => F2<B,C,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [A]): F2<B,C,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [A,B]) => F1<C,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [A,B]): F1<C,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [A,B,C]) => F0<R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [A,B,C]): F0<R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [A]) => F3<B,C,D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [A]): F3<B,C,D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [A,B]) => F2<C,D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [A,B]): F2<C,D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [A,B,C]) => F1<D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [A,B,C]): F1<D,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [A,B,C,D]) => F0<R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [A,B,C,D]): F0<R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A]) => F4<B,C,D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A]): F4<B,C,D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A,B]) => F3<C,D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A,B]): F3<C,D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A,B,C]) => F2<D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A,B,C]): F2<D,E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A,B,C,D]) => F1<E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A,B,C,D]): F1<E,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A,B,C,D,E]) => F0<R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A,B,C,D,E]): F0<R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A]) => F5<B,C,D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A]): F5<B,C,D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B]) => F4<C,D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B]): F4<C,D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B,C]) => F3<D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B,C]): F3<D,E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B,C,D]) => F2<E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B,C,D]): F2<E,F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B,C,D,E]) => F1<F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B,C,D,E]): F1<F,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B,C,D,E,F]) => F0<R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B,C,D,E,F]): F0<R>,
      <R>(func: FX<R>, partials: Array<mixed>): FX<R>,
    };
    static partialRight: {
      <A,R>(func: F1<A,R>, ...None): (partials: [A]) => F0<R>,
      <A,R>(func: F1<A,R>, partials: [A]): F0<R>,
      <A,B,R>(func: F2<A,B,R>, ...None): (partials: [B]) => F1<A,R>,
      <A,B,R>(func: F2<A,B,R>, partials: [B]): F1<A,R>,
      <A,B,R>(func: F2<A,B,R>, ...None): (partials: [A,B]) => F0<R>,
      <A,B,R>(func: F2<A,B,R>, partials: [A,B]): F0<R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [C]) => F2<A,B,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [C]): F2<A,B,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [B,C]) => F1<A,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [B,C]): F1<A,R>,
      <A,B,C,R>(func: F3<A,B,C,R>, ...None): (partials: [A,B,C]) => F0<R>,
      <A,B,C,R>(func: F3<A,B,C,R>, partials: [A,B,C]): F0<R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [D]) => F3<A,B,C,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [D]): F3<A,B,C,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [C,D]) => F2<A,B,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [C,D]): F2<A,B,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [B,C,D]) => F1<A,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [B,C,D]): F1<A,R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, ...None): (partials: [A,B,C,D]) => F0<R>,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>, partials: [A,B,C,D]): F0<R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [E]) => F4<A,B,C,D,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [E]): F4<A,B,C,D,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [D,E]) => F3<A,B,C,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [D,E]): F3<A,B,C,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [C,D,E]) => F2<A,B,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [C,D,E]): F2<A,B,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [B,C,D,E]) => F1<A,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [B,C,D,E]): F1<A,R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, ...None): (partials: [A,B,C,D,E]) => F0<R>,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>, partials: [A,B,C,D,E]): F0<R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [F]) => F5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [F]): F5<A,B,C,D,E,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [E,F]) => F4<A,B,C,D,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [E,F]): F4<A,B,C,D,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [D,E,F]) => F3<A,B,C,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [D,E,F]): F3<A,B,C,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [C,D,E,F]) => F2<A,B,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [C,D,E,F]): F2<A,B,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [B,C,D,E,F]) => F1<A,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [B,C,D,E,F]): F1<A,R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, ...None): (partials: [A,B,C,D,E,F]) => F0<R>,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>, partials: [A,B,C,D,E,F]): F0<R>,
      <R>(func: FX<R>, partials: Array<mixed>): FX<R>,
    };
    // Unfortunately can't keep the argument type info as that would result in
    // an explosion of cases for each argument permutation (~700 for six args).
    static rearg: {
      <R>(indexes: Array<number>, ...None): (func: FX<R>) => (...args: Array<mixed>) => R,
      <R>(indexes: Array<number>, func: FX<R>): (...args: Array<mixed>) => R,
    };
    static rest: {
      <A,R>(func: F1<A,R>): (...rest: Array<A>) => R,
      <A,B,R>(func: F2<A,B,R>): (a: A, ...rest: Array<B>) => R,
      <A,B,C,R>(func: F3<A,B,C,R>): (a: A, b: B, ...rest: Array<C>) => R,
      <A,B,C,D,R>(func: F4<A,B,C,D,R>): (a: A, b: B, c: C, ...rest: Array<D>) => R,
      <A,B,C,D,E,R>(func: F5<A,B,C,D,E,R>): (a: A, b: B, c: C, d: D, ...rest: Array<E>) => R,
      <A,B,C,D,E,F,R>(func: F6<A,B,C,D,E,F,R>): (a: A, b: B, c: C, d: D, e: E, ...rest: Array<F>) => R,
      <R>(func: FX<R>): FX<R>,
    };
    static restFrom: {
      <A,R>(start: 0, ...None): (func: F1<A,R>) => (...rest: Array<A>) => R,
      <A,R>(start: 0, func: F1<A,R>): (...rest: Array<A>) => R,
      <A,B,R>(start: 1, ...None): (func: F2<A,B,R>) => (a: A, ...rest: Array<B>) => R,
      <A,B,R>(start: 1, func: F2<A,B,R>): (a: A, ...rest: Array<B>) => R,
      <A,B,C,R>(start: 2, ...None): (func: F3<A,B,C,R>) => (a: A, b: B, ...rest: Array<C>) => R,
      <A,B,C,R>(start: 2, func: F3<A,B,C,R>): (a: A, b: B, ...rest: Array<C>) => R,
      <A,B,C,D,R>(start: 3, ...None): (func: F4<A,B,C,D,R>) => (a: A, b: B, c: C, ...rest: Array<D>) => R,
      <A,B,C,D,R>(start: 3, func: F4<A,B,C,D,R>): (a: A, b: B, c: C, ...rest: Array<D>) => R,
      <A,B,C,D,E,R>(start: 4, ...None): (func: F5<A,B,C,D,E,R>) => (a: A, b: B, c: C, d: D, ...rest: Array<E>) => R,
      <A,B,C,D,E,R>(start: 4, func: F5<A,B,C,D,E,R>): (a: A, b: B, c: C, d: D, ...rest: Array<E>) => R,
      <A,B,C,D,E,F,R>(start: 5, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, b: B, c: C, d: D, e: E, ...rest: Array<F>) => R,
      <A,B,C,D,E,F,R>(start: 5, func: F6<A,B,C,D,E,F,R>): (a: A, b: B, c: C, d: D, e: E, ...rest: Array<F>) => R,
      <R>(start: number, func: FX<R>): FX<R>,
    };
    static spread: <T:Args,R>(func: (...args: T) => R) => (args: T) => R;
    static spreadFrom: {
      <A,R>(start: 0, ...None): (func: F1<A,R>) => (rest: [A]) => R,
      <A,R>(start: 0, func: F1<A,R>): (rest: [A]) => R,
      <A,B,R>(start: 0, ...None): (func: F2<A,B,R>) => (rest: [A,B]) => R,
      <A,B,R>(start: 0, func: F2<A,B,R>): (rest: [A,B]) => R,
      <A,B,R>(start: 1, ...None): (func: F2<A,B,R>) => (a: A, rest: [B]) => R,
      <A,B,R>(start: 1, func: F2<A,B,R>): (a: A, rest: [B]) => R,
      <A,B,C,R>(start: 0, ...None): (func: F3<A,B,C,R>) => (rest: [A,B,C]) => R,
      <A,B,C,R>(start: 0, func: F3<A,B,C,R>): (rest: [A,B,C]) => R,
      <A,B,C,R>(start: 1, ...None): (func: F3<A,B,C,R>) => (a: A, rest: [B,C]) => R,
      <A,B,C,R>(start: 1, func: F3<A,B,C,R>): (a: A, rest: [B,C]) => R,
      <A,B,C,R>(start: 2, ...None): (func: F3<A,B,C,R>) => (a: A, b: B, rest: [C]) => R,
      <A,B,C,R>(start: 2, func: F3<A,B,C,R>): (a: A, b: B, rest: [C]) => R,
      <A,B,C,D,R>(start: 0, ...None): (func: F4<A,B,C,D,R>) => (rest: [A,B,C,D]) => R,
      <A,B,C,D,R>(start: 0, func: F4<A,B,C,D,R>): (rest: [A,B,C,D]) => R,
      <A,B,C,D,R>(start: 1, ...None): (func: F4<A,B,C,D,R>) => (a: A, rest: [B,C,D]) => R,
      <A,B,C,D,R>(start: 1, func: F4<A,B,C,D,R>): (a: A, rest: [B,C,D]) => R,
      <A,B,C,D,R>(start: 2, ...None): (func: F4<A,B,C,D,R>) => (a: A, b: B, rest: [C,D]) => R,
      <A,B,C,D,R>(start: 2, func: F4<A,B,C,D,R>): (a: A, b: B, rest: [C,D]) => R,
      <A,B,C,D,R>(start: 3, ...None): (func: F4<A,B,C,D,R>) => (a: A, b: B, c: C, rest: [D]) => R,
      <A,B,C,D,R>(start: 3, func: F4<A,B,C,D,R>): (a: A, b: B, c: C, rest: [D]) => R,
      <A,B,C,D,E,R>(start: 0, ...None): (func: F5<A,B,C,D,E,R>) => (rest: [A,B,C,D,E]) => R,
      <A,B,C,D,E,R>(start: 0, func: F5<A,B,C,D,E,R>): (rest: [A,B,C,D,E]) => R,
      <A,B,C,D,E,R>(start: 1, ...None): (func: F5<A,B,C,D,E,R>) => (a: A, rest: [B,C,D,E]) => R,
      <A,B,C,D,E,R>(start: 1, func: F5<A,B,C,D,E,R>): (a: A, rest: [B,C,D,E]) => R,
      <A,B,C,D,E,R>(start: 2, ...None): (func: F5<A,B,C,D,E,R>) => (a: A, b: B, rest: [C,D,E]) => R,
      <A,B,C,D,E,R>(start: 2, func: F5<A,B,C,D,E,R>): (a: A, b: B, rest: [C,D,E]) => R,
      <A,B,C,D,E,R>(start: 3, ...None): (func: F5<A,B,C,D,E,R>) => (a: A, b: B, c: C, rest: [D,E]) => R,
      <A,B,C,D,E,R>(start: 3, func: F5<A,B,C,D,E,R>): (a: A, b: B, c: C, rest: [D,E]) => R,
      <A,B,C,D,E,R>(start: 4, ...None): (func: F5<A,B,C,D,E,R>) => (a: A, b: B, c: C, d: D, rest: [E]) => R,
      <A,B,C,D,E,R>(start: 4, func: F5<A,B,C,D,E,R>): (a: A, b: B, c: C, d: D, rest: [E]) => R,
      <A,B,C,D,E,F,R>(start: 0, ...None): (func: F6<A,B,C,D,E,F,R>) => (rest: [A,B,C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 0, func: F6<A,B,C,D,E,F,R>): (rest: [A,B,C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 1, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, rest: [B,C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 1, func: F6<A,B,C,D,E,F,R>): (a: A, rest: [B,C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 2, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, b: B, rest: [C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 2, func: F6<A,B,C,D,E,F,R>): (a: A, b: B, rest: [C,D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 3, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, b: B, c: C, rest: [D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 3, func: F6<A,B,C,D,E,F,R>): (a: A, b: B, c: C, rest: [D,E,F]) => R,
      <A,B,C,D,E,F,R>(start: 4, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, b: B, c: C, d: D, rest: [E,F]) => R,
      <A,B,C,D,E,F,R>(start: 4, func: F6<A,B,C,D,E,F,R>): (a: A, b: B, c: C, d: D, rest: [E,F]) => R,
      <A,B,C,D,E,F,R>(start: 5, ...None): (func: F6<A,B,C,D,E,F,R>) => (a: A, b: B, c: C, d: D, e: E, rest: [F]) => R,
      <A,B,C,D,E,F,R>(start: 5, func: F6<A,B,C,D,E,F,R>): (a: A, b: B, c: C, d: D, e: E, rest: [F]) => R,
      <R>(start: number, func: FX<R>): FX<R>,
    };
    static throttle: FunctionThrottle;
    static unary: <T,R>(func: (first: T, ...rest: Args) => R) => (first: T) => R;
    static wrap: {
      <T:Args,U,R>(wrapper: (value: U, ...args: T) => R, ...None): (value: U) => (...args: T) => R,
      <T:Args,U,R>(wrapper: (value: U, ...args: T) => R, value: U): (...args: T) => R,
    };

    ///////////////////
    // Lang
    ///////////////////

    static castArray: <T>(value: Array<T>|T) => Array<T>;
    static clone: <T>(value: T) => T;
    static cloneDeep: <T>(value: T) => T;
    // Could maybe set value type with $PropertyType if it ever supports arbitrary types.
    static cloneDeepWith: {
      <T,U>(customizer: CloneDeepCustomizer<T,U>, ...None): (value: T) => T,
      <T,U>(customizer: CloneDeepCustomizer<T,U>, value: T): T,
    };
    static cloneWith: {
      <T>(customizer: CloneCustomizer<T>, ...None): (value: T) => T,
      <T>(customizer: CloneCustomizer<T>, value: T): T,
    };
    static conformsTo: {
      (source: ObjMap<TypePredicate>, ...None): (object: Object) => boolean,
      (source: ObjMap<TypePredicate>, object: Object): boolean,
    };
    static eq: TypeComparator;
    static gt: TypeComparator;
    static gte: TypeComparator;
    static isArguments: TypePredicate;
    static isArray: typeof isArrayCheck;
    static isArrayBuffer: typeof isArrayBufferCheck;
    static isArrayLike: TypePredicate;
    static isArrayLikeObject: TypePredicate;
    static isBoolean: typeof isBooleanCheck;
    static isBuffer: typeof isBufferCheck;
    static isDate: typeof isDateCheck;
    static isElement: typeof isElementCheck;
    static isEmpty: TypePredicate;
    static isEqual: TypeComparator;
    static isEqualWith: {
      (customizer: EqualityCustomizer, ...None): TypeComparator,
      (customizer: EqualityCustomizer, value: mixed, ...None): (other: mixed) => boolean,
      (customizer: EqualityCustomizer, value: mixed, other: mixed): boolean,
    };
    static isError: typeof isErrorCheck;
    static isFinite: typeof isFiniteCheck;
    static isFunction: typeof isFunctionCheck;
    static isInteger: typeof isIntegerCheck;
    static isLength: typeof isLengthCheck;
    static isMap: typeof isMapCheck;
    static isMatch: ObjectMatcher;
    static isMatchWith: {
      (customizer: MatchCustomizer, ...None): ObjectMatcher,
      (customizer: MatchCustomizer, source: mixed, ...None): (object: mixed) => boolean,
      (customizer: MatchCustomizer, source: mixed, object: mixed): boolean,
    };
    static isNaN: typeof isNaNCheck;
    static isNative: TypePredicate;
    static isNil: typeof isNilCheck;
    static isNull: typeof isNullCheck;
    static isNumber: typeof isNumberCheck;
    static isObject: typeof isObjectCheck;
    static isObjectLike: typeof isObjectLikeCheck;
    static isPlainObject: typeof isPlainObjectCheck;
    static isRegExp: typeof isRegExpCheck;
    static isSafeInteger: typeof isSafeIntegerCheck;
    static isSet: typeof isSetCheck;
    static isString: typeof isStringCheck;
    static isSymbol: typeof isSymbolCheck;
    static isTypedArray: TypePredicate;
    static isUndefined: typeof isUndefinedCheck;
    static isWeakMap: typeof isWeakMapCheck;
    static isWeakSet: typeof isWeakSetCheck;
    static lt: TypeComparator;
    static lte: TypeComparator;
    static toArray: TypeConverter<Array<mixed>>;
    static toFinite: TypeConverter<number>;
    static toInteger: TypeConverter<number>;
    static toLength: TypeConverter<number>;
    static toNumber: TypeConverter<number>;
    static toPlainObject: TypeConverter<{}>;
    static toSafeInteger: TypeConverter<number>;
    static toString: TypeConverter<string>;

    ///////////////////
    // Math
    ///////////////////

    static add: MathOperation;
    static ceil: (number: number) => number;
    static divide: MathOperation;
    static floor: (number: number) => number;
    static max: (Array<number>) => number | void;
    static maxBy: MathCompareIterateeOperation;
    static mean: (Array<number>) => number;
    static meanBy: MathValueIterateeOperation;
    static min: (Array<number>) => number | void;
    static minBy: MathCompareIterateeOperation;
    static multiply: MathOperation;
    static round: (number: number) => number;
    static subtract: MathOperation;
    static sum: (Array<number>) => number;
    static sumBy: MathValueIterateeOperation;

    ///////////////////
    // Number
    ///////////////////

    static clamp: NumberBounds<number>;
    static inRange: NumberBounds<boolean>;
    static random: {
      (lower: number, ...None): (upper: number) => number,
      (lower: number, upper: number): number,
    };

    ///////////////////
    // Object
    ///////////////////

    static assign: ObjectAssign;
    static assignAll: ObjectAssignAll;
    static assignAllWith: ObjectCustomAssignAll;
    static assignIn: ObjectAssign;
    static assignInAll: ObjectAssignAll;
    static assignInAllWith: ObjectCustomAssignAll;
    static assignInWith: ObjectCustomAssign;
    static assignWith: ObjectCustomAssign;
    static at: {
      (paths: string | Array<string>, ...None): (object: Object) => Array<mixed>,
      (paths: string | Array<string>, object: Object): Array<mixed>,
    };
    static create: <T:Object>(prototype: T) => T;
    static defaults: ObjectDefault;
    static defaultsAll: ObjectDefaultAll;
    static defaultsDeep: ObjectDefault;
    static defaultsDeepAll: ObjectDefaultAll;
    static findKey: ObjectPredicateFindKey;
    static findLastKey: ObjectPredicateFindKey;
    static forIn: ObjectIterateeFor;
    static forInRight: ObjectIterateeFor;
    static forOwn: ObjectIterateeFor;
    static forOwnRight: ObjectIterateeFor;
    static functions: (object: ObjMap<mixed>) => Array<string>;
    static functionsIn: (object: ObjMap<mixed>) => Array<string>;
    // TODO: $PropertyType for return?
    static get: ObjectPathSearch<mixed>;
    static getOr: {
      (defaultValue: mixed, ...None): ObjectPathSearch<mixed>,
      (defaultValue: mixed, path: ObjPath, ...None): (object: Object) => mixed,
      (defaultValue: mixed, path: ObjPath, object: Object): mixed,
    };
    static has: ObjectPathSearch<boolean>;
    static hasIn: ObjectPathSearch<boolean>;
    static invert: (object: ObjMap<mixed>) => ObjMap<string>;
    static invertBy: {
      <T>(iteratee: (value: T) => string, ...None): (object: ObjMap<T>) => ObjMap<string>;
      <T>(iteratee: (value: T) => string, object: ObjMap<T>): ObjMap<string>;
    };
    static invoke: ObjectPathSearch<mixed>;
    static invokeArgs: {
      (path: ObjPath, ...None): {
        (args: Array<mixed>, ...None): (object: Object) => mixed,
        (args: Array<mixed>, object: Object): mixed,
      },
      (path: ObjPath, args: Array<mixed>, ...None): (object: Object) => mixed,
      (path: ObjPath, args: Array<mixed>, object: Object): mixed,
    };
    static keys: (object: Object) => Array<string>;
    static keysIn: (object: Object) => Array<string>;
    static mapKeys: {
      <T>(iteratee: (key: string) => string, ...None): (object: ObjMap<T>) => ObjMap<T>,
      <T>(iteratee: (key: string) => string, object: ObjMap<T>): ObjMap<T>,
    };
    static mapValues: {
      <T,R>(iteratee: MapIteratee<T,R>, ...None): (object: ObjMap<T>) => ObjMap<R>,
      <T,R>(iteratee: MapIteratee<T,R>, object: ObjMap<T>): ObjMap<R>,
    };
    static merge: ObjectAssign;
    static mergeAll: <T:ObjMap<mixed>>(objects: T) => T;
    static mergeAllWith: ObjectCustomAssignAll;
    static mergeWith: ObjectCustomAssign;
    static omit: ObjectFilter;
    static omitBy: ObjectPredicateFilter;
    static pick: ObjectFilter;
    static pickBy: ObjectPredicateFilter;
    static result: ObjectPathSearch<mixed>;
    static set: {
      <T:ObjMap<mixed>>(path: ObjPath, ...None): {
        (value: mixed, ...None): (object: T) => T,
        (value: mixed, object: T): T,
      },
      <T:ObjMap<mixed>>(path: ObjPath, value: mixed, ...None): (object: T) => T,
      <T:ObjMap<mixed>>(path: ObjPath, value: mixed, object: T): T,
    };
    static setWith: {
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, ...None): {
        (path: ObjPath, ...None): SetWithCurried2<T>,
        (path: ObjPath, value: mixed, ...None): (object: T) => T,
        (path: ObjPath, value: mixed, object: T): T,
      },
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, ...None): SetWithCurried2<T>,
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, value: mixed, ...None): (object: T) => T,
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, value: mixed, object: T): T,
    };
    static toPairs: ObjectPairs;
    static toPairsIn: ObjectPairs;
    static transform: {
      <T,R>(iteratee: TransformIteratee<T,R>, ...None): {
        (accumulator: R, ...None): (object: ObjMap<T>) => R,
        (accumulator: R, object: ObjMap<T>): R,
      },
      <T,R>(iteratee: TransformIteratee<T,R>, accumulator: R, ...None): (object: ObjMap<T>) => R,
      <T,R>(iteratee: TransformIteratee<T,R>, accumulator: R, object: ObjMap<T>): R,
    };
    static unset: ObjectPathSearch<boolean>;
    static update: {
      <T:ObjMap<mixed>>(path: ObjPath, ...None): UpdateCurried2<T>,
      <T:ObjMap<mixed>>(path: ObjPath, updater: UpdateIteratee, object: T): T,
      <T:ObjMap<mixed>>(path: ObjPath, updater: UpdateIteratee, object: T): T,
    };
    static updateWith: {
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, ...None): {
        (customizer: ObjectUpdateCustomizer, ...None): UpdateCurried2<T>,
        (customizer: ObjectUpdateCustomizer, updater: UpdateIteratee, ...None): (object: T) => T,
        (customizer: ObjectUpdateCustomizer, updater: UpdateIteratee, object: T): T,
      },
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, ...None): UpdateCurried2<T>,
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, updater: UpdateIteratee, ...None): (object: T) => T,
      <T:ObjMap<mixed>>(customizer: ObjectUpdateCustomizer, path: ObjPath, updater: UpdateIteratee, object: T): T,
    };
    static values: <T>(object: ObjMap<T>) => Array<T>;
    static valuesIn: <T>(object: ObjMap<T>) => Array<T>;

    ///////////////////
    // String
    ///////////////////

    static camelCase: StringMap;
    static capitalize: StringMap;
    static deburr: StringMap;
    static endsWith: StringMatch;
    static escape: StringMap;
    static escapeRegExp: StringMap;
    static kebabCase: StringMap;
    static lowerCase: StringMap;
    static lowerFirst: StringMap;
    static pad: StringPad;
    static padChars: StringPadChars;
    static padCharsEnd: StringPadChars;
    static padCharsStart: StringPadChars;
    static padEnd: StringPad;
    static padStart: StringPad;
    static parseInt: {
      (radix: number, ...None): (string: string) => number,
      (radix: number, string: string): number,
    };
    static repeat: {
      (n: number, ...None): (string: string) => string,
      (n: number, string: string): string,
    };
    static replace: {
      (pattern: StringPattern, ...None): {
        (replacement: string|StringMap, ...None): (string: string) => string,
        (replacement: string|StringMap, string: string): string,
      },
      (pattern: StringPattern, replacement: string|StringMap, ...None): (string: string) => string,
      (pattern: StringPattern, replacement: string|StringMap, string: string): string,
    };
    static snakeCase: StringMap;
    static split: {
      (sparator: StringPattern, ...None): (string: string) => string,
      (sparator: StringPattern, string: string): string,
    };
    static startCase: StringMap;
    static startsWith: StringMatch;
    static template: (string: string) => (data: ObjMap<mixed>) => string;
    static toLower: StringMap;
    static toUpper: StringMap;
    static trim: StringMap;
    static trimChars: StringTrimChars;
    static trimCharsEnd: StringTrimChars;
    static trimCharsStart: StringTrimChars;
    static trimEnd: StringMap;
    static trimStart: StringMap;
    static truncate: {
      (options: TruncateOptions, ...None): (string: string) => string,
      (options: TruncateOptions, string: string): string,
    };
    static unescape: StringMap;
    static upperCase: StringMap;
    static upperFirst: StringMap;
    static words: (string: string) => Array<string>;

    ///////////////////
    // Util
    ///////////////////

    static attempt: <R>(func: () => R) => R | Error;
    static bindAll: {
      <T,U:ObjMap<T>>(methodNames: string|Array<string>, ...None): (object: U) => U,
      <T,U:ObjMap<T>>(methodNames: string|Array<string>, object: U): U,
    };
    static cond: <T,R>(Array<[(value: T) => boolean, (value: T) => R]>) => (value: T) => R;
    static conforms: <T,U:ObjMap<(value: T) => boolean>>(source: U) => (object: ObjMap<T>) => boolean;
    static constant: <T>(value: T) => () => T;
    static defaultTo: {
      <T>(value: void | null | T, ...None): (defaultValue: T) => T,
      <T>(value: void | null | T, defaultValue: T): T,
    };
    static flow: {
      <A,R>(ar: (a:A)=>R, ...None): (a:A)=>R,
      <A,B,R>(ab: (a:A)=>B, br: (b:B)=>R, ...None): (a:A)=>R,
      <A,B,C,R>(ab: (a:A)=>B, bc: (b:B)=>C, cr: (c:C)=>R, ...None): (a:A)=>R,
      <A,B,C,D,R>(ab: (a:A)=>B, bc: (b:B)=>C, cd: (c:C)=>D, dr: (d:D)=>R, ...None): (a:A)=>R,
      <A,B,C,D,E,R>(ab: (a:A)=>B, bc: (b:B)=>C, cd: (c:C)=>D, de: (d:D)=>E, er: (e:E)=>R, ...None): (a:A)=>R,
      <A,B,C,D,E,F,R>(ab: (a:A)=>B, bc: (b:B)=>C, cd: (c:C)=>D, de: (d:D)=>E, ef: (e:E)=>F, fr: (f:F)=>R, ...None): (a:A)=>R,
      <A>(a: (a: A) => mixed, ...Args): (a: A) => mixed,
    };
    static flowRight: {
      <A,R>(ar: (a:A)=>R, ...None): (a:A)=>R,
      <A,B,R>(br: (b:B)=>R, ab: (a:A)=>B, ...None): (a:A)=>R,
      <A,B,C,R>(cr: (c:C)=>R, bc: (b:B)=>C, ab: (a:A)=>B, ...None): (a:A)=>R,
      <A,B,C,D,R>(dr: (d:D)=>R, cd: (c:C)=>D, bc: (b:B)=>C, ab: (a:A)=>B, ...None): (a:A)=>R,
      <A,B,C,D,E,R>(er: (e:E)=>R, de: (d:D)=>E, cd: (c:C)=>D, bc: (b:B)=>C, ab: (a:A)=>B, ...None): (a:A)=>R,
      <A,B,C,D,E,F,R>(fr: (f:F)=>R, ef: (e:E)=>F, de: (d:D)=>E, cd: (c:C)=>D, bc: (b:B)=>C, ab: (a:A)=>B, ...None): (a:A)=>R,
      (...Args): (a: mixed) => mixed,
    };
    static identity: <T>(value: T) => T;
    static iteratee: {
      <T:PassThroughFunc>(func: T): T,
      (func: propertyIterateeShorthand): (object: Object) => mixed,
      (func: matchesIterateeShorthand | matchesPropertyIterateeShorthand): (object: Object) => boolean,
    };
    static matches: (source: Object) => (object: Object) => boolean;
    static matchesProperty: {
      (path: ObjPath, ...None): (srcValue: mixed) => (object: Object) => boolean,
      (path: ObjPath, srcValue: mixed): (object: Object) => boolean,
    };
    static method: (path: ObjPath) => (object: Object) => mixed;
    static methodOf: (object: Object) => (path: ObjPath) => mixed;
    static mixin: (object: Object) => typeof _;
    static noConflict: () => typeof _;
    static noop: () => void;
    static nthArg: {
      <R>(n: 0): (a: R, ...Args) => R,
      <R>(n: 1): (a: *, b: R, ...Args) => R,
      <R>(n: 2): (a: *, b: *, c: R, ...Args) => R,
      <R>(n: 3): (a: *, b: *, c: *, d: R, ...Args) => R,
      <R>(n: 4): (a: *, b: *, c: *, d: *, e: R, ...Args) => R,
      <R>(n: 5): (a: *, b: *, c: *, d: *, e: *, f: R, ...Args) => R,
      (n: number): (...Args) => mixed,
    };
    static over: <T:Args,R,U:(...T)=>R>(iteratees: U|Array<U>) => (...T) => Array<R>;
    static overEvery: UtilPredicateOver;
    static overSome: UtilPredicateOver;
    static property: (path: ObjPath) => (object: Object) => mixed;
    static propertyOf: (object: Object) => (path: ObjPath) => mixed;
    static range: UtilRange;
    static rangeStep: UtilRangeStep;
    static rangeRight: UtilRange;
    static rangeStepRight: UtilRangeStep;
    static runInContext: (context: Object) => typeof _;
    static stubArray: () => Array<mixed>;
    static stubFalse: () => false;
    static stubObject: () => Object;
    static stubString: () => string;
    static stubTrue: () => true;
    static times: {
      <R>(iteratee: (index: number) => R, ...None): (n: number) => Array<R>,
      <R>(iteratee: (index: number) => R, n: number): Array<R>,
    };
    static toPath: (value: mixed) => Array<string>;
    static uniqueId: (prefix: string) => string;

    ///////////////////
    // Properties
    ///////////////////

    static VERSION: string;
    static templateSettings: {|
      escape?: RegExp,
      evaluate?: RegExp,
      imports?: Object,
      interpolate?: RegExp,
      variable?: string,
    |};

    ///////////////////
    // Aliases
    ///////////////////

    static F: typeof _.stubFalse;
    static T: typeof _.stubTrue;
    static __: typeof _.placeholder;
    static all: typeof _.every;
    static allPass: typeof _.overEvery;
    static always: typeof _.constant;
    static any: typeof _.some;
    static anyPass: typeof _.overSome;
    static apply: typeof _.spread;
    static assoc: typeof _.set;
    static assocPath: typeof _.set;
    static complement: typeof _.negate;
    static compose: typeof _.flowRight;
    static conforms: typeof _.conformsTo;
    static contains: typeof _.includes;
    static dissoc: typeof _.unset;
    static dissocPath: typeof _.unset;
    static dropLast: typeof _.dropRight;
    static dropLastWhile: typeof _.dropRightWhile;
    static each: typeof _.forEach;
    static eachRight: typeof _.forEachRight;
    static entries: typeof _.toPairs;
    static entriesIn: typeof _.toPairsIn;
    static equals: typeof _.isEqual;
    static extend: typeof _.assignIn;
    static extendAll: typeof _.assignInAll;
    static extendAllWith: typeof _.assignInAllWith;
    static extendWith: typeof _.assignInWith;
    static first: typeof _.head;
    static identical: typeof _.eq;
    static indexBy: typeof _.keyBy;
    static init: typeof _.initial;
    static invertObj: typeof _.invert;
    static juxt: typeof _.over;
    static matches: typeof _.isMatch;
    static nAry: typeof _.ary;
    static omitAll: typeof _.omit;
    static path: typeof _.get;
    static pathEq: typeof _.matchesProperty;
    static pathOr: typeof _.getOr;
    static paths: typeof _.at;
    static pickAll: typeof _.pick;
    static pipe: typeof _.flow;
    static placeholder: typeof _;
    static pluck: typeof _.map;
    static prop: typeof _.get;
    static propEq: typeof _.matchesProperty;
    static propOr: typeof _.getOr;
    static property: typeof _.get;
    static props: typeof _.at;
    static symmetricDifference: typeof _.xor;
    static symmetricDifferenceBy: typeof _.xorBy;
    static symmetricDifferenceWith: typeof _.xorWith;
    static takeLast: typeof _.takeRight;
    static takeLastWhile: typeof _.takeRightWhile;
    static unapply: typeof _.rest;
    static unnest: typeof _.flatten;
    static useWith: typeof _.overArgs;
    static where: typeof _.conformsTo;
    static whereEq: typeof _.isMatch;
    static zipObj: typeof _.zipObject;
  }

  declare export default typeof _;
  declare export var __: typeof _.__;
  declare export var add: typeof _.add;
  declare export var after: typeof _.after;
  declare export var all: typeof _.all;
  declare export var allPass: typeof _.allPass;
  declare export var always: typeof _.always;
  declare export var any: typeof _.some; // Doesn't like _.any for some reason.
  declare export var anyPass: typeof _.anyPass;
  declare export var apply: typeof _.apply;
  declare export var ary: typeof _.ary;
  declare export var assign: typeof _.assign;
  declare export var assignAll: typeof _.assignAll;
  declare export var assignAllWith: typeof _.assignAllWith;
  declare export var assignIn: typeof _.assignIn;
  declare export var assignInAll: typeof _.assignInAll;
  declare export var assignInAllWith: typeof _.assignInAllWith;
  declare export var assignInWith: typeof _.assignInWith;
  declare export var assignWith: typeof _.assignWith;
  declare export var assoc: typeof _.assoc;
  declare export var assocPath: typeof _.assocPath;
  declare export var at: typeof _.at;
  declare export var attempt: typeof _.attempt;
  declare export var before: typeof _.before;
  declare export var bind: typeof _.bind;
  declare export var bindAll: typeof _.bindAll;
  declare export var bindKey: typeof _.bindKey;
  declare export var camelCase: typeof _.camelCase;
  declare export var capitalize: typeof _.capitalize;
  declare export var castArray: typeof _.castArray;
  declare export var ceil: typeof _.ceil;
  declare export var chunk: typeof _.chunk;
  declare export var clamp: typeof _.clamp;
  declare export var clone: typeof _.clone;
  declare export var cloneDeep: typeof _.cloneDeep;
  declare export var cloneDeepWith: typeof _.cloneDeepWith;
  declare export var cloneWith: typeof _.cloneWith;
  declare export var compact: typeof _.compact;
  declare export var complement: typeof _.complement;
  declare export var compose: typeof _.compose;
  declare export var concat: typeof _.concat;
  declare export var cond: typeof _.cond;
  declare export var conforms: typeof _.conforms;
  declare export var conformsTo: typeof _.conformsTo;
  declare export var constant: typeof _.constant;
  declare export var contains: typeof _.contains;
  declare export var countBy: typeof _.countBy;
  declare export var create: typeof _.create;
  declare export var curry: typeof _.curry;
  declare export var curryN: typeof _.curryN;
  declare export var curryRight: typeof _.curryRight;
  declare export var curryRightN: typeof _.curryRightN;
  declare export var debounce: typeof _.debounce;
  declare export var deburr: typeof _.deburr;
  declare export var defaults: typeof _.defaults;
  declare export var defaultsAll: typeof _.defaultsAll;
  declare export var defaultsDeep: typeof _.defaultsDeep;
  declare export var defaultsDeepAll: typeof _.defaultsDeepAll;
  declare export var defaultTo: typeof _.defaultTo;
  declare export var defer: typeof _.defer;
  declare export var delay: typeof _.delay;
  declare export var difference: typeof _.difference;
  declare export var differenceBy: typeof _.differenceBy;
  declare export var differenceWith: typeof _.differenceWith;
  declare export var dissoc: typeof _.dissoc;
  declare export var dissocPath: typeof _.dissocPath;
  declare export var divide: typeof _.divide;
  declare export var drop: typeof _.drop;
  declare export var dropLast: typeof _.dropLast;
  declare export var dropLastWhile: typeof _.dropLastWhile;
  declare export var dropRight: typeof _.dropRight;
  declare export var dropRightWhile: typeof _.dropRightWhile;
  declare export var dropWhile: typeof _.dropWhile;
  declare export var each: typeof _.each;
  declare export var eachRight: typeof _.eachRight;
  declare export var endsWith: typeof _.endsWith;
  declare export var entries: typeof _.entries;
  declare export var entriesIn: typeof _.entriesIn;
  declare export var eq: typeof _.eq;
  declare export var equals: typeof _.equals;
  declare export var escape: typeof _.escape;
  declare export var escapeRegExp: typeof _.escapeRegExp;
  declare export var every: typeof _.every;
  declare export var extend: typeof _.extend;
  declare export var extendAll: typeof _.extendAll;
  declare export var extendAllWith: typeof _.extendAllWith;
  declare export var extendWith: typeof _.extendWith;
  declare export var F: typeof _.F;
  declare export var fill: typeof _.fill;
  declare export var filter: typeof _.filter;
  declare export var find: typeof _.find;
  declare export var findFrom: typeof _.findFrom;
  declare export var findIndex: typeof _.findIndex;
  declare export var findIndexFrom: typeof _.findIndexFrom;
  declare export var findKey: typeof _.findKey;
  declare export var findLast: typeof _.findLast;
  declare export var findLastFrom: typeof _.findLastFrom;
  declare export var findLastIndex: typeof _.findLastIndex;
  declare export var findLastIndexFrom: typeof _.findLastIndexFrom;
  declare export var findLastKey: typeof _.findLastKey;
  declare export var first: typeof _.first;
  declare export var flatMap: typeof _.flatMap;
  declare export var flatMapDeep: typeof _.flatMapDeep;
  declare export var flatMapDepth: typeof _.flatMapDepth;
  declare export var flatten: typeof _.flatten;
  declare export var flattenDeep: typeof _.flattenDeep;
  declare export var flattenDepth: typeof _.flattenDepth;
  declare export var flip: typeof _.flip;
  declare export var floor: typeof _.floor;
  declare export var flow: typeof _.flow;
  declare export var flowRight: typeof _.flowRight;
  declare export var forEach: typeof _.forEach;
  declare export var forEachRight: typeof _.forEachRight;
  declare export var forIn: typeof _.forIn;
  declare export var forInRight: typeof _.forInRight;
  declare export var forOwn: typeof _.forOwn;
  declare export var forOwnRight: typeof _.forOwnRight;
  declare export var fromPairs: typeof _.fromPairs;
  declare export var functions: typeof _.functions;
  declare export var functionsIn: typeof _.functionsIn;
  declare export var get: typeof _.get;
  declare export var getOr: typeof _.getOr;
  declare export var groupBy: typeof _.groupBy;
  declare export var gt: typeof _.gt;
  declare export var gte: typeof _.gte;
  declare export var has: typeof _.has;
  declare export var hasIn: typeof _.hasIn;
  declare export var head: typeof _.head;
  declare export var identical: typeof _.identical;
  declare export var identity: typeof _.identity;
  declare export var includes: typeof _.includes;
  declare export var includesFrom: typeof _.includesFrom;
  declare export var indexBy: typeof _.indexBy;
  declare export var indexOf: typeof _.indexOf;
  declare export var indexOfFrom: typeof _.indexOfFrom;
  declare export var init: typeof _.init;
  declare export var initial: typeof _.initial;
  declare export var inRange: typeof _.inRange;
  declare export var intersection: typeof _.intersection;
  declare export var intersectionBy: typeof _.intersectionBy;
  declare export var intersectionWith: typeof _.intersectionWith;
  declare export var invert: typeof _.invert;
  declare export var invertBy: typeof _.invertBy;
  declare export var invertObj: typeof _.invertObj;
  declare export var invoke: typeof _.invoke;
  declare export var invokeArgs: typeof _.invokeArgs;
  declare export var invokeArgsMap: typeof _.invokeArgsMap;
  declare export var invokeMap: typeof _.invokeMap;
  declare export var isArguments: typeof _.isArguments;
  declare export var isArray: typeof _.isArray;
  declare export var isArrayBuffer: typeof _.isArrayBuffer;
  declare export var isArrayLike: typeof _.isArrayLike;
  declare export var isArrayLikeObject: typeof _.isArrayLikeObject;
  declare export var isBoolean: typeof _.isBoolean;
  declare export var isBuffer: typeof _.isBuffer;
  declare export var isDate: typeof _.isDate;
  declare export var isElement: typeof _.isElement;
  declare export var isEmpty: typeof _.isEmpty;
  declare export var isEqual: typeof _.isEqual;
  declare export var isEqualWith: typeof _.isEqualWith;
  declare export var isError: typeof _.isError;
  declare export var isFinite: typeof _.isFinite;
  declare export var isFunction: typeof _.isFunction;
  declare export var isInteger: typeof _.isInteger;
  declare export var isLength: typeof _.isLength;
  declare export var isMap: typeof _.isMap;
  declare export var isMatch: typeof _.isMatch;
  declare export var isMatchWith: typeof _.isMatchWith;
  declare export var isNaN: typeof _.isNaN;
  declare export var isNative: typeof _.isNative;
  declare export var isNil: typeof _.isNil;
  declare export var isNull: typeof _.isNull;
  declare export var isNumber: typeof _.isNumber;
  declare export var isObject: typeof _.isObject;
  declare export var isObjectLike: typeof _.isObjectLike;
  declare export var isPlainObject: typeof _.isPlainObject;
  declare export var isRegExp: typeof _.isRegExp;
  declare export var isSafeInteger: typeof _.isSafeInteger;
  declare export var isSet: typeof _.isSet;
  declare export var isString: typeof _.isString;
  declare export var isSymbol: typeof _.isSymbol;
  declare export var isTypedArray: typeof _.isTypedArray;
  declare export var isUndefined: typeof _.isUndefined;
  declare export var isWeakMap: typeof _.isWeakMap;
  declare export var isWeakSet: typeof _.isWeakSet;
  declare export var iteratee: typeof _.iteratee;
  declare export var join: typeof _.join;
  declare export var juxt: typeof _.juxt;
  declare export var kebabCase: typeof _.kebabCase;
  declare export var keyBy: typeof _.keyBy;
  declare export var keys: typeof _.keys;
  declare export var keysIn: typeof _.keysIn;
  declare export var last: typeof _.last;
  declare export var lastIndexOf: typeof _.lastIndexOf;
  declare export var lastIndexOfFrom: typeof _.lastIndexOfFrom;
  declare export var lowerCase: typeof _.lowerCase;
  declare export var lowerFirst: typeof _.lowerFirst;
  declare export var lt: typeof _.lt;
  declare export var lte: typeof _.lte;
  declare export var map: typeof _.map;
  declare export var mapKeys: typeof _.mapKeys;
  declare export var mapValues: typeof _.mapValues;
  declare export var matches: typeof _.matches;
  declare export var matchesProperty: typeof _.matchesProperty;
  declare export var max: typeof _.max;
  declare export var maxBy: typeof _.maxBy;
  declare export var mean: typeof _.mean;
  declare export var meanBy: typeof _.meanBy;
  declare export var memoize: typeof _.memoize;
  declare export var merge: typeof _.merge;
  declare export var mergeAll: typeof _.mergeAll;
  declare export var mergeAllWith: typeof _.mergeAllWith;
  declare export var mergeWith: typeof _.mergeWith;
  declare export var method: typeof _.method;
  declare export var methodOf: typeof _.methodOf;
  declare export var min: typeof _.min;
  declare export var minBy: typeof _.minBy;
  declare export var mixin: typeof _.mixin;
  declare export var multiply: typeof _.multiply;
  declare export var nAry: typeof _.nAry;
  declare export var negate: typeof _.negate;
  declare export var noConflict: typeof _.noConflict;
  declare export var noop: typeof _.noop;
  declare export var now: typeof _.now;
  declare export var nth: typeof _.nth;
  declare export var nthArg: typeof _.nthArg;
  declare export var omit: typeof _.omit;
  declare export var omitAll: typeof _.omitAll;
  declare export var omitBy: typeof _.omitBy;
  declare export var once: typeof _.once;
  declare export var orderBy: typeof _.orderBy;
  declare export var over: typeof _.over;
  declare export var overArgs: typeof _.overArgs;
  declare export var overEvery: typeof _.overEvery;
  declare export var overSome: typeof _.overSome;
  declare export var pad: typeof _.pad;
  declare export var padChars: typeof _.padChars;
  declare export var padCharsEnd: typeof _.padCharsEnd;
  declare export var padCharsStart: typeof _.padCharsStart;
  declare export var padEnd: typeof _.padEnd;
  declare export var padStart: typeof _.padStart;
  declare export var parseInt: typeof _.parseInt;
  declare export var partial: typeof _.partial;
  declare export var partialRight: typeof _.partialRight;
  declare export var partition: typeof _.partition;
  declare export var path: typeof _.path;
  declare export var pathEq: typeof _.pathEq;
  declare export var pathOr: typeof _.pathOr;
  declare export var paths: typeof _.paths;
  declare export var pick: typeof _.pick;
  declare export var pickAll: typeof _.pickAll;
  declare export var pickBy: typeof _.pickBy;
  declare export var pipe: typeof _.pipe;
  declare export var placeholder: typeof _.placeholder;
  declare export var pluck: typeof _.pluck;
  declare export var prop: typeof _.prop;
  declare export var propEq: typeof _.propEq;
  declare export var property: typeof _.property;
  declare export var propertyOf: typeof _.propertyOf;
  declare export var propOr: typeof _.propOr;
  declare export var props: typeof _.props;
  declare export var pull: typeof _.pull;
  declare export var pullAll: typeof _.pullAll;
  declare export var pullAllBy: typeof _.pullAllBy;
  declare export var pullAllWith: typeof _.pullAllWith;
  declare export var pullAt: typeof _.pullAt;
  declare export var random: typeof _.random;
  declare export var range: typeof _.range;
  declare export var rangeRight: typeof _.rangeRight;
  declare export var rangeStep: typeof _.rangeStep;
  declare export var rangeStepRight: typeof _.rangeStepRight;
  declare export var rearg: typeof _.rearg;
  declare export var reduce: typeof _.reduce;
  declare export var reduceRight: typeof _.reduceRight;
  declare export var reject: typeof _.reject;
  declare export var remove: typeof _.remove;
  declare export var repeat: typeof _.repeat;
  declare export var replace: typeof _.replace;
  declare export var rest: typeof _.rest;
  declare export var restFrom: typeof _.restFrom;
  declare export var result: typeof _.result;
  declare export var reverse: typeof _.reverse;
  declare export var round: typeof _.round;
  declare export var runInContext: typeof _.runInContext;
  declare export var sample: typeof _.sample;
  declare export var sampleSize: typeof _.sampleSize;
  declare export var set: typeof _.set;
  declare export var setWith: typeof _.setWith;
  declare export var shuffle: typeof _.shuffle;
  declare export var size: typeof _.size;
  declare export var slice: typeof _.slice;
  declare export var snakeCase: typeof _.snakeCase;
  declare export var some: typeof _.some;
  declare export var sortBy: typeof _.sortBy;
  declare export var sortedIndex: typeof _.sortedIndex;
  declare export var sortedIndexBy: typeof _.sortedIndexBy;
  declare export var sortedIndexOf: typeof _.sortedIndexOf;
  declare export var sortedLastIndex: typeof _.sortedLastIndex;
  declare export var sortedLastIndexBy: typeof _.sortedLastIndexBy;
  declare export var sortedLastIndexOf: typeof _.sortedLastIndexOf;
  declare export var sortedUniq: typeof _.sortedUniq;
  declare export var sortedUniqBy: typeof _.sortedUniqBy;
  declare export var split: typeof _.split;
  declare export var spread: typeof _.spread;
  declare export var spreadFrom: typeof _.spreadFrom;
  declare export var startCase: typeof _.startCase;
  declare export var startsWith: typeof _.startsWith;
  declare export var stubArray: typeof _.stubArray;
  declare export var stubFalse: typeof _.stubFalse;
  declare export var stubObject: typeof _.stubObject;
  declare export var stubString: typeof _.stubString;
  declare export var stubTrue: typeof _.stubTrue;
  declare export var subtract: typeof _.subtract;
  declare export var sum: typeof _.sum;
  declare export var sumBy: typeof _.sumBy;
  declare export var symmetricDifference: typeof _.symmetricDifference;
  declare export var symmetricDifferenceBy: typeof _.symmetricDifferenceBy;
  declare export var symmetricDifferenceWith: typeof _.symmetricDifferenceWith;
  declare export var T: typeof _.T;
  declare export var tail: typeof _.tail;
  declare export var take: typeof _.take;
  declare export var takeLast: typeof _.takeLast;
  declare export var takeLastWhile: typeof _.takeLastWhile;
  declare export var takeRight: typeof _.takeRight;
  declare export var takeRightWhile: typeof _.takeRightWhile;
  declare export var takeWhile: typeof _.takeWhile;
  declare export var template: typeof _.template;
  declare export var templateSettings: typeof _.templateSettings;
  declare export var throttle: typeof _.throttle;
  declare export var times: typeof _.times;
  declare export var toArray: typeof _.toArray;
  declare export var toFinite: typeof _.toFinite;
  declare export var toInteger: typeof _.toInteger;
  declare export var toLength: typeof _.toLength;
  declare export var toLower: typeof _.toLower;
  declare export var toNumber: typeof _.toNumber;
  declare export var toPairs: typeof _.toPairs;
  declare export var toPairsIn: typeof _.toPairsIn;
  declare export var toPath: typeof _.toPath;
  declare export var toPlainObject: typeof _.toPlainObject;
  declare export var toSafeInteger: typeof _.toSafeInteger;
  declare export var toString: typeof _.toString;
  declare export var toUpper: typeof _.toUpper;
  declare export var transform: typeof _.transform;
  declare export var trim: typeof _.trim;
  declare export var trimChars: typeof _.trimChars;
  declare export var trimCharsEnd: typeof _.trimCharsEnd;
  declare export var trimCharsStart: typeof _.trimCharsStart;
  declare export var trimEnd: typeof _.trimEnd;
  declare export var trimStart: typeof _.trimStart;
  declare export var truncate: typeof _.truncate;
  declare export var unapply: typeof _.unapply;
  declare export var unary: typeof _.unary;
  declare export var unescape: typeof _.unescape;
  declare export var union: typeof _.union;
  declare export var unionBy: typeof _.unionBy;
  declare export var unionWith: typeof _.unionWith;
  declare export var uniq: typeof _.uniq;
  declare export var uniqBy: typeof _.uniqBy;
  declare export var uniqueId: typeof _.uniqueId;
  declare export var uniqWith: typeof _.uniqWith;
  declare export var unnest: typeof _.unnest;
  declare export var unset: typeof _.unset;
  declare export var unzip: typeof _.unzip;
  declare export var unzipWith: typeof _.unzipWith;
  declare export var update: typeof _.update;
  declare export var updateWith: typeof _.updateWith;
  declare export var upperCase: typeof _.upperCase;
  declare export var upperFirst: typeof _.upperFirst;
  declare export var useWith: typeof _.useWith;
  declare export var values: typeof _.values;
  declare export var valuesIn: typeof _.valuesIn;
  declare export var VERSION: typeof _.VERSION;
  declare export var where: typeof _.where;
  declare export var whereEq: typeof _.whereEq;
  declare export var without: typeof _.without;
  declare export var words: typeof _.words;
  declare export var wrap: typeof _.wrap;
  declare export var xor: typeof _.xor;
  declare export var xorBy: typeof _.xorBy;
  declare export var xorWith: typeof _.xorWith;
  declare export var zip: typeof _.zip;
  declare export var zipAll: typeof _.zipAll;
  declare export var zipObj: typeof _.zipObj;
  declare export var zipObject: typeof _.zipObject;
  declare export var zipObjectDeep: typeof _.zipObjectDeep;
  declare export var zipWith: typeof _.zipWith;
}
