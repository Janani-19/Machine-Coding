export default Cards = ({ title, description, thumbnail }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
