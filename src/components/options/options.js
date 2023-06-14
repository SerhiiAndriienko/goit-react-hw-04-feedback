import PropTypes from 'prop-types';
function Options({ clickOnButton }) {
  return (
    <div>
      <button onClick={clickOnButton}>Good</button>

      <button onClick={clickOnButton}>Neutral</button>
      <button onClick={clickOnButton}>Bad</button>
    </div>
  );
}
Options.propTypes = {
  clickOnButton: PropTypes.func.isRequired,
};
export default Options;
