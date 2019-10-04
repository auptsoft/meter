<template>
    <div>
        <div class="">
			
			<div class="meter-item card">
                <a :href="'meter/'+meter.id">
				    <h4  class="meter-item-title">{{ meter.name}}</h4>
                </a>
				<p>
					<span class="meter-number">{{ meter.meter_number}}	</span>								
					<br />
					<span class="meter-address">{{ meter.address}} </span>
					<br />
					<span class="meter-status">Capacity (W): {{ meter.capacity}} </span>
                    <br />
                    <span class="meter-status">Current Rating (A): {{ meter.rated_current}} </span>
				</p>
				
                <div> {{ meter.state }} </div>
                <div>Last updated: {{ meter.lastUpdate }} </div>
                <center> 
                    <a :href="'staff_recharge/'+meter.id">
  				    	<button class="btn btn-success btn-sm" >Recharge </button>
				    </a>
                    <mdb-btn @click="showModal=true" size="sm" icon="pen"> Edit </mdb-btn>
                    <mdb-modal :show="showModal" @close="showModal = false"  class="text-left">
                        <mdb-modal-header class="modal-header ">
                          <h4 class="title"><mdb-icon icon="map-signs" /> Edit Meter </h4>
                        </mdb-modal-header>
                        <mdb-modal-body class="grey-text">
                           <meter-form @editComplete="showModal=false" :meter="meter"> </meter-form>
                        </mdb-modal-body>
                    </mdb-modal>
                </center>
			</div>
		</div>
    </div>
</template>

<script>
import MeterForm from "./MeterForm";
export default {
    components: {
        MeterForm,
    },

    props: [
        "meter"
    ],

    data() {
        return {
            meterStatus: "",

            showModal: false,
        }
    },

    mounted() {
        this.getStatus();
    },

    methods: {
        getStatus(){
            axios.request({
                method: "post",
                url: "http://localhost/meter/public/api/http/get",
                data: {
                    url: "http://localhost/meter/public/api/test"
                }
            }).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-header {

}
</style>

