import Card from './Card'

export default function CardList(props) {
  return (
    <div>
      <ul>
        {props.list.map((el, key) => {
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
