export type ProductDto = {
  id: number;
  name: string;
  categoryId: number;
  subCategoryId: number;
  oldPrice: number;
  newPrice: number;
  weight: number;
  purchasesCount: number;
  thumbnail: string;
  slug: string;
  selectedSizeId: number;
  selectedDoughId: number | null;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  subCategory: {
    id: number;
    name: string;
    slug: string;
  };
  doughSpecs: DoughSpecDto[] | [];
  sizeSpecs: SizeSpecDto[];
  ingredients: IndigrientDto[];
  toppings: ToppingsDto[];
};

export type IndigrientDto = {
  id: number;
  name: string;
  required: boolean;
};

export type ToppingsDto = {
  id: number;
  name: string;
  extraPrice: number;
  extraWeight: number;
  thumbnail: string;
};

export interface DoughSpecDto extends SpecDto {}

export interface SizeSpecDto extends SpecDto {
  extraToppingsPrice: number;
  /* From Backend comes the value in percent */
  extraToppingsWeightRate: string;
}

interface SpecDto {
  id: number;
  productId: number;
  name: string;
  extraPrice: number;
  extraWeight: number;
}
