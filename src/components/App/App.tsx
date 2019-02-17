import * as React from 'react';
import Board from '../Board/Board';

interface AppProps {
  onToggle?(on: boolean): void;
}

const App: React.SFC<AppProps> = () => {
  return (
    <div className="container" data-testid="toggle-container">
      <Board />
    </div>
  );
};

export default App;
