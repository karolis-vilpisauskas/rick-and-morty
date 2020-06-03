import PropTypes from 'prop-types' ;
import React from 'react';

const Column = ({children, otherClasses, width }) => {
    return (
        <div className={`w-${width} ${otherClasses}`}>
            {children}
        </div>
    )
}

export default Column

Column.propTypes = {
    children: PropTypes.element.isRequired,
    otherClasses: PropTypes.string,
    width: PropTypes.string
}