import FeedbackOptions from '../FeedbackOptions';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Section;
