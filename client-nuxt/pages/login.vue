<template>
    <b-container>
        <div class="box">
            <h3 class="text-primary my-3">Login</h3>
            <b-form @submit.prevent="loginUser">
                <b-form-group
                    id="input-group-1"
                    label="Email:"
                    label-for="input-1"
                    description=""
                >
                    <b-form-input
                    id="input-1"
                    type="email"
                    required
                    v-model="formData.email"
                    placeholder="Your First Name"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Password:"
                    label-for="input-1"
                    description=""
                >
                    <b-form-input
                    id="input-1"
                    type="password"
                    v-model="formData.password"
                    required
                    placeholder="Your First Name"
                    ></b-form-input>
                </b-form-group>
                   
                <div class="text-right mt-3">
                    <b-button type="submit" variant="primary" class="px-5">Submit</b-button>
                </div>
                <p>Don't have an account? <nuxt-link to="/register">Register</nuxt-link></p>
                
            </b-form>
        </div>
    </b-container>
</template>

<script>
import LoginUser from '~/graphql/auth/loginUser';
import validators from "~/mixins/validators";
import dialog from "~/mixins/global/dialog";
import gql from 'graphql-tag'
export default {
    layout: 'auth',
    mixins: [validators, dialog],
    data() {
        return {
            formData: {email: null, password: null},
        }
    },
    methods: {
        validate() {
            let messages = [];
            if(!this.validateNotEmpty(this.formData)) {
                messages.push('All fields are required');
            }
            else if(!this.validatePhoneOrEmail(this.formData.login)) {
                messages.push('Provide a valid email or phone number');
            }
            if(messages.length) {
                this.showDanger('Validation Error', `There are errors in your input - ${messages.join(' - ')}.`);
                return false;
            }
            return true;
        },
       async loginUser() {

           try{
               const { data: { login: { token, email, password } } } = await this.$apollo.mutate({
                    mutation: LoginUser,
                    variables: {
                        email: this.formData.email,
                        password: this.formData.password,
                    }
                });
                await this.showAlert('Login Successful')
                // Result and set tokens.
                this.$auth.setToken('local', `Bearer ${token}`);
                await this.$apolloHelpers.onLogin(token);
                // await this.$auth.setUser(user);
                await this.$router.push('/home');
                console.log(this.$auth)
           }catch(err) {
                console.log(err)
                await this.showDanger(err.message.split(": ")[1])
                
           }
             
        }
    }
}
</script>

<style scoped>
    .box {
        margin-top: 100px;
    }
</style>