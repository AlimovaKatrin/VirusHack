import React, { useCallback, useRef, useEffect, useState } from "react";
import { render } from "react-dom";

import TUICalendar from "@toast-ui/react-calendar";
// import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

const schedules = [
    { //  <----- стартовая ячейка события
        calendarId: "1",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "1",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours() + 1)),
        end: new Date(new Date().setHours(start.getHours() + 2))
    },
    { //  <----- стартовая ячейка события
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "2",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours() + 1)),
        end: new Date(new Date().setHours(start.getHours() + 2))
    },
    { //  <----- стартовая ячейка события
        calendarId: "3",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "3",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours() + 1)),
        end: new Date(new Date().setHours(start.getHours() + 2))
    },
    { //  <----- стартовая ячейка события
        calendarId: "4",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "4",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours() + 1)),
        end: new Date(new Date().setHours(start.getHours() + 2))
    }
];
// категории
const calendars = [
    {
        id: "1",
        name: "Прогулка",
        color: "black",
        bgColor: "#8dc1cd",
        dragBgColor: "#a09ad6",
        // borderColor: "#3E8798"
    },
    {
        id: "2",
        name: "Прием пищи",
        color: "black",
        bgColor: "#047B7C",
        dragBgColor: "#bbeb9f",
        // borderColor: "#00a9ff"
    },
    {
        id: "3",
        name: "Прием лекарств",
        color: "black",
        bgColor: "#ebd7d1",
        dragBgColor: "#E96A3C",
        // borderColor: "#00a9ff"
    },
    {
        id: "4",
        name: "Процедуры",
        color: "black",
        bgColor: "#a09ad6",
        dragBgColor: "#281f75",
        // borderColor: "#00a9ff"
    },
    {
        id: "4",
        name: "Важно",
        color: "black",
        bgColor: "#a09ad6",
        dragBgColor: "#281f75",
        // borderColor: "#00a9ff"
    }
];

export default function ClendarPerWeek() {
    const [data, setData] = useState();
    const cal = useRef(null);
    // клик на созданную ячейку в календаре
    const onClickSchedule = useCallback(e => {
        console.log('onClickSchedule', e);
    }, []);
    
    const onBeforeCreateSchedule = useCallback(scheduleData => {
        console.log('onBeforeCreateSchedule', scheduleData);
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
        // создается ячейка
        cal.current.calendarInst.createSchedules([schedule]);
    }, []);
    
    const onBeforeDeleteSchedule = useCallback(res => {
        console.log('onBeforeDeleteSchedule', res);
        
        const { id, calendarId } = res.schedule;
        // удаляется ячейка
        cal.current.calendarInst.deleteSchedule(id, calendarId);
    }, []);
    
    const onBeforeUpdateSchedule = useCallback(e => {
        console.log('onBeforeUpdateSchedule', e);
        
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
        } else {
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
            console.log('templates', schedule);
            return _getTimeTemplate(schedule, false);
        }
    };
    
        // useEffect(() => {
        //     const fetchData = async () => {
        //         const result = await fetch(
        //             '/hi',
        //         );
    
        //         onBeforeCreateSchedule(await result.json());
        //     };
        //     fetchData();
        // }, [])
    
    return (
            <TUICalendar
                ref={cal}
                height="600px"
                useCreationPopup={true}
                useDetailPopup={true}
                template={templates}
                calendars={calendars}
                schedules={schedules}
                month={{
                    startDayOfWeek: 0
                  }}
                onClickSchedule={onClickSchedule}
                onBeforeCreateSchedule={onBeforeCreateSchedule}
                onBeforeDeleteSchedule={onBeforeDeleteSchedule}
                onBeforeUpdateSchedule={onBeforeUpdateSchedule}
                />
    );
}
