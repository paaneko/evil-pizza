import Image from 'next/image';

type Props = {
  whiteText: boolean;
};

export function Logo({ whiteText }: Props) {
  const textColorStyle = whiteText ? 'text-white' : '';
  return (
    <div className="flex">
      <Image
        width={58}
        height={58}
        src="main-assets/logo.svg"
        alt="logo image"
      />
      <div className="ml-2">
        <div className={`font-bold text-3xl ${textColorStyle}`}>EVIL PIZZA</div>
        <span className={`text-sm font-semibold ${textColorStyle}`}>
          Taste Evil&apos;s Temptation!
        </span>
      </div>
    </div>
  );
}
