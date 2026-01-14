<template>
   <ModalLayout customClass="max-w-[600px]">
      <main>
         <div class="flex flex-col gap-y-6">
            <TextInput
               id="clientName"
               label="Client Name"
               placeholder="Enter client name"
               v-model="clientName"
               :error="clientNameError"
               :blur="clientNameBlur"
            />
            <TextInput
               id="amount"
               label="Amount"
               type="number"
               placeholder="Enter amount"
               v-model.number="amount"
               :error="amountError"
               :blur="amountBlur"
            />
            <TextInput
               id="description"
               label="Description"
               v-model="description"
               :error="descriptionError"
               :blur="descriptionBlur"
            />
         </div>

         <TheButton
            text="Create Invoice"
            class="btn blue w-full mt-10"
            :is-loading="isLoading"
            @action="handleCreateInvoice"
         />
      </main>
   </ModalLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';
import ModalLayout from './shared/ModalLayout.vue';
import TheButton from './shared/TheButton.vue';
import TextInput from './shared/TextInput.vue';
import api from '@/api';

const isLoading = ref(false);
const emit = defineEmits(['success']);

const validationSchema = yup.object({
   clientName: yup.string().required('Client name is required'),
   amount: yup
      .number()
      .required('Amount is required')
      .positive('Amount must be positive'),
   description: yup.string(),
});

const { validate } = useForm({ validationSchema });

const {
   value: clientName,
   errorMessage: clientNameError,
   handleBlur: clientNameBlur,
} = useField('clientName');
const {
   value: amount,
   errorMessage: amountError,
   handleBlur: amountBlur,
} = useField('amount');
const {
   value: description,
   errorMessage: descriptionError,
   handleBlur: descriptionBlur,
} = useField('description');

const handleCreateInvoice = async () => {
   const { valid } = await validate();
   if (!valid) return;

   isLoading.value = true;
   try {
      let newInvoice = {
         date: new Date().toDateString(),
         items: [
            {
               invoiceNumber: `${String(Math.floor(100000 + Math.random() * 900000))} - ${Math.floor(Math.random() * 9999)}`,
               dueDate: new Date(
                  Date.now() + 7 * 24 * 60 * 60 * 1000
               ).toLocaleDateString(),
               amount: amount.value,
               status: 'Draft',
            },
         ],
      };
      await api.createInvoice(newInvoice);

      // Add activity log to invoice_activity
      let activityPayload = {
         title: 'You',
         action: 'created',
         invoiceId: newInvoice.items[0].invoiceNumber + `/${clientName.value}`,
         timestamp: `Today, ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}`,
      };
      await api.addInvoiceActivity(activityPayload);
      toast.success('Invoice created successfully!');
      emit('success');
      clientName.value = '';
      amount.value = 0;
      description.value = '';
   } catch (err) {
      toast.error(err.message || 'Failed to create invoice. Please try again.');
   } finally {
      isLoading.value = false;
   }
};
</script>
