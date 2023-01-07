import { Card } from "./Card";

export function CardsGrid(props) {
  const cards = props.pokemonCards.map((card) => (
    <Card key={card.id} src={card.imgUrl} name={card.name} />
  ));

  return (
    <div
      className="container container--cards grid"
      onClick={(e) => props.onCardClick(e)}
    >
      {cards}
    </div>
  );
}
