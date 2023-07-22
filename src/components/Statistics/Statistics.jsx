import PropTypes from "prop-types";
import css from './Statistics.module.css'
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    const statisticArray = [
        { statItem: good, title: 'Good' },
        { statItem: neutral, title: 'Neutral' },
        { statItem: bad, title: 'Bad' },
        { statItem: total, title: 'Total feedbacks' },
        { statItem: positivePercentage, title: 'Positive feedbacks' },
    ];

    return (
        <ul className={css.statisticList}>
            {statisticArray.map(({statItem, title}) => (
            <li className={css.statisticItem} key={title}>
                <p className={css.statisticP}>
                    {title}:{' '}
                    <span className={css.statisticSpan}>
                    {title !== 'Positive feedbacks'
                ? statItem : positivePercentage + '%'}
                    </span>
                </p>
            </li>
            ))}
        </ul>

    );
};
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };