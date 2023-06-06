import { motion } from 'framer-motion';

type Props = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit';
  title?: string;
};

const Button = ({ children, onClick, type = 'button', title }: Props) => {
  const clipPath =
    '[clip-path:_polygon(calc(100%_-_.75rem)_0,_100%_.75rem,_100%_100%,_0_100%,_0_0)]';
  const gradient =
    'bg-[linear-gradient(120deg,_#fe80b1,_#960707,_#dfb548,_#7a5ee0,_#1E228F,_#5bfffa)] [background-size:_300%_100%]';

  return (
    <motion.button
      type={type}
      title={title}
      className={`inline-block h-8 rounded-lg p-[2px] ${gradient} ${clipPath} font-bold transition-transform`}
      onClick={onClick}
      whileHover={{
        backgroundPosition: '100% 100%',
        scale: 1.1,
      }}
      whileTap={{ scale: 0.8 }}
    >
      <span
        className={`flex h-full items-center justify-center rounded-md bg-white bg-opacity-80 p-1 px-2
         uppercase ${clipPath} leading-none dark:bg-black dark:bg-opacity-70`}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
