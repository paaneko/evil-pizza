import { PreloadProducts, groupProducts, mapProduct } from '@entities/product';
import type { GroupedProductType, ProductDto } from '@entities/product';
import { ProductList } from '@widgets/ProductList';
import { FilterBar } from '@widgets/FilterBar';

/**
 *  NEXT JS SSR has several problems:
 *  1. In HTML there are additional resources for HYDRATION,
 *  and because of this the final size of the document will be twice as big
 *
 *  2. TTI > FCP
 *     (FCP) => Time of the first display of the requested content.
 *     (TTI) => The point in time at which the page becomes interactive,
 *     all events are fixed, etc. (finish HYDRATION).
 *
 *     The interval between these states can be 1-6 s
 *     (depends on Internet speed and PC capability)
 *     And because of this the user will not have access to the React features,
 *     like Button toggle, etc. Until the page will be fully hydrated (TTI)
 *
 *   TODO finish doc about SRR disadvantages
 */

type Response = {
  data: ProductDto[];
};

export default async function Home() {
  /**
   * This fetch() will only be executed on the server and the result
   * will be available when the page is rendered on the server through
   * the serverSideProducts props and then the result inside serverSideProducts
   * will be serialized and sent to the client inside the <script> tag
   */

  const productsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
    {
      cache: 'no-cache',
    }
  )
    .then<Response>((res) => res.json())
    .then<GroupedProductType[]>((data) =>
      /**
       * Transform Data from server and adding some necessary props
       * for every product object
       */
      groupProducts(data.data.map((product) => mapProduct(product)))
    );

  return (
    <>
      <PreloadProducts serverSideProducts={productsData} />
      <div className="bg-dark-white">
        <div className="container flex">
          <ProductList />
          <div className="relative">
            <FilterBar />
          </div>
        </div>
      </div>
    </>
  );
}
