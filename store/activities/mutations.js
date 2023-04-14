export default {
  setActivities(state, { data }) {
    state.activities = data
  },
  updateLiveActivity(state, { data }) {
    state.liveActivity = data[0]
  } 
}