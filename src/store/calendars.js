/**
 * Calendars follow the following structure:
 * {
 *  name: "My calendar",
 *  carga: "An academic load",
 *  career: "A career",
 *  sections: [] // An array of sections
 * }
 */

const state = {
  localCalendars: [], // Starts empty, then gets populated with the calendars from the local storage
  selectedCalendar: null,
};

const mutations = {
  setLocalCalendars(state, calendars) {
    state.localCalendars = calendars;
  },

  setSelectedCalendar(state, calendar) {
    state.selectedCalendar = calendar;
  },

  addCalendar(state, calendar) {
    state.localCalendars.push(calendar);
  },

  removeCalendar(state, calendar) {
    state.localCalendars = state.localCalendars.filter(
      (c) => c.id !== calendar.id
    );
  },

  updateCalendar(state, calendar) {
    const index = state.localCalendars.findIndex((c) => c.id === calendar.id);
    state.localCalendars.splice(index, 1, calendar);
  },
};

const actions = {
  async getLocalCalendars({ commit }) {
    const calendars = localStorage.getItem("calendars");
    commit("setLocalCalendars", calendars);
  },

  // This is used over and over again, so it's better to have it as a function
  async saveLocalCalendars({ state }) {
    localStorage.setItem("calendars", JSON.stringify(state.localCalendars));
  },

  async addCalendar({ commit, dispatch }, calendar) {
    commit("addCalendar", calendar);
    dispatch("saveLocalCalendars");
  },

  async removeCalendar({ commit, dispatch }, calendar) {
    commit("removeCalendar", calendar);
    dispatch("saveLocalCalendars");
  },

  async updateCalendar({ commit, dispatch }, calendar) {
    commit("updateCalendar", calendar);
    dispatch("saveLocalCalendars");
  },

  async selectCalendar({ commit }, calendar) {
    commit("setSelectedCalendar", calendar);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
