<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col sm="8">
                    <center> <h2> All Customers </h2> </center>
                </mdb-col>
                <mdb-col sm="4">
                    <a href="http://localhost/meter/public/reg_customer">
                        <mdb-btn size="sm" icon="plus"> Add new </mdb-btn>
                    </a>
                </mdb-col>
            </mdb-row>
            <hr />
            <mdb-row v-if="customers.length > 0">
                <customer-item v-for="customer in customers" :key="customer.id" :customer="customer"> </customer-item>
            </mdb-row>
            <center v-else> No customer registered yet </center>
        </mdb-container>
    </div>
</template>

<script>
import CustomerItem from "./CustomerItem";
export default {
    components: {
        CustomerItem,
    },

    computed: {
        customers() {
            return this.$store.state.allCustomers;
        }
    },

    mounted() {
        let complete = (status, data)=> {
            console.log(status, data);
        }
        this.$store.commit("getAllCustomers", {complete});
    }
}
</script>

<style>

</style>
