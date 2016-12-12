import React from 'react';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import DropDownList from './dropdown.jsx';
import CommitButton from './commitButton.jsx';
import StartDate from './startDate.jsx';
import SelectDays from './selectDays.jsx';
import AmbitNameInput from './ambitNameInput.jsx';
import * as Utils from '../../utils/utils.js'

export default class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownValue: 'Weekly',
      startDateValue: null,
      selectDaysValue: [0,0,0,0,0,0,0], //[Su,M,T,w,Th,F,Sa]
      ambitNameValue: ''
    };
    this.onNameInput = this.onNameInput.bind(this);
    this.onDropDownSelect = this.onDropDownSelect.bind(this);
    this.onStartDateSet = this.onStartDateSet.bind(this);

    this.onSelectDays = {
      onSelectDaysInputSunday: this.onSelectDaysInputSunday.bind(this),
      onSelectDaysInputMonday: this.onSelectDaysInputMonday.bind(this),
      onSelectDaysInputTuesday: this.onSelectDaysInputTuesday.bind(this),
      onSelectDaysInputWednesday: this.onSelectDaysInputWednesday.bind(this),
      onSelectDaysInputThursday: this.onSelectDaysInputThursday.bind(this),
      onSelectDaysInputFriday: this.onSelectDaysInputFriday.bind(this),
      onSelectDaysInputSaturday: this.onSelectDaysInputSaturday.bind(this),
    }

    console.log(this.onSelectDays.onSelectDaysInputSaturday)
    // this.state.handleDropDownChange =this.state.handleDropDownChange.bind(this);
  }

  onNameInput(nameInputEvent) {
    if (nameInputEvent.keyCode === 13) {
      this.setState({
        ambitNameValue: nameInputEvent.target.value
      });
      // WORKS
      // console.log(this.state.ambitNamseValue, 'ambitNameValue');
    }
  }

  onStartDateSet(event, date) {
    this.setState({
      startDateValue: date
    });
    // WORKS
    // console.log(date, 'startDateValue');
  }

// this function was meant to take in the day index and the checked boolean, however 'this' being bound in the SelectDays module is causing issues with accessing this.state.
//////////////////////////////////////////////////

    // onSelectDaysInput(day, event, checked) {

      // var currentState = this.state;
      // currentState.selectDaysValue[day] = checked;
      // console.log(day, checked);
      // this.setState(currentState);
      // this.setState({
      //   startDateValue[day] = checked
      // })
      // ;
    // }
    // // time to write some UGLY CODE YAY.
//////////////////////////////////////////////////



// DONT JUDGE ME, IM PRESSED FOR TIME D;
//////////////////////////////////////////////////
onSelectDaysInputSunday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[0] = checked;
  this.setState(currentState)
}

onSelectDaysInputMonday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[1] = checked;
  this.setState(currentState)
}

onSelectDaysInputTuesday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[2] = checked;
  this.setState(currentState);
}

onSelectDaysInputWednesday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[3] = checked;
  this.setState(currentState)
}

onSelectDaysInputThursday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[4] = checked;
  this.setState(currentState)
}

onSelectDaysInputFriday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[5] = checked;
  this.setState(currentState)
}

onSelectDaysInputSaturday(event, checked) {
  var currentState = this.state;
  currentState.selectDaysValue[6] = checked;
  this.setState(currentState)
}
//////////////////////////////////////////////////


  onDropDownSelect(eventObj, selectedItemKey, selectedItemPayload) {
    this.setState({
      dropdownValue: selectedItemPayload
    });
    console.log(selectedItemPayload, 'dropdownvalue select');
  }




  render() {
    return (
      <div>
        <div>
          <AmbitNameInput
            onNameInput={this.onNameInput}
            ambitNameValue={this.state.ambitNameValue}
            />
        </div>
        <div>
          <StartDate
            onStartDateSet={this.onStartDateSet}
            startDateValue={this.state.startDateValue}/>
        </div>
        <div>
          <DropDownList
            onDropDownSelect={this.onDropDownSelect}
            dropdownValue={this.state.dropdownValue}
            handleDropDownChange={this.state.handleDropDownChange}/>
        </div>
        <div>
        <SelectDays
            onSelectDaysInput={this.onSelectDays}
            selectDaysValue={this.state.selectDaysValue}/>
        </div>
        <div>
          <CommitButton currentState = {this.state}/>
        </div>
      </div>
    );
  }
}
