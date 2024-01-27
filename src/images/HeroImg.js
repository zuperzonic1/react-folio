import { ReactComponent as HeroSvg } from "./HeroBanner.svg";

// Usage in JSX
const HeroImg = () => {
  return (
    <>
      <HeroSvg className="w-100" />
      <h2 className="text-end">
        {" "}
        A{" "}
        <Typed
          strings={["WEB DEVELOPER", "UI/ UX DESIGNER"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </h2>
    </>
  );
};

export default HeroImg;
