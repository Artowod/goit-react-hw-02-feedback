import FeedbackBtn from '../../shared/components/FeedbackBtn';

const FeedbackOptions = ({ onIncrement }) => {
  return (
    <div>
      <FeedbackBtn name="good" onIncrement={onIncrement} />
      <FeedbackBtn name="neutral" onIncrement={onIncrement} />
      <FeedbackBtn name="bad" onIncrement={onIncrement} />
    </div>
  );
};

export default FeedbackOptions;
