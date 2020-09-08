<template>
    <v-container class="d-flex flex-column align-center" >
        <div style="display: contents">
            <div>
                <v-img :src="image"  width="13rem" ></v-img>
            </div>
                <p class="font-weight-bold mt-5">Nothing here yet</p>

                <p class="font-weight-light text-center ma-0 mb-3">Add them to a department for easy assigning of courses</p>
                <v-btn class="ma-2" color="red" dark to="/cooperate/employee/view-departments">
                    <v-icon dark left>mdi-plus </v-icon>
                    Create Department

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

</style>