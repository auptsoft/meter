
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import store from "./components/meter/store/store";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import PhaseStateComponent from './components/meter/PhaseStateComponent';
import ControlsComponent from './components/meter/ControlsComponent';
import CurrentConsumptionComponent from './components/meter/CurrentConsumptionComponent';
import ConsumptionHistoryComponent from './components/meter/ConsumptionHistoryComponent';
import StatusComponent from "./components/meter/StatusComponent";
import MeterItemComponent from "./components/meter/MeterItemComponent";
import MeterListComponent from "./components/meter/MeterListComponent";
import AllMetersComponent from "./components/meter/AllMetersComponent";

import AllCustomersComponent from "./components/meter/AllCustomersComponent";
import AllStaffs from "./components/meter/AllStaffs";
import CustomerForm from "./components/meter/CustomerForm";
import StaffForm from "./components/meter/StaffForm";

import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon,
    mdbCard, mdbCardHeader, mdbCardBody, mdbCardFooter, mdbCardAvatar, mdbModal, mdbModalBody, mdbModalFooter, mdbModalTitle, mdbModalHeader, mdbInput } from "mdbvue";


//import {mdbBtn} from 'mdbvue'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
Vue.component('clients', require('./components/passport/Clients.vue').default);
Vue.component('personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);
Vue.component('quick-control', require('./components/meter/QuickControlComponent.vue').default);
//Vue.component('phase-state', require('./components/meter/PhaseStateComponent.vue').default);
Vue.component('phase-state', PhaseStateComponent);
Vue.component('controls', ControlsComponent);
Vue.component('current-consumption-component', CurrentConsumptionComponent);
Vue.component('consumption-history', ConsumptionHistoryComponent);
Vue.component('status-component', StatusComponent);
Vue.component('meter-item-component', MeterItemComponent);
Vue.component('meter-list-component', MeterListComponent);
Vue.component('all-meters-component', AllMetersComponent);

Vue.component('all-customers-component', AllCustomersComponent);
Vue.component('all-staffs-component', AllStaffs);
Vue.component('customer-form-component', CustomerForm);
Vue.component('staff-form-component', StaffForm);

Vue.component('mdb-container', mdbContainer);
Vue.component('mdb-row', mdbRow);
Vue.component('mdb-col', mdbCol);
Vue.component('mdb-btn', mdbBtn);
Vue.component('mdb-icon', mdbIcon);

Vue.component('mdb-card', mdbCard);
Vue.component('mdb-card-header', mdbCardHeader);
Vue.component('mdb-card-body', mdbCardBody);
Vue.component('mdb-card-footer', mdbCardFooter);
Vue.component('mdb-card-avatar', mdbCardAvatar);

Vue.component('mdb-modal', mdbModal);
Vue.component('mdb-modal-header', mdbModalHeader);
Vue.component('mdb-modal-body', mdbModalBody);
Vue.component('mdb-modal-footer', mdbModalFooter);
Vue.component('mdb-modal-title', mdbModalTitle);

Vue.component('mdb-input', mdbInput);


//Vue.component('mdb-btn', mdbBtn);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app', 
    store: store
});
