export default function ServiceCard({ name, image, icon }) {
  return (
    <div className="service-card-new">
      <div className="service-icon">{icon}</div>

      <img src={image} alt={name} className="service-image" />

      <p className="service-name">{name}</p>
    </div>
  );
}
