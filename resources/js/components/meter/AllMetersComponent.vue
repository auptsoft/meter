<template>
    <div>
        <div class="container">
					<div class="row d-flex justify-content-center">
						<div class="col-md-8 pb-40 header-text">
							<h1 >{{ title }}</h1>
							<p>
								{{ subtitle }}
							</p>
						</div>
						<div class="col-md-4">
						  <!-- <div class="search-container">
							  <form method="POST">
								  <input class="search-input" type="text" name="query" placeholder="Meter name, number, or address" />
								  <button class="search-btn" type="submit" >Search</button>
							  </form>
						  </div> -->
						</div>
					</div>
        </div>
        <hr />
        <meter-list-component :meters="meters"> </meter-list-component>
    </div>
</template>

<script>
import MeterListComponent from "./MeterListComponent";
export default {

    components: {
        MeterListComponent
    },

    data() {
        return {
            title: "All Meters",
            subtitle: "All registered meters"
        }
    },

    computed: {
        meters() {
            return this.$store.state.allMeters;
        }
    },

    mounted() {
        this.getAllMeters();
        setInterval(this.getAllMeters, 4000);
    },

    methods: {
        getAllMeters() {
            let complete = (status, data) => {
            console.log(status);
            console.log(data)
            }
            this.$store.commit("getAllMeters", {complete});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

