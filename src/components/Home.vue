<template>
   <div class="home">
     <h1>Get a Free Chuck Norris Quote!</h1>
     <button v-on:click="getQuote()">Get a Quote</button>
     <div class="quote-area">
       <h2><blockquote>{{ quote }}</blockquote></h2>
     </div>
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       quote: ''
     }
   },
   methods: {
     getQuote() {
        this.quote = 'true'
     }
   }
 }
 </script>

 <style lang="css">

 .home {
  outline: 1px solid red;
 }
 </style>
