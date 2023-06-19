'use client';

import { useAppDispatch } from '@shared/model';
import store from '@app/appStore';
import { setProducts } from './slice';
import { ProductType } from './types';

type Props = {
  serverSideProducts: ProductType[];
};

/**
 * 💀💀💀 БУДЬ ВНИМАТЕЛЕН
 *
 *
 * После вызова этой функции на сервере эта функция вызываеться чтобы заполнить store
 * на сервере и пре-рендерить список продуктов
 *  @@INIT Redux Store with initState: {data: [], firstRender: false}
 *
 * ‼️ВНИМАНИЕ
 *
 * После того как NEXT JS вызовет все функции,
 * тоесть РЕНДЕР ВСЕХ КОМПОНЕНТОВ ПРИЛОЖЕНИЯ ПОИЗОЙДЁТ ОДИН РАЗ,
 * ХУКИ useEffect(() => {}) вызываться на сервере НЕ БУДУТ!!!
 * @@AFTER ALL fun() calls, Redux Store with initState: {data: [{...}, ...], firstRender: true}
 *
 * НО НА КЛИЕНТ ОТПРАВИТЬСЯ ТОЛЬКО HTML-файл (HTML DOM и СЕРИАЛИЗИРОВАНАЯ ДАТА внутри <script/> tags )
 * @see src/app/page.tsx
 *
 *
 * <html>
 *    //вся разметка вместе с продуктами
 *    <div>
 *      <div> ProductCard <div>
 *      <div> ProductCard <div>
 *       ...
 *    </div>
 *      // Данные код находится в сгенерированном HTML-файле после пре-рендера на сервере
 *      // и может быть воспроизведен только во время выполнения приложения.
 *      // Каждый элемент в массиве представляет собой набор инструкций для загрузки конкретного скрипта или ресурса.
 *    <script>
 *      // Сериализированая дата пропса этой функции serverSideProducts
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
 *  После того как клиент получил HTML-файле БЕЗ JavaScript, Redux Store, React и всех библиотек
 *  В клиент начинают загружаться файлы .js в которых содержиться React, React DOM, Redux Store и тд
 *  После загрузки .js файлов React начинает Hydration:
 *    1. @@INIT Redux Store with initState: {data: [], firstRender: false}
 *    2. Синхронизация React DOM c browser DOM
 *    3. Attach React components into a server-rendered browser DOM nodes
 *    4. Setting productg into store.products: {data: [{...}, ...], firstRender: true}
 *
 *  TODO finish this doc PreloadProducts
 *
 *
 */

export function PreloadProducts({ serverSideProducts }: Props) {
  const dispatch = useAppDispatch();
  /**
   * Во время первого рендера на сервере и во время гидрации занчение firstRender: false
   * После во время гидрации эта функция будет вызвана
   */
  if (!store.getState().product.firstRender) {
    dispatch(setProducts(serverSideProducts));
  }
  console.log(
    'PreloadProducts call',
    serverSideProducts,
    'State',
    store.getState().product.firstRender
  );

  return null;
}
