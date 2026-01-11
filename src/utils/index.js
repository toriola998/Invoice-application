export function formatToDollar(amount) {
   return amount?.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
   });
}

export function getStatusColor(status) {
   const statusColors = {
      Paid: 'bg-green-10 text-green-12 border border-green-11',
      Overdue: 'bg-red-10 text-red-12 border border-red-11',
      Draft: 'bg-light-grey-10 text-dark-grey border border-light-grey-12',
      'Pending Payment': 'bg-yellow-10 text-yellow-12 border border-yellow-11',
   };

   return statusColors[status] || '';
}
