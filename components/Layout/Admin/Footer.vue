<template>
    <footer>
			<div class="container-fluid">
				<p class="copyright">&copy;  <span id="year">2019</span> <a href="!#" rel="nofollow">ServeMe</a>. All Rights Reserved.</p>
			</div>
		</footer>
</template>
<script>
export default {
  mounted(){
    document.getElementById('year').innerHTML = new Date().getFullYear();
  }
}
</script>
