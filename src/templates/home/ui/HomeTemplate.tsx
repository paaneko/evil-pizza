import { ProductList } from '@widgets/ProductList';
import { FilterBar } from '@widgets/FilterBar';

export function HomeTemplate() {
  return (
    <div className="bg-dark-white">
      <div className="container flex">
        <ProductList />
        <div className="relative">
          <FilterBar />
        </div>
      </div>
    </div>
  );
}
