export type ProductId = Brand<Id, 'ProductId'>;

export type CategoryId = Brand<Id, 'CategoryId'>;

export type SubCategoryId = Brand<Id, 'SubCategoryId'>;

export type DoughSpecId = Brand<Id, 'DoughSpecId'>;

export type SizeSpecId = Brand<Id, 'SizeSpecId'>;

export type IndigrientId = Brand<Id, 'IndigrientId'>;

export type ToppingId = Brand<Id, 'ToppingId'>;

// TODO delete unused props from here and DTO
//  e.g categoryId and subCategoryId duplications

export type ProductType = {
  id: ProductId;
  name: string;
  categoryId: CategoryId;
  subCategoryId: SubCategoryId;
  oldPrice: Penny;
  newPrice: Penny;
  weight: Gram;
  purchasesCount: number;
  thumbnail: Path;
  slug: Slug;
  selectedSizeId: SizeSpecId;
  selectedDoughId: DoughSpecId | null;
  category: {
    id: CategoryId;
    name: string;
    slug: Slug;
  };
  subCategory: {
    id: SubCategoryId;
    name: string;
    slug: Slug;
  };
  doughSpecs: DoughSpecType[] | [];
  sizeSpecs: SizeSpecType[];
  ingredients: IndigrientType[];
  toppings: ToppingsType[];
  validateHash: string;
};

export type IndigrientType = {
  id: IndigrientId;
  name: string;
  required: boolean;
  excluded: boolean;
};

export type ToppingsType = {
  id: ToppingId;
  name: string;
  extraPrice: Penny;
  extraWeight: Gram;
  thumbnail: Path;
  selected: boolean;
};

export interface DoughSpecType extends SpecType {
  id: DoughSpecId;
}

export interface SizeSpecType extends SpecType {
  id: SizeSpecId;
  extraToppingsPrice: Penny;
  /* From Backend comes the value in percent */
  extraToppingsWeightRate: number;
}

interface SpecType {
  productId: ProductId;
  name: string;
  extraPrice: Penny;
  extraWeight: Gram;
}
export type GroupedProductType = {
  categoryName: string;
  products: ProductType[];
  subCategoriesList: string[];
};
