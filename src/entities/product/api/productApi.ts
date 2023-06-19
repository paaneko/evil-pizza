import { baseApi } from '@shared/api';
import { ProductType } from '../model/types';
import { ProductDto } from './types';
import { mapProduct } from '../lib/mapProduct';

type ResponseProductsByCategory = {
  data: ProductDto[];
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productsByCategory: build.query<ProductType[] | [], string>({
      query: (category: string) => ({
        url: `/products/${category}`,
      }),
      transformResponse: (response: ResponseProductsByCategory) =>
        response.data.map(mapProduct),
    }),
  }),
});

export const {
  useProductsByCategoryQuery,
  util: { getRunningQueriesThunk },
} = productApi;
export const { productsByCategory } = productApi.endpoints;
