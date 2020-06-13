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

  returnLatestFiveValuesOfArray = (array) => {
    return array.slice(array.length - 10, array.length)
  }

  pushDataToState = (data) => {
    const tempData = [];
    const { grid } = this.state;
    data.forEach((item, idx) => {
      tempData[idx] = [];
      item.forEach((value) => {
        if(idx === 0) {
          tempData[idx].push({value, readOnly: true});
        }
        if(idx > 0) {
          tempData[idx].push({value,  colSpan: 1});
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
      data.splice(data.length - 1 , 1); 
      let dataHeading = data.splice(0, 1);
      dataHeading[0].splice(0, 1);
      tempData[0] = dataHeading[0]
      const lastFiveValuesFromArray = this.returnLatestFiveValuesOfArray(data)
      lastFiveValuesFromArray.forEach((item) => tempData.push(item))

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
        <ChipComponent name='Last 10 days data' />
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