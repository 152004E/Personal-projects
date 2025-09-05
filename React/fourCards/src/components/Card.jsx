
const Card = ({title,description,img}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={img} alt="Icon" />
    </div>
  )
}

export default Card
