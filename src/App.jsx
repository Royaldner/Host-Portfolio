import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";
import ProjectBanner from "./components/ProjectBanner";
import QuoteGiphy from "./components/QuoteGiphy";

function App() {
  return (
    <div className="">
      <Cursor />
      <section className="w-screen h-screen bg-gradient-to-b from-[#081d0e] from-5% via-[#06110a] via-30% to-gray-950 to-90% ...">
        <Navbar />
        <Main />
      </section>
      <section className="w-screen md:h-screen bg-gradient-to-b from-gray-950 from-10% via-[#06110a] via-30% to-[#081d0e] to-90% ...">
        <Services />
      </section>
      <section className="w-screen h-auto bg-gradient-to-b from-[#081d0e] from-5% via-[#06110a] via-30% to-gray-950 to-90% ...">
        <ProjectBanner />
      </section>
      <section className="w-screen md:h-screen bg-gradient-to-b from-gray-950 from-10% via-[#06110a] via-30% to-[#081d0e] to-90% ...">
        <Projects
          title="THE SHOP"
          description="TheShop is an all in one e commerce website that strives to be the best in both worlds of sophisticated web-based application but at the same time very user friendly."
          languages="JavaScript React Tailwind node.js figma"
          desktopImage="/theShop1.png"
          mobileImage="/theShop2.png"
          link="https://github.com/adinashby-vanier-college/transactional-web-project-2395025"
        />
      </section>
      <section className="w-screen md:h-screen bg-gradient-to-b from-[#081d0e] from-5% via-[#06110a] via-30% to-gray-950 to-90% ...">
        <Projects
          title="C-TRACKER"
          description="A web based application that enables you to track certai amount of currencies and get you notifie once you have the desired rate via text or email."
          languages="JavaScript Express.js HTML CSS figma"
          desktopImage="/tracker1.png"
          mobileImage="/tracker2.png"
          link="https://github.com/Royaldner/trackerProject"
        />
      </section>
      <section className="w-screen md:h-screen bg-gradient-to-b from-gray-950 from-10% via-[#06110a] via-30% to-[#081d0e] to-90% ...">
        <Projects
          title="PRMS"
          description="The Property Rental Management System is a desktop-based application designed to streamline the processes of property rental, lease management, and tenant interaction.  "
          languages="C# .Net ASP.Net WPF PostgreSQL figma"
          desktopImage="/PRMS1.png"
          mobileImage="/comminSoon.png"
          link="https://github.com/Royaldner/Property-Rental-System"
        />
      </section>
      <section className="w-screen md:h-[70vh] bg-gradient-to-b from-[#081d0e] from-5% via-[#06110a] via-30% to-gray-950 to-90% ...">
        <QuoteGiphy />
      </section>
      <section className="w-screen md:h-screen bg-gradient-to-b from-gray-950 from-10% via-[#06110a] via-30% to-[#081d0e] to-90% ...">
        <Contact />
      </section>
    </div>
  );
}

export default App;
