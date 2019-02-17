import * as React from 'react';
import Card, { ICard } from '../Card/Card';

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

interface InputProps {
  text?: string;
  placeholder?: string;
  name?: string;
}

const InputBox: React.SFC<InputProps> = ({
  text = '',
  placeholder = '',
  name,
}) => {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    setValue(text);
  }, []);
  return (
    <input
      name={name}
      value={value}
      onChange={e => setValue(e.target.value)}
      type="text"
      placeholder={placeholder}
    />
  );
};

export { InputBox };
