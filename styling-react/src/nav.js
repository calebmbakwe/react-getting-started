import React from "react";
import navStyles from "./nav-styles";
import Radium from "radium";

const { func, bool } = React.PropTypes;

const getPreviousStyles = props =>
  props.hasPrevious ? navStyles.prev : navStyles.prevHidden;
const getNextStyles = props =>
  props.hasNext ? navStyles.next : navStyles.nextHidden;

function Nav(props) {
  return (
    <div style={navStyles.root}>
      <button
        ref="prev"
        style={getPreviousStyles(props)}
        onClick={props.onPrevious}
      >
        &#10094;
      </button>
      <button ref="next" style={getNextStyles(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
};

export default Radium(Nav);
