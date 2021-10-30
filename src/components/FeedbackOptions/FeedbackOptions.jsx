import FeedbackBtn from '../../shared/components/FeedbackBtn';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onIncrement }) => {
  return (
    <div>
      <FeedbackBtn name="good" onIncrement={onIncrement} />
      <FeedbackBtn name="neutral" onIncrement={onIncrement} />
      <FeedbackBtn name="bad" onIncrement={onIncrement} />
    </div>
  );
};

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
