import { Row, Col, Carousel } from 'antd';
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
    <section id="hero" className="container mx-auto">
      <Carousel autoplay dotPosition="top">
        <div>
          <Row>
            <Col lg={12} md={24} xs={24}>
              <div className="lg:mt-24 md:mt-12 md:mx-28">
                <h2 className="text-4xl mt-4 text-center font-bold text-blue-900 lg:text-left md:text-7xl md:text-center">
                  White Gold Plated Princess
                </h2>

                <div className="mt-8 flex flex-col gap-4 font-semibold md:flex-row lg:justify-start md:justify-center">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="rounded-3xl border border-transparent mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-yellow-500 text-white"
                  >
                    Shop Now
                  </button>
                  <button
                    type="button"
                    className="rounded-3xl border border-blue-900 mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-white text-blue-900"
                  >
                    View More
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="w-1/4 mx-auto lg:w-1/2 md:w-1/3 md:mx-auto mt-8">
                <img className="" src={Hero1} alt="hero1" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={12} md={24} xs={24}>
              <div className="lg:mt-24 md:mt-12 md:mx-28">
                <h2 className="text-4xl mt-4 text-center font-bold text-blue-900 lg:text-left md:text-7xl md:text-center">
                  Rain Jacket Women Windbreaker Striped Climbing Raincoats
                </h2>

                <div className="mt-8 flex flex-col gap-4 font-semibold md:flex-row lg:justify-start md:justify-center">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="rounded-3xl border border-transparent mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-yellow-500 text-white"
                  >
                    Shop Now
                  </button>
                  <button
                    type="button"
                    className="rounded-3xl border border-blue-900 mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-white text-blue-900"
                  >
                    View More
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="w-1/4 mx-auto lg:w-1/2 md:w-1/3 md:mx-auto mt-8">
                <img className="" src={Hero2} alt="hero1" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={12} md={24} xs={24}>
              <div className="lg:mt-24 md:mt-12 md:mx-28">
                <h2 className="text-4xl mt-4 text-center font-bold text-blue-900 lg:text-left md:text-7xl md:text-center">
                  Mens Casual Slim Fit
                </h2>

                <div className="mt-8 flex flex-col gap-4 font-semibold md:flex-row lg:justify-start md:justify-center">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="rounded-3xl border border-transparent mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-yellow-500 text-white"
                  >
                    Shop Now
                  </button>
                  <button
                    type="button"
                    className="rounded-3xl border border-blue-900 mx-auto w-96 h-12 md:p-5 md:w-32 md:h-16 md:mx-0 bg-white text-blue-900"
                  >
                    View More
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="w-1/4 mx-auto lg:w-1/2 md:w-1/3 md:mx-auto mt-8">
                <img className="" src={Hero3} alt="hero1" />
              </div>
            </Col>
          </Row>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
