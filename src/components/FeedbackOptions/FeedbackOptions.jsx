import FeedbackBtn from '../../shared/components/FeedbackBtn';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  console.log('1');
  return (
    <div>
      <FeedbackBtn name="Good" />
      <FeedbackBtn name="Neutral" />
      <FeedbackBtn name="bad" />
    </div>
  );
};

export default FeedbackOptions;
