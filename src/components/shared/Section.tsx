import { SelectedPage } from '@/types/types';

type Props = {
  id: SelectedPage;
  children: React.ReactNode;
};

const Section = ({ id, children }: Props) => {
  return (
    <section
      id={id}
      className="flex min-h-screen w-full flex-col justify-center border-t-[1px] border-t-gray-50 py-20 text-center dark:border-t-gray-900"
    >
      {children}
    </section>
  );
};

export default Section;
