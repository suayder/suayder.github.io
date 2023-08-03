import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <Link to={`/projects/${data.id}`}>
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </Link>
      {/* <a href={data.link} className="image">
      </a> */}
      <div className="description">
        <p>
          {data.desc}
          <br />
          <Link to={`/projects/${data.id}`}>
            <b>Clique aqui para ler mais</b>
          </Link>
          {/* <a href="link"><b>Clique aqui para ler mais</b></a> */}
        </p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
