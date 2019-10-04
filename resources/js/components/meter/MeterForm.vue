<template>
<mdb-container>
    <mdb-input label="Meter name" type="text" v-model="newMeter.name" />
    <mdb-input label="Meter Number" type="number" v-model="newMeter.meter_number" />
    <mdb-input label="Designation" type="number" v-model="newMeter.designation" />
    <mdb-input label="Capacity" type="number" v-model="newMeter.capacity" />
    <mdb-input label="Current Rating" type="number" v-model="newMeter.rated_current" />
    <center> 
        <mdb-btn size="sm" @click="save"> Save </mdb-btn>
    </center>
</mdb-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: [
        "meter"
    ],

    data() {
        return {
            newMeter: this.meter
        }
    },

    methods: {
        save() {
            let complete = (response)=> {
                console.log("returned");
                this.$emit('editComplete')
            }
            this.saveAction({meter:this.newMeter, complete:complete});
        },
        ...mapActions([
            'saveAction'
        ])
    }
}
</script>

<style>

</style>
