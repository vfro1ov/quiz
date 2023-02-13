export default function Game(props) {

const percentage = Math.round((props.step / props.question.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%`}} className="progress__inner"></div>
      </div>
      <h1>{props.question.title}</h1>
      <ul>
        {props.question.variants.map((text)=>
				(<li onClick={() => props.onClickVariant(props.index)} key={text}>{text}
				</li>))}
      </ul>
    </>
  );
}