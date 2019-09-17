<template>
    <div class="parent"> 
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Controls</mdb-card-title>
            <div v-if="isLoading==false">
             <mdb-btn v-if="meter.shutdown_reason == 0" @click="shutdown()" color="danger" size="sm">Shutdown</mdb-btn>
             <mdb-btn v-else @click="start()" color="success" size="sm">Turn on</mdb-btn>
            </div>
            <mdb-alert v-if="isLoading==true" color="primary"> loading... </mdb-alert>
            <mdb-btn v-if="meter.shutdown_reason == 1" color="danger"> Meter Tampared </mdb-btn>
          </mdb-card-body>
        </mdb-card>
    </div>
</template>

<script>
import {mdbAlert, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn  } from "mdbvue"


export default {
    computed: {
      isShutdown() {
        return window.meterState.is_shutdown;
      }, 
      fraudDetected() {
        return window.meterState.fraud_detected;
      },

      meter() {
        return this.$store.state.meter;
      }
    },

    data() {
      return {
        isLoading: false
      }
    },
     methods: {
      shutdown() {
        //alert("shutdown");
        this.isLoading = true;
        axios.get("/meter/public/api/meter/queueOnOff/"+window.meter_id+"/1")
        .then((response)=> {
          this.isLoading = false;
          let data = response.data;
          console.log(data);
          if (data.message && data.message=="success") {
            window.meterState.is_shutdown = true;
          }
          
        });
      },
      start() {
        this.isLoading = true;
        axios.get("/meter/public/api/meter/queueOnOff/"+window.meter_id+"/0")
        .then((response)=> {
          let data = response.data;
          console.log(data);
          this.isLoading = false;
        });
      }
    },
    components: {
        mdbAlert,

        mdbCard,
        mdbCardImage,
        mdbCardHeader,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbBtn
    }
}
</script>

<style lang="scss" scoped>
  .parent {
    margin-bottom: 2em;
  }
</style>

