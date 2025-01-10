import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from "framer-motion";
import React, { useRef } from "react";
import Slide1 from '../../assets/image/png/slide1.webp';
import Slide2 from '../../assets/image/png/slide2.webp';
import Slide3 from '../../assets/image/png/slide3.webp';
import BStack from "../../shared/BStack";
import theme from "../../theme/Theme";
import BBox from "../../shared/BBox";
import { LineCircle, SmileIcon, ZicZacIcon } from "../../assets/image/svg/Icon";

function ParallaxText({ children, baseVelocity = 100 }) {
  // Motion values
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wrap the text based on percentage
  const x = useTransform(baseX, (v) => `${wrap(-20, -60, v)}%`);
  const directionFactor = useRef(1);

  // Update baseX on each animation frame
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Slider() {
  return (
    <BBox pb={50}>
      <ParallaxText baseVelocity={2}>
        <BStack direction="row" css={{
          '& svg': {
          maxWidth: 140
          },
          '& .chakra-stack': {
            alignItems: 'center',
            justifyContent: 'center',
            '&:has(svg)': {
              border: `1px solid ${theme.colors.gray.light[100]}`
            },
          },
        }}>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
            <img src={Slide1} alt="" />
          </BStack>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
           <ZicZacIcon/>
          </BStack>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
            <img src={Slide2} alt="" />
          </BStack>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
            <SmileIcon/>
          </BStack>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
            <img src={Slide3} alt="" />
          </BStack>
          <BStack  css={{width:"20vw", borderRadius: '20px', overflow: 'hidden', marginRight: '50px'}}>
            <LineCircle/>
          </BStack>
                
          </BStack>
      </ParallaxText>
    </BBox>
  );
}
