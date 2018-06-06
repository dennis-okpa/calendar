export default {
  events: {
    items: [],
    item: {
      id: 0,
      summary: "",
      description: "",
      date: (new Date()).getTime()
    },
    data: {}
  },
  calendar: {
    date: new Date()
  },
  modal: {
    show: false,
    title: "",
    data: {}
  }
};