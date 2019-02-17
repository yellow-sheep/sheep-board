import * as React from 'react';
import Card, { ICard } from '../Card/Card';
import { InputBox } from '../InputBox/InputBox';

const List: React.SFC = () => {
  const initialCards: ICard[] = [];

  const [cards, setCards] = React.useState(initialCards);
  const [id, setId] = React.useState(1);

  function handleSubmit(e: any) {
    e.preventDefault();
    const { input } = e.target.elements;

    setCards(cards.concat({ title: input.value, id }));
    setId(id + 1);
  }

  return (
    <React.Fragment>
      <div>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
        <form onSubmit={handleSubmit}>
          <div>
            <InputBox name="input" placeholder="enter title..." />
          </div>
          <button>Add Card</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default List;
