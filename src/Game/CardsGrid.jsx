import { Card } from "./Card";

export function CardsGrid(props) {

  return (
    <div className="container container--cards grid" onClick={(e) => props.onCardClick(e)}>
      <Card
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
        name="clafairy"
      />
    </div>
  );
}
