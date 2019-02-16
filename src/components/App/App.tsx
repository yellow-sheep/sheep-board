import * as React from 'react'

interface AppProps {
  onToggle?(on: boolean): void
}

const App: React.SFC<AppProps> = () => {
  return (
    <div className="container" data-testid="toggle-container">
      + Add Container
    </div>
  )
}

export default App
