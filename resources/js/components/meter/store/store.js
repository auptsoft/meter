import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    powerConsumption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    powerConsumptionTime: ["1", "2", "3", "4", "5", "6", "8", "9", "10"],
    currentPowerConsumption: 0,

    allPowerConsumption: [],

    meter: { power: {}},

    allMeters: [],
    filteredMeters: [],

    allCustomers: [],
    allStaffs:[],
}

let mutations = {
    setPowerConsumption(state, powerConsumption) {
        state.powerConsumption = powerConsumption;
    },

    setPowerConsumptionTime(state, powerConsumptionTime) {
        state.powerConsumptionTime = powerConsumptionTime
    }, 

    updatePowerConsumption(state, currentPowerValue) {
        let d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();

        state.powerConsumption.push(currentPowerValue);
        state.powerConsumptionTime.push(hour+":"+min);
        
        state.powerConsumption.shift();
        state.powerConsumptionTime.shift();
    }, 

    updateCurrentPowerConsumption(state, currentPowerValue) {
        state.currentPowerConsumption = currentPowerValue;
    },

    updateAllPowerConsumption(state) {
        axios.get('/meter/public/api/meter/powerConsumption/'+window.meter_id).then((response)=>{
            let data = response.data;
            state.allPowerConsumption = data.reverse();
            //console.log(data);
        });
    },

    updateMeter(state, meter) {
        state.meter = meter;
    },

    getAllMeters(state, {complete}) {
        axios.request({
            method: "get",
            url: "/meter/public/api/meter",
        }).then((response)=> {
            let responseData = response.data;
            if (responseData.message == "success") {
                state.allMeters = responseData.data;
            }
            complete(responseData.message, responseData.data);
        }).catch((error)=>{
            complete("error", error);
        })
    }, 

    filterMeters(state, {complete}) {
        
    },

    getAllCustomers(state, {complete=f=>f}) {
        axios.request({
            method: "get",
            url: "/meter/public/api/all_customers",
        }).then((response)=> {
            let responseData = response.data;
            if (responseData.message == "success") {
                state.allCustomers = responseData.data;
            }
            complete(responseData.message, responseData.data);
        }).catch((error)=>{
            complete("error", error);
        })
    },

    getAllStaffs(state, {complete=f=>f}) {
        axios.request({
            method: "get",
            url: "/meter/public/api/all_staffs",
        }).then((response)=> {
            let responseData = response.data;
            if (responseData.message == "success") {
                state.allStaffs = responseData.data;
            }
            complete(responseData.message, responseData.data);
        }).catch((error)=>{
            complete("error", error);
        })
    },

    deleteCustomer(state, {customer, complete}) {
        axios.request({
            method: "delete",
            url: "/meter/public/api/deleteCustomer/"+customer.id,
        }).then((response)=> {
            let responseData = response.data;
            if (responseData.message == "success") {
                state.allStaffs = responseData.data;
            }
            complete(responseData.message, responseData.data);
            this.getAllCustomers(state);
        }).catch((error)=>{
            complete("error", error);
        })
    }
}

let actions = {
    deleteCustomer({commit}, {customer, complete}) {
        let com = ()=> {
            commit('getAllCustomers', {complete}) 
        }
        commit('deleteCustomer', {customer, complete:com})
    },

    greet() {
        console.log('hello');
    },

    saveAction({commit}, {meter, complete=f=>f}) {
        axios.request( {
            method: "post",
            url: "/meter/public/api/updateMeter",
            data: meter
        }).then((response)=> {
            Vue.$emit('editComplete')
            console.log( response );
            complete(response);
        }).catch((error)=>{
            console.log(error);
            complete(error);
        })
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
})