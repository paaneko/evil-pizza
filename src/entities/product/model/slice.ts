import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductId, ProductType, SizeSpecId } from './types';
import { ProductDto } from '../api/types';
import { mapProduct } from '../lib/mapProduct';

type ProductStateType = {
  data: ProductType[];
};

const initialState: ProductStateType = {
  data: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    /**
     * Attempting to use setFirstRender() action causes hydration errors
     * @see src/entities/model/PreloadProducts.tsx
     * TODO Find a replacement for this method that does not break hydration
     */
    setProducts(state, action: PayloadAction<ProductDto[]>) {
      /**
       * ⚠️
       * Map Dto has to be used here,
       * because if you transform inside `fetch()` via .then((p) => p.map())
       * there is an hydration error
       * TODO Find out why the error occurs
       * @see src/app/page.tsx
       */
      return {
        ...state,
        data: action.payload.map((productDto) => mapProduct(productDto)),
      };
    },
    changeProductSize(
      state,
      action: PayloadAction<{ productId: ProductId; selectedSize: SizeSpecId }>
    ) {
      if (state.data)
        // Construct a new array immutably
        // "Mutate" the existing state to save the new array
        /**
         * ⚠️ Probably not immutable
         * TODO Check if it's true
         */
        state.data = state.data.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              selectedSizeId: action.payload.selectedSize,
            };
          }
          return product;
        });
    },
  },
});

export const { setProducts, changeProductSize } = productSlice.actions;
