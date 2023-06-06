import { useTranslation } from 'react-i18next';
import Button from '@/components/shared/Button';
import { Bars2, Bars4 } from '@/components/shared/icons';

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (isMenuToggled: boolean) => void;
};

const MenuBtn = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  const { t } = useTranslation();

  const title: string = t('Header.title.MenuBtn');

  const handleClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <Button onClick={handleClick} title={title}>
      <span className="h-full p-1">
        {isMenuToggled ? <Bars2 /> : <Bars4 />}
      </span>
    </Button>
  );
};
export default MenuBtn;
