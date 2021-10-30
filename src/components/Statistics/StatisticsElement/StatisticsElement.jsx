import s from './StatisticsElement.module.css';
const StatisticsElement = ({ name, value }) => (
  <div className={s.wrapper}>
    <span className={s.name}>
      {name === 'positivePercentage' ? 'positive feedback' : name}:&nbsp;
    </span>
    <span className={s.value}>{value}</span>
  </div>
);
export default StatisticsElement;
