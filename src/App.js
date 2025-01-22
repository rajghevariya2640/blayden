import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Home from "./pages/home/Index";
import CustomCursor from "./shared/CursorPointer";
import Header from "./shared/Header";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="box">
            <Home />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
