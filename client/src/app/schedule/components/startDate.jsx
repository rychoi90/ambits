import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const StartDate = (props) => (
  <div>
    <DatePicker
    hintText="Select Ambit Start Date"
    onChange= {''} //set start date value in current state
    />
  </div>
);

export default StartDate;