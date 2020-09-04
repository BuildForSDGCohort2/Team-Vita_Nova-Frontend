<template>
    <v-container class="d-flex">

        <div class="row justify-space-between  ">
            <v-card rounded="lg" elevation="6" width="320" height="150"
                    class="mt-1"
                    :style="cssProps3">

                <v-card-title class="white--text">Introduction to Programming</v-card-title>
                <v-card-subtitle class="white--text">10 Modules Included</v-card-subtitle>
            </v-card>
            <v-card rounded="lg" elevation="6" width="320" height="150"
                    class="mt-1"
                    :style="cssProps2">

                <v-card-title class="white--text">Introduction to Robotics</v-card-title>
                <v-card-subtitle class="white--text">21 Modules Included</v-card-subtitle>
            </v-card>
            <v-card rounded="lg" elevation="6" width="320" height="150"
                    class="mt-1"
                    :style="cssProps" style="background-size: cover">

                <v-card-title class="white--text">Introduction to Business<b>Management</b> </v-card-title>
                <v-card-subtitle class="white--text">5 Modules Included</v-card-subtitle>
            </v-card>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "EnrolledCourses"
  ,
    data(){
        return{
            courseImageLink:"/./src/assets/analysis.jpg",
            cssProps:{
                backgroundImage: `url(${require('@/assets/analysis.jpeg')})`
            },
            cssProps2:{
                backgroundImage: `url(${require('@/assets/library.jpeg')})`
            },
            cssProps3:{
                backgroundImage: `url(${require('@/assets/laptop.jpeg')})`
            }
        }
    }
    }
</script>

<style scoped>

</style>