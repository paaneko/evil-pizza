import { Logo } from '@shared/ui/Logo';

export function Footer() {
  return (
    <div className="bg-jet-black fixed bottom-0 w-full">
      <div className="container py-10 ">
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <Logo whiteText />
            <div className="font-medium text-sm text-white mt-2">
              1313 Dark Street Gloomyville,
              <br /> Shadowland, Sinister State
            </div>
          </div>
          <div>
            <div className="font-semibold  text-white text-2xl">Menu</div>
            <nav>
              <ul className="mt-4 flex flex-col space-y-2 text-white text-lg font-semibold cursor-pointer">
                <li>Pizza</li>
                <li>Drinks</li>
                <li>Desserts</li>
              </ul>
            </nav>
          </div>

          <div>
            <div className="font-semibold text-white text-2xl">Opened At</div>
            <ul className="mt-4 space-y-3 text-sm font-medium text-white">
              <li>Mon: 8AM - 9PM</li>
              <li>Tue: 8.30AM - 9PM</li>
              <li>Wed: 9AM - 9PM</li>
              <li>Thu: 10AM - 7.30PM</li>
              <li>Fri: 10AM - 6PM</li>
              <li>Sat - Sun: closed</li>
            </ul>
          </div>
        </div>
        <div className="font-medium text-white flex justify-center mt-10">
          <span>
            © 2023 paaneko. Source code on my{' '}
            <a
              className="text-hot-red font-semibold underline cursor-pointer"
              href="https://github.com/paaneko/evil-pizza"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
