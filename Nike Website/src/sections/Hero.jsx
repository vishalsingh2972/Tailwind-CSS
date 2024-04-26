// import Button from '../components/Button.jsx';
import Button from '../components/Button';
// import arrowRight from '../assets/icons';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-red-500 border-2 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block">Nike</span>
          Shoes
        </h1>

        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>shoes images div</div>
    </section>
  )
}

export default Hero