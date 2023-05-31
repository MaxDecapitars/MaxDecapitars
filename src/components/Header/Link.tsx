import { useContext, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types/types';
import SelectedPageContext from '@/context/SelectedPageContexts';

type Props = {
  page: SelectedPage;
  setIsMenuToggled?: Dispatch<SetStateAction<boolean>>;
};

const Link = ({ page, setIsMenuToggled }: Props) => {
  const { selectedPage, setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();

  const handleClick = () => {
    setSelectedPage(page);
    setIsMenuToggled && setIsMenuToggled(false);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === page ? 'text-primary-600 dark:text-primary-100 ' : ''
      }w-24 flex justify-center`}
      href={`#${page}`}
      onClick={handleClick}
    >
      {t(`${page}.name`)}
    </AnchorLink>
  );
};
export default Link;
