import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'



export default function Home() {
  const [guess, setGuess] = useState(0)
  const [number, setNumber] = useState(Math.floor(Math.random() * (100-1) * 1))
  const [listGuess, setListGuess] = useState([])
  const [displayMessage, setMessage] = useState('')
  const [colors, setColors] = useState('');
  console.log(number)

  // resets all of the values to their defaults and gets a new random number.
  const onClickReset = () => {
    setNumber(Math.floor(Math.random() * (100-1) * 1))
    setGuess(0)
    setListGuess([])
    setMessage('')
  }

  // gets the value for the guess and displays a message back to the user
  const onClickGuess = () => {
    // adds the value to the list of values
    setListGuess(value => [...value, ...[`You guessed ${guess}`]])
    
    // if statment to change the guess
    if(guess < number) {
     setColors(styles.yellow)
      setMessage('Your Guess is too low')
    } else if(guess > number) {
      setColors(styles.yellow)
      setMessage('Your guess is to High')
    } else if(guess == number) {
      setColors(styles.green)
      setMessage('Awsome Job, you got it!')
    }
    console.log(listGuess)
  }
  

  return (
    <div>
      <Head>
        <title>Guess The Number</title>
        <meta name="description" content="An guess the number game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          Guess The Number
        </div>
        <form className={styles.container}>
          <div className={styles.title_number}>
            1.2.3
          </div>
          <input 
            type="number" 
            className={styles.textBox}
            placeholder="What's your guess?"
            onChange={(e) => {
              console.log(e.target.value);
              setGuess(e.target.value);
            }}
          />
          {displayMessage != "" ? 
            (<div className={styles.guess}
              className={`${colors} ${styles.message}`}
            >
              
              {displayMessage}
            </div>) : 
          (<></>)
          }
          
          <div>
            <button
              className={styles.button}
              type="button"
              onClick={onClickGuess}
            >
              Check Me
            </button>
            <button 
              onClick={onClickReset}
              type="button"
              className={styles.button}
            >
              Reset
            </button>
          </div>
        </form>
        {listGuess.length > 0 ? 
          (<div className={styles.list}>
            {listGuess.map(guess => (
              <div className={styles.item}>{console.log(guess)}{guess}</div>
            ))}
          </div>) : 
          (<></>)
        }
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
