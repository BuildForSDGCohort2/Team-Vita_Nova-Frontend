<template>
    <v-container>
    <div id="nav" class="nav">
        <nav>
            <router-link :to="{ name: 'Dashboard'}" class="black--text text-decoration-none">Dashboard</router-link> /
            <router-link :to="{ name: 'employee.departments'}" class="black--text text-decoration-none">Department</router-link> /
            <router-link :to="{ name: 'event-create'}" class="black--text text-decoration-none">Design</router-link>
        </nav>
    </div>


    <DepartmentTable/>
        <v-row>
            <v-col cols="12">
                <div>
                    <p>Enrolled Courses</p>
                </div>
            </v-col>

        </v-row>

        <div>
            <EnrolledCourses/>
        </div>
    </v-container>
</template>

<script>
    import DepartmentTable from "./DepartmentTable";
    import EnrolledCourses from "./EnrolledCourses";

    export default {
        name: "Department",
        components:{
            EnrolledCourses,
            DepartmentTable
        }
    }
</script>

<style scoped>
.nav-text{
    color: black;
    text-decoration: none;
}
</style>