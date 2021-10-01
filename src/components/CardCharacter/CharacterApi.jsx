import React from 'react';
import PropTypes from 'prop-types'

const CharacterApi = ({
    name, 
    gender, 
    location,
    episode,
    image
}) => {
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>{location}</p>
      <p>{episode}</p>
    </div>
};
CharacterApi.PropTypes = {
  image: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired
}

export default CharacterApi;