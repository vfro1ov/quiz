export default function Game(props) {

const percentage = Math.round((props.step / props.question.length) * 100);
console.log(percentage)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%`}} className="progress__inner"></div>
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