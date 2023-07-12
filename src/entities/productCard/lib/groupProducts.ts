import type { GroupedProductType, ProductType } from '../model/types';

/**
 * A function that categorizes an array of products
 */

export function groupProducts(products: ProductType[]): GroupedProductType[] {
  const filteredProducts = products.reduce<
    Record<string, { categoryName: string; products: ProductType[] }>
  >((acc, product) => {
    const { name: categoryName } = product.category;

    /**
     * Use a hash table to reduce the complexity of category checking
     * in acc до O(1)
     *
     * Before that I use findIndex, which does this for O(n)
     */
    if (categoryName in acc) {
      acc[categoryName].products.push(product);
    } else {
      acc[categoryName] = { categoryName, products: [product] };
    }

    return acc;
  }, {});

  /**
   * Transform the hash-table into an array of objects,
   * and add subCategoriesList to each object in the array
   */
  return Object.values(filteredProducts).map((group) => {
    return {
      ...group,
      subCategoriesList: Array.from(
        new Set(group.products.map((product) => product.subCategory.name))
      ),
    } as GroupedProductType;
  });
}
