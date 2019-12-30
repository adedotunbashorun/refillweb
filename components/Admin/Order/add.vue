<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row"></div>
  </div>
</template>
<script>
export default {
  props: ["page"],
  data() {
    return {
      errors: [],
      classes: {
        name: "",
        description: "",
        image: ""
      },
      success: "",
      error: ""
    };
  },
  methods: {
    register() {
      let component = this;
      this.$store
        .dispatch("addClass", [
          component.classes,
          this.$store.state.auth.headers
        ])
        .then(resp => {
          this.error = "";
          this.success = "";
          if (resp.data.error) {
            toastr.error(resp.data.msg);
            this.error = resp.data.msg;
          } else {
            toastr.success(resp.data.msg);
            this.success = "";
            this.success = resp.data.msg;
            this.classes = {
              name: "",
              description: "",
              image: ""
            };
            this.errors = [];
          }
        })
        .catch(err => {
          this.error = "";
          this.error = err.message;
          console.log(err);
        });
    },
    checkForm: function(e) {
      if (this.classes.name && this.classes.description) {
        this.register();
        return true;
      }

      this.errors = [];
      if (!this.classes.name) {
        this.errors.push("Name required.");
        return false;
      }
      if (!this.classes.description) {
        this.errors.push("Description required.");
        return false;
      }
      e.preventDefault();
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.classes.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
