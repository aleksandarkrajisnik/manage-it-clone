import Hero from "../../components/homepage/hero/Hero";
import MarketingStarter from "../../components/homepage/marketingStarter/MarketingStarter";
import Services from "../../components/homepage/services/Services";
import Offer from "../../components/homepage/offer/Offer";
import AnimatedComponent from "../../components/AnimatedComponent";
function Home() {
  return (
    <AnimatedComponent>
      <div className="home">
        <Hero />
        <MarketingStarter />
        <Services />
        <Offer />
      </div>
    </AnimatedComponent>
  );
}

export default Home;
