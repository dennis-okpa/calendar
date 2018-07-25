import React from 'react';
import Modal from '../../containers/common/Modal';
import Month from '../../containers/calendar/Month';
import EventForm from '../../containers/calendar/EventForm';
import { NotificationContainer } from 'react-notifications';
import YearMonthSelector from 'react-year-month-selector';

// Since this component is simple and static, there's no parent container for it.
const Calendar = ({calendarDate, monthTitle, handleSave, handleDelete, previousMonth, nextMonth, showMonthPicker, handleMonthDatePickerOpen, handleMonthDatePickerClose}) => (
  <div>
    <a className="navToNextMonth" href={nextMonth} style={{float:"right"}}>next</a>
    <a className="navToPreviousMonth" href={previousMonth} style={{float:"left"}}>previous</a>
    <div className="monthTitle">
        <div className="monthTitleCenter">
            <h1 onClick={handleMonthDatePickerOpen}>{monthTitle}</h1>
            <YearMonthSelector
              year={calendarDate.getFullYear()}
              month={calendarDate.getMonth()}
              onChange={ (year, month) => {
                  window.location.href="/?year="+year+"&month="+month;
              } }
              open={showMonthPicker}
              onClose={handleMonthDatePickerClose}
            />
        </div>
    </div>
    <Month date={calendarDate} />
    <Modal className="calendar_events" handleSave={handleSave} handleDelete={handleDelete}>
      <EventForm />
    </Modal>
    <NotificationContainer/>
  </div>
);

export default Calendar;
