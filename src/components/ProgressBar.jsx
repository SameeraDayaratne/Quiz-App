import React from 'react';

function ProgressBar({className}) {

    let classes = className;

    return (

            <progress className={classes} value="32" max="100"></progress>
       
    );
}

export default ProgressBar;