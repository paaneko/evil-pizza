type Props = {
  toggle: () => void;
  isExcluded: boolean;
  label: string;
};

export function RemoveIngredientButton(props: Props) {
  const { toggle, label, isExcluded } = props;
  return (
    <button
      type="button"
      className={`flex justify-between cursor-pointer ${
        isExcluded && 'line-through '
      }`}
      onClick={toggle}
    >
      <span className="text-lg font-medium">{label}</span>
      {isExcluded && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:text-goldenrod"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      )}
      {!isExcluded && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:text-hot-red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
}
