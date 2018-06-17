export default {
  events: {
    items: [],
    item: {
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