export default function Game(props) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${props.percentage}%`}} className="progress__inner"></div>
      </div>
      <h1>{props.question.title}</h1>
      <ul>
        {props.question.variants.map((text, index)=>
				(<li onClick={() => props.onClickVariant(index)} key={text}>{text}
				</li>))}
      </ul>
    </>
  );
}