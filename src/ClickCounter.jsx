import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>Click me :)</button>
      <p>Clicked count: {count}</p>
      <button type="button" onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default ClickCounter
