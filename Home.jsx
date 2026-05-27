//import React from 'react'
import './Home.css'
export default function Home({aboutRef}) {
  return (
    <div>
      <section style={{ height: "100vh" }}>
      <h1 className="mb-5 mt-5 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-center">
        Empowering Women, Transforming Lives
      </h1>
      <p className="mb-6 text-lg font-normal text-body lg:text-l sm:px-16 xl:px-48 text-center">
      She Can Foundation is a non-governmental organization dedicated to empowering women and supporting underprivileged communities through education, awareness, and social welfare initiatives. The foundation works towards creating equal opportunities and building a stronger, more inclusive society where every woman can grow with confidence and dignity.
      </p>
      <div className="image-container">
      <img
       src="/public/NGOs-and-Their-Role-in-the-Governance-of-India.webp"
        alt="Left"
        className="image"
      />

      <img
        src="/public/ngo_800.width-640.jpg"
        alt="Right"
        className="image"
      />
    </div>
      </section>

  {/* <div className="container">
  <button
    data-popover-target="popover-default"
    type="button"
    className="bg-blue-500 text-white cursor-pointer box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
  >
    About Us
  </button>
  </div> */}

<section
        ref={aboutRef}
        style={{ height: "40vh" }}
      >
        <h1 className="mb-5 mt-5 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl text-center">
        About Us
      </h1>
        <p>She Can Foundation is a non-governmental organization registered under the Indian Society Act, 1860, committed to empowering women and creating a more inclusive and equitable society. The foundation works towards uplifting underprivileged and marginalized women by providing access to education, skill development, healthcare support, awareness programs, and community-driven initiatives.

The organization believes that every woman deserves equal opportunities to grow, lead, and succeed regardless of her background or circumstances. By collaborating with local communities, volunteers, organizations, and supporters, She Can Foundation focuses on breaking social barriers and promoting women’s rights, confidence, and independence. Through sustainable programs, advocacy campaigns, and social welfare activities, the foundation strives to build a future where women can thrive with dignity, safety, and self-reliance.</p>
      </section>
    </div>
  );
}
