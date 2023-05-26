import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-[1px] border-t-gray-50 px-10 text-center text-gray-800 backdrop-blur-2xl dark:border-t-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-screen-laptop justify-between pb-[5.5rem] pt-8 tablet:py-8 laptop:flex">
        <ul className="order-1 basis-1/4 laptop:text-left">
          <li className="my-4">
            <a
              href="https://github.com/MaxDecapitars"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <ul className="order-3 basis-1/4 laptop:text-right">
          <li className="my-4">
            <a
              href="https://github.com/MaxDecapitars/MaxDecapitars"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Footer.repository')}
            </a>
          </li>
        </ul>
        <ul className="order-2">
          <li className="my-4">
            <a href="mailto:mdecapitars@gmail.com">mdecapitars@gmail.com</a>
          </li>
          <li className="my-4">© MaxDecapitars. {t('Footer.copyright')}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
