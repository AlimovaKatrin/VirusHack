const start = new Date('December 19, 1995 03:24:00');
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
console.log('start,start', start);

export const calendars = [
    {
        id: "1",
        name: "Прогулка",
        color: "black",
        bgColor: "#8dc1cd",
        dragBgColor: "#a09ad6",
        borderColor: "tomato"
    },
    {
        id: "2",
        name: "Прием пищи",
        color: "black",
        bgColor: "#bbeb9f",
        dragBgColor: "#bbeb9f" ,
        borderColor: "#00a9ff"
    },
    {
        id: "3",
        name: "Прием лекарств",
        color: "black",
        bgColor: "#ebd7d1",
        dragBgColor: "#E96A3C",
        borderColor: "black"
    },
    {
        id: "4",
        name: "Процедуры",
        color: "black",
        bgColor: "#a09ad6",
        dragBgColor: "#281f75",
        borderColor: "#E96A3C"
    },
    {
        id: "5",
        name: "Важно",
        color: "black",
        bgColor: "tomato",
        dragBgColor: "#281f75",
        borderColor: "#EAEFF6"
    }
];
// bgColor: "#8dc1cd"
// borderColor: "tomato"
// calendarId: "1"
// category: "time"
// color: "black"
// dragBgColor: "#a09ad6"
// dueDateClass: ""
// end: TZDate {_date: Sun May 03 2020 02:00:00 GMT+0300 (Moscow Standard Time)}
// id: "0.10929462632752784"
// isAllDay: false
// location: undefined
// raw: {class: "public"}
// start: TZDate {_date: Sun May 03 2020 01:30:00 GMT+0300 (Moscow Standard Time)}
// state: "Busy"
// title: "Посетить собачий приют"
export const schedules = [
    { //  <----- стартовая ячейка события
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "Завтрак",
        id: "654654",
        body: "Каша, Смузи",
        start: 'Sun May 03 2020 08:30:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 09:30:00 GMT+0300 (Moscow Standard Time)'
    }, { //  <----- стартовая ячейка события
        calendarId: "3",
        category: "time",
        isVisible: true,
        title: "Ибупрофен, Пятьног",
        id: "12312313",
        body: "1 таблетка ибупрофена, 2 таблетки пятьног",
        start: 'Sun May 03 2020 10:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 11:00:00 GMT+0300 (Moscow Standard Time)'
    }, {
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "Ланч",
        id: "654654",
        body: "Чай,Тосты",
        start: 'Sun May 03 2020 11:30:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 12:00:00 GMT+0300 (Moscow Standard Time)'
    },
    { //  <----- стартовая ячейка события
        calendarId: "1",
        category: "time",
        isVisible: true,
        title: "Посетить собачий приют",
        id: "9999999",
        body: "Такси до Ленинского",
        start: 'Sun May 03 2020 12:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 15:00:00 GMT+0300 (Moscow Standard Time)'
    }, //  <----- стартовая ячейка события

    { //  <----- стартовая ячейка события
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "Обед",
        id: "2123131",
        body: "Суп,пюре,свежие овощи",
        start: 'Sun May 03 2020 16:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 17:00:00 GMT+0300 (Moscow Standard Time)'
    },
    { //  <----- стартовая ячейка события
        calendarId: "4",
        category: "time",
        isVisible: true,
        title: "Укол",
        id: "2123131",
        body: "WAS PAINFULL FEELINGS",
        start: 'Sun May 03 2020 17:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 03 2020 17:30:00 GMT+0300 (Moscow Standard Time)'
    },
    { //  <----- стартовая ячейка события
        calendarId: "5",
        category: "time",
        isVisible: true,
        title: "Офтальмолог 12 больница",
        id: "2123131",
        body: "Ирина Алексеевна просила принести карту боли",
        start: 'Sun May 04 2020 13:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 04 2020 17:30:00 GMT+0300 (Moscow Standard Time)'
    },{ //  <----- стартовая ячейка события
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "Завтрак",
        id: "65464554",
        body: "Каша, Смузи",
        start: 'Sun May 04 2020 09:00:00 GMT+0300 (Moscow Standard Time)',
        end: 'Sun May 04 2020 10:30:00 GMT+0300 (Moscow Standard Time)'
    }, 
];