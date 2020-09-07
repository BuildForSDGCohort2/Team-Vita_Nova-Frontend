<template>
    <div>
        <v-card flat>

<!--            <-->
            <div class="d-flex justify-space-between mt-3 col-12">
                <h1>Design</h1>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search by Department name"
                        solo-inverted
                        flat
                        style="max-width: 400px"
                        class="col-sm-12"
                ></v-text-field>
            </div>
            <v-row class="d-flex justify-space-between">
                <v-col cols="1" sm="2">

                    <v-select :items="items" label="Filter" flat
                              :prepend-icon="prependIcon ? 'mdi-filter-variant' : ''"></v-select>
                </v-col>
<!--                <v-col cols="12" sm="4"></v-col>-->
<!--                <v-col class="d-flex" cols="12" sm="2">-->
<!--                    <AddEmployeesModal />-->
<!--                </v-col>-->

                <div  cols="12" sm="2" >
                    <v-btn class="ma-2 transparent-btn" elevation="singleSelect" color="grey" light>
                        <v-icon left>mdi-plus</v-icon>Assign Course(s)
                    </v-btn>

                    <v-btn class="ma-2 transparent-btn" elevation="singleSelect" color="grey" light>
                        <v-icon left>mdi-plus</v-icon>Add New Employee
                    </v-btn>


                    <v-btn class="ma-2 transparent-btn" elevation="singleSelect" color="grey" light>
                        <v-icon left>mdi-delete</v-icon>Delete Selected

                    </v-btn>
                </div>
            </v-row>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    show-select
                    item-key="emailAddress"
                    :single-select="singleSelect"
            ></v-data-table>
        </v-card>
    </div>
</template>

<script>
    import AddEmployeesModal from "../modals/AddEmployeesModal";
    export default {
        data() {
            return {
                prependIcon: true,
                search: "",
                splashShow: true,
                selected: [],
                singleSelect: false,
                items: ["CoursesTaken", "FirstName", "LastName"],
                desserts: [
                    {
                        emailAddress: "patience@semicolon.africa",
                        firstName: "Patience",
                        lastName: "Tommy",
                        coursesTaken: "information...",
                        Remove: "Remove"
                    },
                    {
                        emailAddress: "Sam@Semicolon.africa",
                        firstName: "Sam",
                        lastName: "Immanuel",
                        coursesTaken: "French",
                        Remove: "Remove"
                    },
                    {
                        emailAddress: "Nonso@gmail.com",
                        firstName: "Nonso",
                        lastName: "Senior",
                        coursesTaken: "English",
                        Remove: "Remove"
                    },
                    {
                        emailAddress: "Kelly@gmail.com",
                        firstName: "Awesome",
                        lastName: "Kelly",
                        coursesTaken: "English",
                        Remove: "Remove"
                    },
                    {
                        emailAddress: "SamBako@gmail.com",
                        firstName: "Sam",
                        lastName: "Bako",
                        coursesTaken: "Mathematics",
                        Remove: "Remove"
                    },
                    {
                        emailAddress: "ray@gmail.com",
                        firstName: "Abel",
                        lastName: "ray",
                        coursesTaken: "Introductiont to ...",
                        Remove: "Remove"
                    }
                ],
                headers: [
                    {
                        text: "Email Address",
                        align: "start",
                        sortable: false,
                        value: "emailAddress"
                    },
                    { text: "First Name", value: "firstName" },
                    { text: "Last Name", value: "lastName" },
                    { text: "Courses Taken", value: "coursesTaken" },
                    { text: " ", value: "Remove" }
                ]
            };
        },
        components: {
            AddEmployeesModal
        }
    };
</script>

<style scoped>
    .transparent-btn {
        background-color: transparent !important;
        padding: 0 0 !important;
    }
</style>