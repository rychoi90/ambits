import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = (props) => (
  <div>
    <TextField
      hintText= "Ambit Name"
      errorText="Please enter an Ambit Name"
      onKeyDown={''}// listen for ENTER key down and set ambit name to current state
    />
  </div>
);

export default TextFieldExampleSimple;