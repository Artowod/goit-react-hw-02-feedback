import StatisticsElement from './StatisticsElement';
import s from './Statistics.module.css';

const Statistics = elements => {
  return (
    <>
      {Object.entries(elements).map(item => {
        return (
          <StatisticsElement key={item[0]} name={item[0]} value={item[1]} />
        );
      })}
    </>
  );
};

export default Statistics;
