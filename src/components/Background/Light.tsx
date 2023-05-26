type Props = {
  className: string;
};

const Light = ({ className }: Props) => {
  const circleClass = 'absolute -z-20 h-1 w-1 rounded-full';

  return <div className={`${circleClass} ${className}`}></div>;
};

export default Light;
