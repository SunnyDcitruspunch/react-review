import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>Click me :)</button>
      <p>Clicked count: {count}</p>
    </div>
  )
}

export default ClickCounter
