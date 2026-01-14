<template>
   <div class="bg-grey-12 min-h-screen flex-center px-4">
      <main class="sm:w-[500px] bg-white p-6 md:p-10 rounded-3xl shadow w-full">
         <img src="/assets/icons/logo.svg" alt="" class="mx-auto" />

         <h1
            class="font-medium text-lg text-center sm:text-[28px] text-dark-grey tracking-widest my-5"
         >
            INVOICE
         </h1>

         <TextInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            v-model="email"
            :error="emailError"
            :blur="emailBlur"
         />
         <TextInput
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            v-model="password"
            :error="passwordError"
            :blur="passwordBlur"
            class="mt-6 mb-10"
         />
         <div class="flex-col flex gap-y-3 mt-10">
            <TheButton
               text="Login"
               class="btn blue w-full"
               :is-loading="isSignInLoading"
               @action="handleLogin"
            />
            <TheButton
               text="Sign Up"
               class="btn blue-outline w-full"
               :is-loading="isSignUpLoading"
               @action="handleSignup"
            />
         </div>
      </main>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/api';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import TheButton from '@/components/shared/TheButton.vue';
import TextInput from '@/components/shared/TextInput.vue';

const router = useRouter();
const isSignInLoading = ref(false);
const isSignUpLoading = ref(false);

const validationSchema = yup.object({
   email: yup
      .string()
      .required('Email is required')
      .email('Must be a valid email'),
   password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
});

const { validate } = useForm({ validationSchema });

const {
   value: email,
   errorMessage: emailError,
   handleBlur: emailBlur,
} = useField('email');

const {
   value: password,
   errorMessage: passwordError,
   handleBlur: passwordBlur,
} = useField('password');

const handleLogin = async () => {
   const { valid } = await validate();
   if (!valid) return;

   isSignInLoading.value = true;
   try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push('/');
   } catch (err) {
      toast.error(err.message);
   } finally {
      isSignInLoading.value = false;
   }
};

const handleSignup = async () => {
   const { valid } = await validate();
   if (!valid) return;

   isSignUpLoading.value = true;
   try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      router.push('/');
   } catch (err) {
      console.log(err, err.message);
      toast.error(err.message);
   } finally {
      isSignUpLoading.value = false;
   }
};
</script>
