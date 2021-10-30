import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Statistics from './components/Statistics';
import './App.css';

class App extends React.Component {
  /*
Сперва начальные параметры,
Потом пропсТайпы
Потом стейт
Потом обработчики-функции
Потом РЕНДЕР.
*/
  constructor() {
    super();
    this.x = 50;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onIncrement={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
