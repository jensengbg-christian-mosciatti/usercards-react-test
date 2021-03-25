import './CardList.css'
import Card from './Card'

export default function CardList({ cards }) {
  return (
    <div className="cardlist-container">
      <ul>
        {cards.map((el, key) => {
          return (
            <li cc={key} key={key}>
              <Card el={el} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
