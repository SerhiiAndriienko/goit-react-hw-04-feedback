import React, { useState, useEffect } from 'react';
import Statistics from './statistics/statistics';
import Options from './options/options';
import Section from './Section/section';
import './App.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentOfGood, setPercentOfGood] = useState('');

  const clickOnBtn = e => {
    switch (e.target.textContent) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log(e.target.textContent);
    }
  };

  useEffect(() => {
    const total = bad + good + neutral;
    setTotal(total);
    const percents = ((good * 100) / (bad + good + neutral)).toFixed(0);
    setPercentOfGood(percents);
  }, [good, bad, neutral]);

  return (
    <div>
      <Section title="Please leave feedback">
        <Options clickOnButton={clickOnBtn}></Options>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentOfGood + '%'}
        ></Statistics>
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   goode = () => {
//     this.setState(prevState => ({
//       good: (prevState.good += 1),
//     }));
//   };
//   neutraly = () => {
//     this.setState(prevState => ({
//       neutral: (prevState.neutral += 1),
//     }));
//   };
//   bady = () => {
//     this.setState(prevState => ({
//       bad: (prevState.bad += 1),
//     }));
//   };
//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return `${(
//       (this.state.good * 100) /
//       (this.state.bad + this.state.good + this.state.neutral)
//     ).toFixed(0)}%`;
//   };

//   render() {
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <Options
//             clickOnButtonG={this.goode}
//             clickOnButtonN={this.neutraly}
//             clickOnButtonB={this.bady}
//           ></Options>
//           <h2>Statistics</h2>
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           ></Statistics>
//         </Section>
//       </div>
//     );
//   }
// }
