import './Board.css';
import * as React from 'react';
import List from '../List/List';

interface IList {
  id: number;
  name: string;
}
interface IProps {
  lists?: IList[];
  title?: string;
}

const Board: React.FunctionComponent<IProps> = ({ lists = [], title = '' }) => {
  const [list, setList] = React.useState(lists);
  const [counter, setCounter] = React.useState(1);

  function handleClick(e: any) {
    e.preventDefault();
    setList([...list, { id: counter, name: '' }]);
    setCounter(counter + 1);
  }

  return (
    <div className={'board'}>
      <div className={'list'}>
        {list &&
          list.map(val => (
            <div key={val.id} className={'list'}>
              <List />
            </div>
          ))}
      </div>
      <button onClick={e => handleClick(e)}>Add List</button>
    </div>
  );
};

export default Board;
