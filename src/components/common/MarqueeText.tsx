import Marquee from "react-fast-marquee";

interface MarqueeTextProps {
  children: React.ReactNode;
}

function MarqueeText({ children }: MarqueeTextProps) {
  return (
    <div className="">
      <Marquee speed={40} gradient={false} autoFill>
        {children}
      </Marquee>
    </div>
  );
}

export default MarqueeText;
