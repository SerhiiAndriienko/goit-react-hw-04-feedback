import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
