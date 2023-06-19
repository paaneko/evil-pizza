import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductId, ProductType, SizeSpecId } from './types';

type ProductStateType = {
  data: ProductType[];
  firstRender: boolean;
};

const initialState: ProductStateType = {
  data: [],
  firstRender: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      return {
        ...state,
        data: action.payload,
        firstRender: true,
      };
    },
    changeProductSize(
      state,
      action: PayloadAction<{ productId: ProductId; selectedSize: SizeSpecId }>
    ) {
      if (state.data)
        // Construct a new array immutably
        // "Mutate" the existing state to save the new array
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
