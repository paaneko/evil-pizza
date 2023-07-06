type Props = {
  weight: number;
  size: 'small' | 'big';
};

export function WeightIndicator({ weight, size }: Props) {
  const style = size === 'small' ? 'text-xs px-1.5 py-0.5' : 'px-2.5 py-1.5';
  return (
    <div
      className={`${style} font-semibold bg-hot-red text-white rounded-full`}
    >
      {weight}g
    </div>
  );
}
