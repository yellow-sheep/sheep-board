import * as React from 'react';

interface IProps {
  title: string;
}

export interface ICard {
  title: string;
  id: number;
}

const Card: React.SFC<IProps> = ({ title }) => {
  return (
    <div>
      <label>{title}</label>
    </div>
  );
};

export default Card;
