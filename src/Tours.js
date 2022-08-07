/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Proptype from 'prop-types';
import Tour from './Tour';

const Tours = (props) => {
  const { tours, removeTour } = props;
  return (
    <section>
      <div className="title">
        <h2>our toors</h2>
        <div className="underline" />
      </div>
      <div>
        {tours.map((tour) => <Tour key={tour.id} {...tour} removeTour={removeTour} />)}
      </div>
    </section>
  );
};

export default Tours;

Tours.defaultProps = {
  tours: [],
  removeTour: () => {},
};

Tours.propTypes = {
  tours: Proptype.arrayOf(Proptype.shape({})),
  removeTour: Proptype.func,
};
