declare global {
  /**
   * Custom utility types
   */

  /**
   * 🔗 nukeapp
   * ✅ DX Best Practice
   * Use branded type to entity id to
   * don't to be confused with other identifiers
   */

  export type Brand<K, T> = K & { [_brand]: T };

  /**
   * Type aliases
   */
  export type Phone = string;

  export type Email = string;

  export type Penny = number;

  export type Gram = number;

  export type Id = number;

  export type Path = string;

  export type Slug = string;

  export type Hash = string;

  export type CartVersion = 'valid' | 'invalid';

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
