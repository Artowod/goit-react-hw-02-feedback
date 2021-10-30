import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Statistics from './components/Statistics';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={5}
          neutral={4}
          bad={5}
          total={2}
          positivePercentage={23}
        />
      </Section>
    </div>
  );
}

export default App;
