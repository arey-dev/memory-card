export function Card(props) {
  const { src, name, id} = props;

  return (
    <div className="card flex typography-card" data-id={id}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}
