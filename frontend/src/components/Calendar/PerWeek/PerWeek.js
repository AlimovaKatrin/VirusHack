import React, { useCallback, useRef, useEffect, useState } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { addCurrentDayEventAC } from '../../../redux/action-creator';

import Calendar from "@toast-ui/react-calendar";
// import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import { calendars, schedules } from './mockup'

function ClendarPerWeek(props) {
    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState();
    const cal = useRef(null);
    console.log('-------------', props);
    
        // useEffect(() => {
        //     const fetchData = async () => {
        //         const response = await fetch(
        //             `/patient/${props.prop.match.params.id}/carePlan`, {
        //             method: 'PUT',
        //             headers: {
        //                'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 id: props.prop.match.params.id,
        //                 userId: props.prop.state.user._id,
        //                 shedules: props.state.carePlan
        //             })
        //         }
        //         );
        //         console.log(await response.json());

        //     };
        //     fetchData()
        // },[props.state.carePlan])
    
    // клик на созданную ячейку в календаре
    const onClickSchedule = useCallback(e => {
        console.log('onClickSchedule', e);
    }, []);

    const onBeforeCreateSchedule = useCallback(scheduleData => {
        // console.log('onBeforeCreateSchedule', scheduleData);
        // событие создается



        const schedule = {
            id: String(Math.random()),
            title: scheduleData.title,
            isAllDay: scheduleData.isAllDay,
            start: scheduleData.start,
            end: scheduleData.end,
            calendarId: scheduleData.calendarId,
            category: scheduleData.isAllDay ? "allday" : "time",
            dueDateClass: "",
            location: scheduleData.location,
            raw: {
                class: scheduleData.raw["class"]
            },
            state: scheduleData.state
        };
        setTrigger(!trigger);
        props.addCurrentDayEvent(schedule)
        cal.current.calendarInst.createSchedules([schedule]);
    }, []);

    const onBeforeDeleteSchedule = useCallback(res => {
        // console.log('onBeforeDeleteSchedule', res);

        const { id, calendarId } = res.schedule;
        // удаляется ячейка
        cal.current.calendarInst.deleteSchedule(id, calendarId);
    }, []);

    const onBeforeUpdateSchedule = useCallback(e => {
        // console.log('onBeforeUpdateSchedule', e);

        const { schedule, changes } = e;

        cal.current.calendarInst.updateSchedule(
            schedule.id,
            schedule.calendarId,
            changes
        );
    }, []);

    function _getFormattedTime(time) {
        const date = new Date(time);
        const h = date.getHours();
        const m = date.getMinutes();

        return `${h}:${m}`;
    }

    function _getTimeTemplate(schedule, isAllDay) {
        let html = [];

        if (!isAllDay) {
            html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
        }
        if (schedule.isPrivate) {
            html.push('<span class="calendar-font-icon ic-lock-b"></span>');
            html.push(" Private");
        }
        else {
            if (schedule.isReadOnly) {
                html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
            } else if (schedule.recurrenceRule) {
                html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
            } else if (schedule.attendees.length) {
                html.push('<span class="calendar-font-icon ic-user-b"></span>');
            } else if (schedule.location) {
                html.push('<span class="calendar-font-icon ic-location-b"></span>');
            }
            html.push(" " + schedule.title);
        }

        return html.join("");
    }

    const templates = {
        time: function (schedule) {
            // console.log('templates', schedule);
            return _getTimeTemplate(schedule, false);
        },
        alldayTitle: function () {
            return 'Весь день';
        },
        milestoneTitle: function () {
            return '';
        },
        milestone: function (schedule) {
            return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
        },

    };

    return (
        <Calendar
            usageStatistics={false}
            ref={cal}
            height="800px"
            useCreationPopup={true}
            useDetailPopup={true}
            template={templates}
            calendars={calendars}
            schedules={[...schedules, ...props.state.carePlan]}
            // theme={{'common.border': '3px solid black'}}

            week={{
                daynames: ['Вскр', 'Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                startDayOfWeek: -1,
            }}
            onClickSchedule={onClickSchedule}
            onBeforeCreateSchedule={onBeforeCreateSchedule}
            onBeforeDeleteSchedule={onBeforeDeleteSchedule}
            onBeforeUpdateSchedule={onBeforeUpdateSchedule}
        />
    );
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = dispatch => ({
    addCurrentDayEvent: (day) => dispatch(addCurrentDayEventAC(day))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClendarPerWeek);