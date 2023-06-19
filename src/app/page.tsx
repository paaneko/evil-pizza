import { HomeTemplate } from '@templates/home';
import { PreloadProducts } from '@entities/product/model/PreloadProducts';
import { mapProduct, ProductDto, ProductType } from '@entities/product';

/**
 *  У этого подхода есть несколько проблем:
 *  1. В HTML-находиться доп ресурсы для HYDRATION,
 *  и из-за этого финальный размер document будет
 *  в 2 раза больше
 *
 *  2. TTI > FCP
 *     (FCP) => Время первого отображения запрашиваемого содержимого.
 *     (TTI) => Момент времени, в который страница становится интерактивной,
 *     закрепляются все события и т. д. (finish HYDRATION).
 *
 *     Промежуток между этими состояниями может составлять 1-6 с
 *     (зависит от скорости интернета и можности PC)
 *     И из-за этого у пользователя не будут работать кнопки на сайте,
 *     которые используют js до момента TTI
 *
 *   TODO finish doc about SRR disadvantages
 */

type Response = {
  data: ProductDto[];
};

async function getProducts(): Promise<ProductType[]> {
  console.log('BeforeHome call\\n');

  const resData = await fetch('http://localhost/api/products/pizza', {
    cache: 'no-cache',
  })
    .then<Response>((res) => res.json())
    .then<ProductType[]>((res) =>
      res.data.map((productDto: ProductDto) => mapProduct(productDto))
    );

  console.log('After Home call\\n', resData);
  return resData;
}

export default async function Home() {
  const resData = await getProducts();
  /**
   * Этот fetch() выполниться только на сервере и результат работы будет доступен
   * во время рендеринга страницы на сервере через пропс serverSideProducts, а после
   * результат внутри serverSideProducts сериализируеться и отправиться на клиент как chunk
   */

  return (
    <>
      <PreloadProducts serverSideProducts={resData} />
      <HomeTemplate />
    </>
  );
}
