export function Card(props) {
  const { src, name } = props;

  return (
    <div className="card flex">
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  )
}