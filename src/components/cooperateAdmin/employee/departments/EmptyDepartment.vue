<template>
    <v-container class="d-flex flex-column align-center" >
        <div style="display: contents">
            <div>
                <v-img :src="image"  width="13rem" ></v-img>
            </div>
                <p class="font-weight-bold">Nothing here yet</p>

                <p class="font-data font-weight-light text-center ma-0 mb-3">Add them to a department for easy assigning of courses</p>
                <v-btn class="ma-2" color="red" dark>
                    <v-icon dark left>mdi-plus </v-icon>
                    create Department

                </v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "EmptyDepartment",
        data(){
            return{
                image: require("../../../../assets/Ellipse.svg")
            }
        }
    }
</script>

<style scoped>

    .center-item{
        /*display: flex;*/
        justify-content: center !important;

    }
    .font-data{
    }

</style>