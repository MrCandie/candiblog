import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          width={300}
          height={300}
          alt="An image showing Candie"
          src="/images/site/candie.jpg"
        />
      </div>
      <h1>Hi I'm Candie</h1>
      <p>
        I blog about web development - especially front-end frameworks like
        Angular or React
      </p>
    </section>
  );
};
export default Hero;
