import { useRef } from 'react'

export default function Card({ el }) {
  const imgRef = useRef()

  return (
    <div
      className="card-container"
      onMouseOver={() => {
        imgRef.current.src = process.env.PUBLIC_URL + '/smile.png'
      }}
      onMouseOut={() => {
        imgRef.current.src = process.env.PUBLIC_URL + '/cry.png'
      }}
    >
      <img className="card-img" src={el.avatar_url} alt="faccia"></img>
      <div>
        <p>{el.login}</p>
        <p>{el.name}</p>
      </div>
      <img
        className="card-face"
        src={process.env.PUBLIC_URL + '/cry.png'}
        alt="face"
        ref={imgRef}
      ></img>
    </div>
  )
}
