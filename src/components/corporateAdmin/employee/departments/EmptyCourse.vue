<template>
    <v-container class="d-flex flex-column align-center" >
        <div style="display: contents">
            <div>
                <v-img :src="image"  width="13rem" ></v-img>
            </div>
            <p class="font-weight-black mt-5 " >Nobody here yet</p>

            <p class="font-weight-light text-center ma-0 mb-3">Add them to a department for easy assigning of courses</p>

            <div class="flex-grow-0">
                <v-btn small class="ma-2 white red--text"  dark>
                    Assign Course(s)
                </v-btn>
            <v-btn small class="ma-2 " color="red"  dark>
                <v-icon dark left>mdi-plus </v-icon>
                Create Department
            </v-btn>
            </div>

        </div>
    </v-container>
</template>

<script>
    export default {
        name: "EmptyCourse",
        data(){
            return{
                image: require("../../../../assets/Ellipse.svg")
            }
        }
    }
</script>

<style scoped>

</style>