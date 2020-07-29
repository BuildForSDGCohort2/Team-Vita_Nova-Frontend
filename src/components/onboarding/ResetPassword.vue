<template>
    <v-layout column wrap>
        <v-row>
            <v-col col="6" class="col-sm-6 col-md-6 col-lg-6 ">
                <div class="login-card ">

                    <div class="mx-auto">

                        <ValidationObserver v-slot="{ handleSubmit }">
                            <v-form class="login-form" @submit.prevent="handleSubmit(handleLogin)">
                                <h3 class="login-title">Reset your</h3>
                                <h3 class="login-title">password</h3>
                                <div v-if="errorMsg">
                                    <span class="err text-xl-center">{{errorMsg}}</span>
                                </div>
                                <Loader :loading="loading" :message="message" />

                                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                    <span class="err">{{ errors[0] }}</span>
                                    <v-text-field
                                            label="Email Address"
                                            name="emailAddress"
                                            v-model="user.email"
                                            outlined
                                            color="red"
                                            class="register-input"
                                    ></v-text-field>
                                </ValidationProvider>
                                <SubmitButton button-name="Send email with reset password link" class="login-btn" />
                                <v-btn text class="red--text pt-9 ml-16" link to="#">Back to Login</v-btn>
                            </v-form>
                        </ValidationObserver>
                    </div>
                </div>
            </v-col>
            <v-col cols="6" class="right-col col-sm-6 col-md-6 col-lg-6">
                <v-responsive>
                    <img  class="align-center" src="../../assets/desk-illo.png" width="600px" alt="dispaly">
                </v-responsive>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
    import SubmitButton from "../ui/buttons/SubmitButton";
    import User from "../../models/user";
    import Loader from "../ui/loader/Loader";

    export default {
        name: "ResetPassword",
        components: { Loader, SubmitButton },
        data() {
            return {
                user: new User("", ""),
                loading: false,
                message: ".",
                errorMsg: "",
                value: true,
                link:'/login'
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.onboarding.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                console.log("hi");
                this.$router.push("/cooperate/dashboard");
            }
        },
        methods: {
            handleLogin() {
                this.loading = true;
                if (this.user.email && this.user.password) {
                    this.$store.dispatch("onboarding/userLogin", this.user).then(
                        res => {
                            console.log(res.access);

                            this.$router.push("/cooperate/dashboard");
                        },
                        error => {
                            this.loading = false;
                            this.errorMsg = error;
                            // this.errorMsg= (error.response && error.response.data)
                            // ||error.message || error.toString();
                        }
                    );
                }
            }
        }
    };
</script>

<style scoped>

    .login-card {
        margin-top: 80px;
        width: 500px;

        /*border: 1px solid #F8F8F8;*/
        /*box-sizing: border-box;*/
        /*box-shadow: 0px 1px 2px rgba(43, 28, 28, 0.15);*/
        border-radius: 10px;
    }
    .login-title {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height, or 167% */

        display: flex;
        align-items: center;
        text-align: center;
        margin: auto;
        /*margin-bottom: 15px;*/

        color: #2b1c1c;
    }
    .login-form {
        margin-left: 35% !important;
    }
    .login-btn {
        margin-top: 20px !important;
    }
    .err {
        display: block;
        color: red;
        font-size: 13px;
        margin-bottom: 5px;
    }
    .right-col{
        background-color: #FFF0CE !important;
        height: 565px;

    }
    .align-center{
        margin-left: 10%;
        margin-top: 13%;
    }

    @media only screen and (max-width: 600px) {
        .login-form {
            margin-left: 10%;
            margin-right: 10%;
        }
        .login-card {
            width: 390px ;
            border-radius: 0 ;
            box-shadow: none ;
        }
        .login-title {
            font-size: 20px;
        }
        .right-col{
            display: none;
        }


    }

</style>