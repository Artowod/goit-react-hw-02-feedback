import s from './FeedbackBtn.module.css';

const FeedbackBtn = ({ name = '', onIncrement }) => (
  <button className={s[name]} type="button" name={name} onClick={onIncrement}>
    {name}
  </button>
);
export default FeedbackBtn;
