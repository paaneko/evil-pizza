import { HomeTemplate } from '@templates/home';
import { PreloadProducts } from '@entities/product/model/PreloadProducts';
import { ProductDto } from '@entities/product';

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

async function getProducts(): Promise<Response> {
  console.log('BeforeHome call\\n');

  const resData = await fetch('http://localhost/api/products/pizza', {
    cache: 'no-cache',
  });

  console.log('After Home call\\n', resData);
  return resData.json();
}

export default async function Home() {
  const resData = await getProducts();
  /**
   * This fetch() will only be executed on the server and the result
   * will be available when the page is rendered on the server through
   * the serverSideProducts props and then the result inside serverSideProducts
   * will be serialized and sent to the client inside the <script> tag
   */

  return (
    <>
      <PreloadProducts serverSideProducts={resData.data} />
      <HomeTemplate />
    </>
  );
}
