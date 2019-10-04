<template>
  
        <mdb-col sm="6" md="4" xs="12">
            <mdb-card>
                <mdb-card-header>
                    <center> <mdb-icon size="3x" icon="user" > </mdb-icon> </center>
                </mdb-card-header>
                <mdb-card-body>
                    <center>
                        {{ customer.name }}
                        <hr />
                        <b>Phone Number: </b> {{ customer.meter.owner_phone_number }}
                        <hr />
                        <b>Email: </b> {{ customer.email }}
                        <hr />
                        <a :href="meterUrl"> View Meter</a>
                     </center>
                </mdb-card-body>
                <mdb-card-footer>
                    <center>
                        <!-- <mdb-btn size="sm" > Edit </mdb-btn> -->
                        <!-- <mdb-modal >
                            <mdb-modal-header>
                                
                            </mdb-modal-header>
                        </mdb-modal> -->
                        <mdb-btn size="sm"  color="danger" @click="confirm=true"> Delete </mdb-btn>
                        <mdb-modal :show="confirm" @close="confirm = false" size="sm" class="text-center" danger>
                          <mdb-modal-header center :close="false">
                            <p class="heading">Are you sure?</p>
                          </mdb-modal-header>
                          <mdb-modal-body>
                              <mdb-icon icon="times" size="4x" class="animated rotateIn"/>
                          </mdb-modal-body>
                          <mdb-modal-footer center>
                            <mdb-btn outline="danger" @click="executeDelete">
                                Yes
                            </mdb-btn>
                            <mdb-btn color="danger" @click="confirm=false">No</mdb-btn>
                          </mdb-modal-footer>
                        </mdb-modal>
                    </center>
                </mdb-card-footer>
            </mdb-card>
        </mdb-col>

</template>

<script>
import { mapActions } from "vuex";

export default {
    props: [
        'customer',
    ],

    data() {
        return {
            confirm: false,
        }
    },

    computed: {
        meterUrl() {
            return "http://localhost/meter/public/meter/"+this.customer.meter.id
        }
    },

    methods: {
        executeDelete() {
            let complete = (status, data)=> {
                console.log(status, data);
            };
            this.$store.dispatch('deleteCustomer', {customer: this.customer, complete});
        },
        
        //testing 
        ...mapActions(
            ["greet"]
        )
    },

    mounted() {
        this.greet();
    }
}
</script>

<style lang="scss" scoped>
hr {
    margin-top: 2px;
    margin-bottom: 2px;
}
</style>

