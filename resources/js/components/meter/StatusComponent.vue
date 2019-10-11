<template>
    <div>
        <div> State: {{ meter.state }} </div>
        <mdb-alert :color="alertColor"> {{message}} </mdb-alert>
        <div> Last Update: {{ meter.lastUpdate }} </div>
    </div>
</template>

<script>
import { mdbAlert } from "mdbvue";
export default {
    components: {
        mdbAlert
    },

    computed: {
        meter() {
            return this.$store.state.meter;
        },

        alertColor() {
            let reason = this.$store.state.meter.shutdown_reason;
            if(reason==0 ) {
                return "success";
            } /*else if (reason==2 || reason == 3 || reason == 4) {
                return "danger";
            } */ else {
                return "danger";
            }                
        },

        message() {
            let reason = this.$store.state.meter.shutdown_reason;
            if(reason == 0) {
                return this.meter.state;
            } else if (reason == 1) {
               return "Meter shutdown... METER TAMPERED. Contact base station to turn on your meter";
            }/*else if (reason == 3) {
                return "Current phase down. Kindly use App to change phase";
            }*/ else if (reason == 4) {
                return "Meter shutdown due to OVERLOAD. Kindly reduce load to turn on meter";
            } else if (reason == 5) {
                return "Meter Shutdown by ADMIN";
            } 
             else {
                return "";        
            }
        }
    }
}
</script>

<style>

</style>
