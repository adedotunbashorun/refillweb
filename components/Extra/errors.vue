<template>
  <div>
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <div class="alert alert-danger alert-dismissible" role="alert" v-for="error in errors" :key="error">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <i class="fa fa-times-circle"></i> {{ error }}
      </div>
    </div>
    <div class="alert alert-danger alert-dismissible" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <i class="fa fa-times-circle"></i> {{ error }}
    </div>
    <div class="alert alert-success alert-dismissible" role="alert" v-if="success">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <i class="fa fa-check-circle"></i> {{ success }}
    </div>
  </div>
</template>
<script>
export default {

}
</script>
