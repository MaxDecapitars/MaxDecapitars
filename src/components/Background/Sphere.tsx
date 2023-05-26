import { useMemo } from 'react';

type Props = {
  className: string;
  color: 'red' | 'blue';
};

const Sphere = ({ className, color }: Props) => {
  const animations = {
    red: 'animate-sphere-red',
    blue: 'animate-sphere-blue',
  };

  const delay: string = useMemo(() => {
    const random = Math.random() * 10;
    const fixedDelay = random.toFixed(2);
    return `${fixedDelay}s`;
  }, []);

  return (
    <div
      className={`absolute -z-20 h-8 w-8 rounded-full ${animations[color]} ${className}`}
      style={{ animationDelay: delay }}
    />
  );
};
export default Sphere;
