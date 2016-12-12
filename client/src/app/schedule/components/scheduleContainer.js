import React from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import DropDownList from './dropdown';
import commitButton from './commitButton';
import commitButton from './commitButton';
import startDate from './startDate';
import selectDays from './selectDays';

export default class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownValue: 'Weekly',
      startDateValue: 'MM/DD/YYYY',
      selectDaysValue: [],
      ambitNameValue: ''
    };
  }

  onDropDownSelect(e) {
    this.setState({
      dropdownValue: e.target.value
    });
  }

  onStartDateSet() {

  }

  onNameInput() {

  }

  onSelectDaysInput() {

  }

  render() {
    return (
      <div>
        <div>
          <ambitName
            onNameInput={this.onNameInput.bind(this)}
            ambitNameValue={this.state.ambitNameValue}
          />
        </div>
        <div>
          <DropDownMenu
            onDropDownSelect={this.onDropDownSelect.bind(this)}
            dropdownValue={this.state.dropdownValue}>
          </DropDownMenu>
        </div>
        <div>
          <startDate
            onStartDateSet={this.onStartDateSet.bind(this)}
            startDateValue={this.startDateValue}
          />
        </div>
        <div>
          <selectDays
            onSelectDaysInput={this.onSelectDaysInput.bind(this)}
            selectDaysValue={this.selectDaysValue}
          />
        </div>
        <div>
          <commitButton />
        </div>
      </div>
    );
  }
}
