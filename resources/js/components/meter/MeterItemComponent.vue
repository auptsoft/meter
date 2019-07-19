<template>
    <div>
        <div class="">
			<a :href="'meter/'+meter.id">
			<div class="meter-item card">
				<h4  class="meter-item-title">{{ meter.name}}</h4>
				<p>
					<span class="meter-number">{{ meter.meter_number}}	</span>								
					<br />
					<span class="meter-address">{{ meter.address}} </span>
					<br />
					<span class="meter-status">Capacity: {{ meter.capacity}} </span>
				</p>
				<a :href="'staff_recharge/'+meter.id">
  					<button class="btn btn-success btn-sm" >Recharge </button>
				</a>
			</div>
			</a>
		</div>
    </div>
</template>

<script>
export default {
    props: [
        "meter"
    ]
}
</script>

<style lang="scss" scoped>

</style>

