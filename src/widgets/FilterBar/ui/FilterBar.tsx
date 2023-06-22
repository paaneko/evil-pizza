export function FilterBar() {
  return (
    <aside
      className="sticky ml-10 top-[64px] left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-hot-red">
        <ul className="text-white font-bold text-2xl uppercase text-center divide-y divide-dashed ">
          <li className="p-2">Pizza</li>
          <li className="p-2">Sneaks</li>
          <li className="p-2">Drinks</li>
        </ul>
      </div>
    </aside>
  );
}
