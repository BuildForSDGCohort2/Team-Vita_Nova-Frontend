export default {
    retrievedEmployeesSuccess: (state, data) => {
        state.isPresent = true;
        state.data = data;
    },
    retrievedEmployeesFail: (state) => {
        state.isPresent = false;
        state.data = { msg: "No Employees Found" }
    },
    addEmployeeSuccess: (state, data) => {


        state.isPresent = true;
        let emails = data.emails.map(employeeEmail => ({ email: employeeEmail.text }))

        state.data = [...state.data, ...emails]
    }
}