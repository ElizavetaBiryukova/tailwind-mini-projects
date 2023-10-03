import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Hello</h1>

      <input
        className={styles.input}
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className={styles.input}
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>Login</button>
      {isOpen && <button className='animate-fade'>TEST</button>}
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>

      </article>
    </div>


  )
}

export default App
