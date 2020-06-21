import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { DatePicker } from "@material-ui/pickers";


const Calendar = (props) => {
  const { onChange, value } = props
  
  return (
    <div style={{ marginLeft: -15, marginRight: -15}}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          autoOk
          orientation="portrait"
          disableToolbar
          variant="static"
          openTo="date"
          value={value}
          onChange={onChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Calendar
