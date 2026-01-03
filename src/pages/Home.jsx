import { services } from "../data/homeData";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
      <div className="home">
      <div className="poster">
  <div className="poster-content">
    <h2>Trusted Home Services</h2>
    <p>Easy help for daily needs</p>
    <button className="primary-btn">Book Now</button>
  </div>
</div>

    <div className="container">
           <h1 className="home-title">Home Services</h1>
        <p className="home-subtitle">Easy help for your daily needs</p>

        <div className="services-grid">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              name={item.name}
              image={item.image}
              icon={item.icon}
            />
          ))}
        </div>
    
   
      </div>
      {/* BOTTOM POSTER */}
<div className="bottom-poster">
  <div className="container bottom-poster-content">

    <div className="bottom-poster-text">
      <h1 style={{fontSize:'3rem'}}>Need Help at Home?</h1>
      <p style={{fontSize:'1.3rem',padding:10}}>
        Trusted workers for cleaning, cooking, care and repair.
      </p>
      <button className="primary-btn">Book a Service</button>
    </div>

    <div className="bottom-poster-image">
      <img src="/images/help.png" alt="Home Help" />
    </div>

  </div>
</div>

    </div>
  );
}
