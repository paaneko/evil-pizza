import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductId, ProductType, SizeSpecId } from './types';

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
    setProducts(state, action: PayloadAction<ProductType[]>) {
      return {
        ...state,
        data: action.payload,
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
