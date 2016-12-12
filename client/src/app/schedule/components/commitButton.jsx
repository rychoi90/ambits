import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const commitButton = (props) => (
  <div>
    <RaisedButton
    label="Schedule It!"
    style={style}
    onTouchEnd= {''} // create ambit using date, name etc from current state
    />
  </div>
);


export default RaisedButtonExampleSimple;
