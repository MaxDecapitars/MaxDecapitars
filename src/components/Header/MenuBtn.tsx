import Button from '@/components/shared/Button';
import { Bars2, Bars4 } from '@/components/shared/icons';
import { useTranslation } from 'react-i18next';

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
      {isMenuToggled ? <Bars2 /> : <Bars4 />}
    </Button>
  );
};
export default MenuBtn;
