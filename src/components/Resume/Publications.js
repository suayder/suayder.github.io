import React from 'react';
import PropTypes from 'prop-types';

const Publications = ({ data, title }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>{title}</h3>
    </div>
    <ul className="points">
      {data.map((pub) => (
        <li key={pub.title}>
          {pub.title}
        </li>
      ))}
    </ul>
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
  })),
  title: PropTypes.string,
};

Publications.defaultProps = {
  data: [],
  title: 'Publications',
};

export default Publications;
