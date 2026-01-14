<template>
   <main class="bg-grey-12 min-h-screen flex-center px-4">
      <div>
         <h1 class="text-[7.5rem] text-center font-bold text-dark-grey">404</h1>
         <p class="text-xl text-center font-bold text-blue-10">
            OPPS! PAGE NOT FOUND
         </p>
         <p class="py-4 max-w-[500px] mx-auto text-center">
            Looks like you've stumbled upon a broken link. We apologize for the
            inconvenience. Please double-check the URL or proceed the invoice
            page
         </p>
         <button @click="$router.push('/')" class="btn blue w-60 mx-auto">
            Okay
         </button>
      </div>
   </main>
</template>
