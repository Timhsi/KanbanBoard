import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div
      style={{
        margin: "30px 0",
      }}
    >
      {cards.map((card) => 
        <Card card={card} />
      )}
    </div>
  );
};

export default CardList;
