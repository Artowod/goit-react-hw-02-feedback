import FeedbackBtn from '../../shared/components/FeedbackBtn';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onIncrement }) => {
  return (
    <div>
      {options.map(btn => (
        <FeedbackBtn name={btn} onIncrement={onIncrement} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
