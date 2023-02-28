const Movie = (props) => {
  return (
    <div className="movie">
        <img src={props.Img} alt="" />
        <p>{props.Title}</p>
        <p>{props.year}</p>
    </div>
  )
}
export default Movie

