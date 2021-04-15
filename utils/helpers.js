var Chart = require('chart.js');

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    format_date_for_form: (date) => {
      return date.toISOString().split('T')[0];
    }
   };
  
