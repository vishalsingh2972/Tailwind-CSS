// import Button from '../components/Button.jsx';
import Button from '../components/Button';
// import arrowRight from '../assets/icons';
import { arrowRight } from '../assets/icons';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-red-500 border-2 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start padding-x pt-28">
        <p>Our Summer collections</p>
        <h1>
          <span>The New Arrival</span>
          <br/>
          <span>Nike </span>
          Shoes
        </h1>

        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shope Label" iconUrl={arrowRight}/>
      </div>

      <div>shoes images div</div>
    </section>
  )
}

export default Hero