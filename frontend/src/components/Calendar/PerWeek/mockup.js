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
        bgColor: "#047B7C",
        dragBgColor: "#bbeb9f",
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

export const schedules = [
    { //  <----- стартовая ячейка события
        calendarId: "1",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "1",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours())),
        end: new Date(new Date().setHours(start.getHours() + 9))
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
        start: new Date(new Date().setHours(start.getHours() + 3)),
        end: new Date(new Date().setHours(start.getHours() + 5))
    },
    { //  <----- стартовая ячейка события
        calendarId: "4",
        category: "time",
        isVisible: true,
        title: "TEST",
        id: "4",
        body: "WAS PAINFULL FEELINGS",
        start: new Date(new Date().setHours(start.getHours() -5)),
        end: new Date(new Date().setHours(start.getHours() -4))
    }
];