import PropTypes from "prop-types";
import React from 'react';

const FlexContainer = ({children, wrap, direction}) => {

    const wrapClass = wrap ? `flex-${wrap}` : '' ;
    const directionClass = direction ? `flex-${direction}` : '' ;

    return (
        <div className={`flex ${wrapClass} ${directionClass} `}>
            {children}
        </div>
    )
}

export default FlexContainer

FlexContainer.propTypes = {
    children: PropTypes.element.isRequired,
    wrap: PropTypes.oneOf(["no-wrap", "wrap", "wrap-reverse", '']),
    direction: PropTypes.oneOf(["", "row", "col", "row-reverse", "col-reverse"])
  };