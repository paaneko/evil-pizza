'use client';

import { useAppDispatch } from '@shared/model';
import { setProducts } from './slice';
import { ProductType } from './types';

type Props = {
  serverSideProducts: ProductType[];
};

/**
 * 💀💀💀 PAY ATTENTION
 * ⚠️ Probably Fake Info
 *
 *
 * After calling this function on the server,
 * this function is called to fill the store on the server and pre-render the list of products
 * @@INIT Redux Store with initState: {data: []}
 *
 * ‼️WARNING
 *
 * After NEXT JS calls all functions, i.e. RENDER OF ALL APPLICATION COMPONENTS SHOULD CALL ONCE,
 * the useEffect() => {}) hooks will NOT be called on the server!!!
 * @@AFTER ALL fun() calls, Redux Store with initState: {data: [{...}, ...]}
 *
 * BUT ONLY the HTML file (HTML DOM and SERIALIZED DATE inside <script/> tags ) is sent to the client.
 * @see src/app/page.tsx
 *
 *
 * <html>
 *    // all the markings along with the products
 *    <div>
 *      <div> ProductCard <div>
 *      <div> ProductCard <div>
 *       ...
 *    </div>
 *      // This code is located in the generated HTML file after the pre-rendering on the server
 *      // and can only be played at runtime.
 *      // Each element in the array is a set of instructions for loading a particular script or resource.
 *    <script>
 *      // The serialized props date of this serverSideProducts function
 *      self.__next_f.push({ serverSideProducts: [{...}, ...]})
 *    </script>
 *    <script>
 *      self.__next_f.push(...)
 *    </script>
 *    <script>
 *      self.__next_f.push(...)
 *    </script>
 *      ...
 * </html>
 *
 *  After the client received the HTML file WITHOUT JavaScript, Redux Store, React and all libraries,
 *  and mapped it like FCP (First Contentful Paint)
 *  The client starts loading .js files that contain React, React DOM, Redux Store, etc.
 *  After loading the .js files, React starts Hydration:
 *    1. @@INIT Redux Store with initState: {data: []}
 *    2. React DOM synchronization with browser DOM
 *    3. Attach React components into a server-rendered browser DOM nodes
 *    4. Setting products into store.products: {data: [{...}, ...]}
 *
 *  TODO finish this doc PreloadProducts
 *
 *
 */

export function PreloadProducts({ serverSideProducts }: Props) {
  const dispatch = useAppDispatch();
  /**
   * ⚒️ Not working
   * There will have to be a feature that does not refresh the table when pages change
   *
   * 💔 Problem
   * When you navigate between pages, this component every time re-render, call dispatch
   * and set serverSideProducts data into storage
   * That is, the table which was before the page transition is overwritten by the new data from serverSideProducts.
   * That is, if the user has configured the product (selected the size, etc.), then when passing between pages,
   * this configuration will reset to default values
   *
   *
   * 💖 Solution
   * Make logic that checks if there is already data in the repository.
   * WITHOUT USING useEffect()
   *
   * ✨ Variant
   *            HYDRATION BUG (NOT WORKING)
   * if (!store.getState().product.firstRender) {
   *   dispatch(setFirstRender());
   *   dispatch(setProducts(serverSideProducts));
   * }
   *
   * TODO find a solution
   */

  dispatch(setProducts(serverSideProducts));

  return null;
}
