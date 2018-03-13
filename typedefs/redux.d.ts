import * as redux from "redux";

// Need these for a) enforcing stricter types (for actions and explicit state)
// and b) to deal with this issue: https://github.com/reactjs/redux/issues/2709
declare module "redux" {
  export interface Reducer2<S, A> {
    (state: S, action: A): S;
  }

  type ReducersMapObject2<S, A> = { [P in keyof S]: Reducer2<S[P], A> };

  export function combineReducers<S, A extends Action>(
    reducers: ReducersMapObject2<S, A>,
  ): Reducer2<S, A>;

  export interface StoreCreator {
    <S, A extends Action>(
      reducer: Reducer2<S, A>,
      enhancer?: StoreEnhancer<S>,
    ): Store<S>;
    <S, A extends Action>(
      reducer: Reducer2<S, A>,
      preloadedState: Partial<S>,
      enhancer?: StoreEnhancer<S>,
    ): Store<S>;
  }
}
