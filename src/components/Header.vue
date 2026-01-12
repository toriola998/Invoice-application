<template>
   <div class="w-full">
      <header
         class="flex-items justify-between border-b border-grey-16 py-5 bg-grey-12 px-4 w-full"
      >
         <p
            class="font-medium text-xl sm:text-[28px] text-dark-grey tracking-widest"
         >
            INVOICE
         </p>

         <div class="flex-items gap-x-2 sm:gap-x-6">
            <div
               class="flex-center bg-white rounded-full w-10 h-10 sm:w-16 sm:h-16"
            >
               <img src="/assets/icons/notification-bing.svg" alt="" />
            </div>

            <div class="bg-white rounded-full flex-items p-1 sm:p-3 gap-x-2">
               <p
                  class="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-10 text-white flex-center text-xs sm:text-sm font-bold"
               >
                  KO
               </p>
               <img src="/assets/icons/dropdown.svg" alt="" />
            </div>

            <slot />
         </div>
      </header>
   </div>
</template>
