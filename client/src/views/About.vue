<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: {}
    }
  },
  created () {
    axios.get('/api/coucou')
      .then((response) => {
        this.data = response.data
      })
  }
}
</script>
