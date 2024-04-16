import PropTypes from 'prop-types';

function CardYugioh({ yugioh }) {
  const { name, imgSrc } = yugioh;

  return (
    <div className="yugioh-card">
      <h2>{name}</h2>
      {imgSrc ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <p>Cette carte n'est pas disponible</p>
      )}
    </div>
  );
}

CardYugioh.propTypes = {
  yugioh: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default CardYugioh;