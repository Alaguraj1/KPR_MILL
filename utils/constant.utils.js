

// evolution section date field
export const CustomDate = ({ date, firstLine, secondLine }) => (
    <div className="custom-date">
      <div className="date-line">{date}</div>
      <div className="date-description">
        <div className="first-line">{firstLine}</div>
        <div className="second-line">{secondLine}</div>
      </div>
    </div>
  );