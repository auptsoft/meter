<template>
    <mdb-container>
        <mdb-row>
            <mdb-col v-for="meter in meters" :key="meter.id" md="4">
                <meter-item-component :meter="meter"> </meter-item-component>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
import MeterItemComponent from "./MeterItemComponent";
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
    components: {
        MeterItemComponent,

        mdbContainer,
        mdbRow,
        mdbCol
    },

    props: [
        'meters'
    ]
}
</script>

<style lang="scss" scoped>

</style>
