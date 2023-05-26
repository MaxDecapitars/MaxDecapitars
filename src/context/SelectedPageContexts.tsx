import { SelectedPage } from '@/types/types';
import { createContext, useState } from 'react';

const defaultValue = {
  selectedPage: SelectedPage.Home,
  setSelectedPage: (selectedPage: SelectedPage) => {
    selectedPage;
  },
};

const SelectedPageContext = createContext(defaultValue);

type Props = {
  children: React.ReactNode;
};

const SelectedPageProvider = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    defaultValue.selectedPage
  );

  const data = { selectedPage, setSelectedPage };

  return (
    <SelectedPageContext.Provider value={data}>
      {children}
    </SelectedPageContext.Provider>
  );
};

export { SelectedPageProvider };

export default SelectedPageContext;
