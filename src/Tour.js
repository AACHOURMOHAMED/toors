/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptype from 'prop-types';

const Tour = (props) => {
  const [ReadMore, setReadMore] = useState(false);
  const handleReadMoreBtn = () => {
    setReadMore(!ReadMore);
  };
  const {
    id, image, info, price, name, removeTour,
  } = props;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            $
            {price}
          </h4>
        </div>
        <p>
          {info}
          {ReadMore ? info : `${info.substring(0, 100)}...`}
          <button type="button" onClick={handleReadMoreBtn}>
            {ReadMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn" type="button">Not interseted</button>
      </footer>
    </article>
  );
};
export default Tour;

Tour.defaultProps = {
  id: 0,
  image: '',
  info: '',
  price: 0,
  name: '',
  removeTour: () => {},
};

Tour.propTypes = {
  id: Proptype.node,
  image: Proptype.node,
  info: Proptype.node,
  price: Proptype.node,
  name: Proptype.node,
  removeTour: Proptype.func,
};
