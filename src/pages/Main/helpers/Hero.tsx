import { Carousel } from 'antd';
import Hero1 from '@assets/Hero1.png';
import Hero2 from '@assets/Hero2.png';
import Hero3 from '@assets/Hero3.png';

interface Props {
  elementRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ elementRef }: Props) => {
  const handleClick = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="mx-auto container p-5">
      {/* <div className="flex flex-col-reverse justify-center items-center"> */}
      <div className="">
        <Carousel autoplay dotPosition="top">
          <div>
            <img className="w-1/3 mx-auto mt-12" src={Hero1} alt="hero1" />
            <h2 className="text-3xl font-bold text-blue-900 text-center mt-6">
              White Gold Plated Princess
            </h2>
          </div>
          <div>
            <img className="w-1/3 mx-auto" src={Hero2} alt="hero2" />
            <h2 className="text-3xl font-bold text-blue-900 text-center mt-6">
              Rain Jacket Women Windbreaker Striped Climbing Raincoats
            </h2>
          </div>
          <div>
            <img className="w-1/3 mx-auto mt-12" src={Hero3} alt="hero3" />
            <h2 className="text-3xl font-bold text-blue-900 text-center mt-6">
              Mens Casual Slim Fit
            </h2>
          </div>
        </Carousel>
        <div className="">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:justify-center lg:items-center md:gap-4 gap-4 mt-6">
            <button
              className=" bg-yellow-500 w-80 md:w-full lg:w-1/2 h-10 rounded-full text-white"
              type="button"
              onClick={handleClick}
            >
              Shop Now
            </button>

            <button
              type="button"
              className=" bg-white w-80 md:w-full lg:w-1/2  h-10 rounded-full text-blue-900 border border-blue-900"
              onClick={handleClick}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
