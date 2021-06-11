<template>
    <b-container>
        <div class="box">
            <h3 class="text-primary my-3">Register</h3>
            <b-form @submit.prevent="createUser">
                <b-form-row>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id=""
                            label="First Name:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id=""
                            type="text"
                            v-model="formData.firstName"
                            placeholder="Your First Name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id=""
                            label="Last Name:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id=""
                            type="text"
                            v-model="formData.lastName"
                            placeholder="Your Last Name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
               
                <b-form-row>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id="input-group-1"
                            label="Email:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id="input-1"
                            type="email"
                            v-model="formData.email"
                            placeholder=""
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id="input-group-1"
                            label="Phone:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            v-model="formData.phone"
                            placeholder=""
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                 <b-form-row>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id="input-group-1"
                            label="Password:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id="input-1"
                            type="password"
                            placeholder=""
                            v-model="formData.password"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col class="px-2" cols="12" md="6">
                        <b-form-group
                            id="input-group-1"
                            label="Confirm Password:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id="input-1"
                            type="password"
                            placeholder=""
                            v-model="formData.confirmPassword"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col md="7" class="px-2">
                        <b-form-group
                            id="input-group-1"
                            label="Username:"
                            label-for="input-1"
                            description=""
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            v-model="formData.username"
                            required
                            placeholder="Your Username"
                            ></b-form-input>
                        </b-form-group>
                    </b-col> 
                    <b-col class="px-2" cols="5">
                        <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            :options="genders"
                            v-model="formData.gender"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <div class="text-right mt-3">
                    <b-button type="submit" variant="primary" class="px-5">Submit</b-button>
                </div>
                <p>Already have an Account? <nuxt-link to="/login">Login</nuxt-link></p>
                
            </b-form>
        </div>
    </b-container>
</template>

<script>
import Register from '~/graphql/auth/register';
import LoginUser from '~/graphql/auth/loginUser';
import validators from "~/mixins/validators";
import dialog from "~/mixins/global/dialog";
import gql from 'graphql-tag'
export default {
    layout: 'auth',
    mixins: [validators, dialog],
    data() {
        return {
            formData: {
                gender: null,
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                password: null,
                confirmPassword: null,
                username: null
            },
            genders: [
                { text: 'Select One', value: null }, 'Male', 'Female', 'Others'
            ]
        }
    },
    methods: {
        validate() {
             let messages = [];
            if (!this.validateNotEmpty(
            {first_name: this.formData.firstName, last_name: this.formData.lastName})) {
            messages.push('Full name is required');
            }
            if (!this.validateEmail(this.formData.email)) {
            messages.push('Valid email is required');
            }
            if (!this.validatePhone(this.formData.phone)) {
            messages.push('Valid phone number is required');
            }
            if (!this.formData.password) {
            messages.push('Password is required');
            }
            if (this.formData.password !== this.formData.confirmPassword) {
            messages.push('Passwords don\'t match');
            }
            if (messages.length) {
            this.showDanger('Validation Error',
                `There are errors in your input - ${messages.join(' - ')}.`);
            return false;
            }
            return true;
        },
        onSubmit() {
            console.log(this.formData)
            if (this.formData.firstName) {
                console.log('No first name')
         this.$bvModal.msgBoxOk('Data was submitted successfully', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
        }
        }, 
        async createUser() {
            console.log('create')
             console.log(this.formData)
            try {
                // if(!this.validate()) { console.log('not valid')}
                // return;
                console.log('try')
                 const { data: { register } } = await this.$apollo.mutate({
            mutation: Register,
            variables: { input: this.formData },
          });
                console.log(this.formData)
                 // Success message.
                 await this.showAlert('Account Created')
                //  alert('account created')

                  // Do an automatic login for the user immediately.
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
           await this.$router.push('/home');
            } catch(err) {
                console.log(err)
                await this.showDanger(err.message.split(": ")[1])
            }
             
        }
    }
}
</script>

<style scoped>
    .box {
        margin-top: 60px;
    }
</style>