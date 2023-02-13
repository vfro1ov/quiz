import { useState } from 'react';
import Game from './component/Game';
import Result from './component/Result';
import './index.scss';

export const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {
	const [step,setStep] = useState(0);
	const [corrects,setCorrects] = useState(0);
	const percentage = Math.round((step / questions.length) * 100);
	console.log(percentage)

	const question = questions[step]

	const onClickVariant =(index) => {
		console.log(step,index);
		setStep(step + 1);
		if (index === question.correct) {
			setCorrects(corrects + 1)
		}
	};
  return (
    <div className="App">
			{
				step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/>
			:
      <Result correct={corrects}/> 
			}
    </div>
  );
}

export default App;
