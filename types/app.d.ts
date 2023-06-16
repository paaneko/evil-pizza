declare global {
  /**
   * Custom utility types
   */

  /**
   * Type aliases
   */
  export type Phone = string;

  export type Email = string;

  export type Penny = number;

  export type Gram = number;

  export type Id = number;

  export type Path = string;

  /**
   * 🔗 nukeapp
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */

  declare type RootState = import('../src/app/appStore').RootState;

  declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}

export {};
