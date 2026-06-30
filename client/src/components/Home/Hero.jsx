import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-20">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
}

export default Hero;