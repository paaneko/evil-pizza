import type { IndigrientType } from '../model/types';

export function getIngredientString(ingredients: IndigrientType[]): string {
  return ingredients.map((ingredient) => ingredient.name).join(', ');
}
