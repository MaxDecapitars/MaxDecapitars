import { useState } from 'react';
import { motion } from 'framer-motion';
import { SelectedPage, Theme } from '@/types/types';
import { navAnimate } from '@/types/const';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Link from '@/components/Header/Link';
import LocaleBtn from '@/components/Header/LocaleBtn';
import ThemeBtn from '@/components/Header/ThemeBtn';
import MenuBtn from '@/components/Header/MenuBtn';

type Props = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const Header = ({ theme, setTheme }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveTabletScreens = useMediaQuery('(min-width: 40em)');

  return (
    <>
      {isAboveTabletScreens ? (
        <header className="fixed top-0 z-40 flex h-14 w-full items-center justify-center border-b-[1px] border-b-gray-50 bg-inherit py-2 backdrop-blur-lg dark:border-b-gray-900">
          <LocaleBtn />
          <nav className="flex w-3/4 items-center justify-evenly">
            <Link page={SelectedPage.Home} />
            <Link page={SelectedPage.About} />
            <Link page={SelectedPage.Projects} />
            <Link page={SelectedPage.Contact} />
          </nav>
          <ThemeBtn theme={theme} setTheme={setTheme} />
        </header>
      ) : (
        <header className="fixed bottom-0 z-40 flex h-14 w-full items-center justify-evenly border-t-[1px] border-t-gray-50 bg-inherit py-2 backdrop-blur-lg dark:border-t-gray-900">
          <LocaleBtn />
          <MenuBtn
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
          />
          <ThemeBtn theme={theme} setTheme={setTheme} />
        </header>
      )}

      <motion.nav
        className="fixed bottom-[calc(0%_+_3.5rem)] right-0 z-40 flex h-[calc(100vh_-_3.5rem)] w-72 flex-col items-center justify-evenly border-t-[1px] border-t-gray-50 bg-inherit py-2 pr-12 text-2xl backdrop-blur-lg dark:border-t-gray-900"
        variants={navAnimate}
        initial="hidden"
        animate={!isAboveTabletScreens && isMenuToggled ? 'visible' : 'hidden'}
      >
        <Link page={SelectedPage.Home} setIsMenuToggled={setIsMenuToggled} />
        <Link page={SelectedPage.About} setIsMenuToggled={setIsMenuToggled} />
        <Link
          page={SelectedPage.Projects}
          setIsMenuToggled={setIsMenuToggled}
        />
        <Link page={SelectedPage.Contact} setIsMenuToggled={setIsMenuToggled} />
      </motion.nav>
    </>
  );
};
export default Header;
