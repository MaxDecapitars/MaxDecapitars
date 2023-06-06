import { useTranslation } from 'react-i18next';
import { Theme } from '@/types/types';
import Button from '@/components/shared/Button';
import { Moon, Sun } from '@/components/shared/icons';

type Props = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeBtn = ({ theme, setTheme }: Props) => {
  const { t } = useTranslation();

  const title: string = t('Header.title.ThemeBtn');

  const handleClick = () => {
    theme === Theme.dark ? setTheme(Theme.light) : setTheme(Theme.dark);
  };

  return (
    <Button onClick={handleClick} title={title}>
      <span className="h-full p-1">
        {theme === Theme.dark ? <Sun /> : <Moon />}
      </span>
    </Button>
  );
};

export default ThemeBtn;
