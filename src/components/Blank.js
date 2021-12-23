import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Blank = ({ loading }) => {
  return (
    <div className="blank-wrap">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <FaGithub />
          <h2>GIST Finder</h2>
        </>
      )}
    </div>
  );
};

export default Blank;
