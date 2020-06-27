import React from 'react';
import Datasheet from 'react-datasheet';
import { ChipComponent } from '../Chip';

export default class BasicSheet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: [],
    }
  }

  returnLatestValuesOfArray = (array) => {
    return array.slice(array.length - 14, array.length)
  }

  pushDataToState = (data) => {
    const tempData = [];
    const { grid } = this.state;
    data.forEach((item, idx) => {
      tempData[idx] = [];
      item.forEach((value) => {
        // READ ONLY FOR COLUMN at idx 0
        if(idx === 0) {
          tempData[idx].push({value, readOnly: true});
        }
          // VALUE greater than idx 0
        if(idx > 0) {
          tempData[idx].push({value});
        }
      })      
    })

    this.setState({
      grid: tempData,
    })
  }
    
  changeDataToGrid = (data) => {
    const { grid } = this.state;
    const tempData = [];

    if(!(Array.isArray(grid) && grid.length)) {
      // REMOVE LAST ELEMENT FROM ARRAY BECAUSE ITS EMPTY
      data.splice(data.length - 1 , 1);
      data[1].splice(data[1].length - 1 , 1);
      // REMOVE AND ADD HEADING COMPONENT in tempData at index 0
      let dataHeading = data.splice(0, 1);
      tempData[0] = dataHeading[0]
      // returnLatestValuesOfArray from ALL DATES 
      const lastDatesFromArray = this.returnLatestValuesOfArray(data[0])
      // returnLatestValuesOfArray from ALL DATA 
      const lastFiveValuesFromArray = this.returnLatestValuesOfArray(data)

      lastFiveValuesFromArray.forEach((item, i) => {
        tempData.push(item)
        //ADD DATE IN EVERY ARRAY AT INDEX 0
        tempData[i+1].splice(0, 0, lastDatesFromArray[i])
      })
      this.pushDataToState(tempData)
    }
  }

  componentDidMount = () => {
    const { data } = this.props;
    if(data.length > 1) {
      this.changeDataToGrid(data)
    }
  }

  render () {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
       <div>
        <ChipComponent name='Last 14 days data' />
       </div>
      <div style={{ marginTop: '20px'}}>
        <Datasheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
          className={{
            width: '1000px',
            height: '500px',
          }}
        />
      </div>
    </div>
    )
  }
}