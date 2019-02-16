import * as React from 'react'
import List from '../List/List'

interface IList {
  id: number
  name: string
}
interface IProps {
  lists?: IList[]
  title?: string
}

const Board: React.FunctionComponent<IProps> = ({ lists = [], title = '' }) => {
  const [list, setList] = React.useState(lists)
  const [counter, setCounter] = React.useState(1)

  function handleClick(e: any) {
    e.preventDefault()
    setList([...list, { id: counter, name: '' }])
    setCounter(counter + 1)
  }

  return (
    <React.Fragment>
      {list && list.map(val => <List key={val.id} />)}
      <button onClick={e => handleClick(e)}>Add List</button>
    </React.Fragment>
  )
}

export default Board
