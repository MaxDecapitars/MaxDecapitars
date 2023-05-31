import BackgroundColor from '@/components/Background/BackgroundColor';
import BlurredBackdrop from '@/components/Background/BlurredBackdrop';
import Circle from '@/components/Background/Circle';
import Light from '@/components/Background/Light';
import Sphere from '@/components/Background/Sphere';

const Background = () => {
  return (
    <div>
      <BlurredBackdrop />

      {/* Home */}
      <Sphere className="right-24 top-24" color="red" />
      <Sphere className="left-[30%] top-[24rem]" color="red" />
      <Sphere className="right-[20%] top-[30rem]" color="red" />
      <Sphere className="left-[30%] top-[10rem]" color="red" />
      <Sphere className="right-[21%] top-[20rem]" color="blue" />
      <Sphere className="left-[40%] top-[15rem]" color="blue" />
      <Sphere className="right-[39%] top-[40rem]" color="blue" />
      <Sphere className="left-24 top-[30rem]" color="blue" />
      <Light className="right-[10%] top-60 bg-inherit shadow-red-light dark:shadow-red-dark" />
      <Light className="left-1/4 top-[35rem] bg-secondary-700 shadow-blue-light dark:shadow-blue-dark" />

      <Circle />

      {/* About */}
      <Sphere className="left-[30%] top-[30%]" color="blue" />
      <Sphere className="left-[45%] top-[34%]" color="red" />
      <Sphere className="left-[28%] top-[40%]" color="blue" />
      <Sphere className="left-[20%] top-[37%]" color="red" />
      <Sphere className="right-[30%] top-[33%]" color="red" />
      <Sphere className="right-[40%] top-[37%]" color="blue" />
      <Light className="right-0 top-1/4 bg-secondary-700 shadow-blue-light dark:shadow-blue-dark" />

      {/* Projects */}
      <Sphere className="right-1/3 top-[49%]" color="red" />
      <Sphere className="left-1/3 top-[51%]" color="blue" />
      <Light className="left-0 top-1/2 bg-inherit shadow-red-light" />

      {/* Contact */}
      <Sphere className="bottom-[27rem] left-[30%]" color="red" />
      <Sphere className="bottom-[33rem] left-[20%]" color="red" />
      <Sphere className="bottom-[43rem] left-[30%]" color="red" />
      <Sphere className="bottom-[25.5rem] left-[21%]" color="blue" />
      <Sphere className="bottom-[38rem] left-[40%]" color="blue" />
      <Sphere className="bottom-[43rem] left-[39%]" color="blue" />
      <Sphere className="bottom-[27rem] right-[30%]" color="red" />
      <Sphere className="bottom-[33rem] right-[20%]" color="red" />
      <Sphere className="bottom-[43rem] right-[30%]" color="red" />
      <Sphere className="bottom-[25.5rem] right-[21%]" color="blue" />
      <Sphere className="bottom-[38rem] right-[40%]" color="blue" />
      <Sphere className="bottom-[43rem] right-[39%]" color="blue" />
      <Light className="left-0 top-[85%] bg-secondary-700 shadow-blue-light dark:shadow-blue-dark" />
      <Light className="right-0 top-3/4 bg-inherit shadow-red-light dark:shadow-red-dark" />

      {/* Footer */}
      <Sphere
        className="bottom-[6rem] left-[45%]  laptop:bottom-[5.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[2rem] left-[25%]  laptop:bottom-[1.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[8rem] left-[10%]  laptop:bottom-[7.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[4rem] left-[13%]  laptop:bottom-[3.5rem]"
        color="blue"
      />
      <Sphere
        className="bottom-[1rem]  left-[40%]  laptop:bottom-[.5rem]"
        color="blue"
      />
      <Sphere
        className="bottom-[9rem] left-[30%]  laptop:bottom-[7.5rem]"
        color="blue"
      />
      <Sphere
        className="bottom-[6rem] right-[45%]  laptop:bottom-[5.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[2rem] right-[25%]  laptop:bottom-[1.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[8rem] right-[10%]  laptop:bottom-[7.5rem]"
        color="red"
      />
      <Sphere
        className="bottom-[4rem] right-[13%]  laptop:bottom-[3.5rem]"
        color="blue"
      />
      <Sphere
        className="bottom-[1rem]  right-[40%]  laptop:bottom-[.5rem]"
        color="blue"
      />
      <Sphere
        className="bottom-[9rem] right-[30%]  laptop:bottom-[7.5rem]"
        color="blue"
      />

      <BackgroundColor />
    </div>
  );
};

export default Background;
