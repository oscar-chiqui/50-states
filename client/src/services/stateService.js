// axios request to serve /api/states by stateName from getallStates.


import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then (response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        //api/state() any state 
        let requestData = { visited: visited }
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    }
}