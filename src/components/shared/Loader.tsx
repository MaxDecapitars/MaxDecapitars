const Loader = () => {
  const className =
    'absolute top-[33px] w-[13px] h-[13px] rounded-full bg-[linear-gradient(120deg,_#7a5ee0,_#1e228f,_#5bfffa)]';

  return (
    <div className="relative inline-block h-20 w-20">
      <div className={`${className} left-2 animate-lds-ellipsis1`}></div>
      <div className={`${className} left-2 animate-lds-ellipsis2`}></div>
      <div className={`${className} left-8 animate-lds-ellipsis2`}></div>
      <div className={`${className} left-14 animate-lds-ellipsis3`}></div>
    </div>
  );
};
export default Loader;
