<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-if="pagination.current_page > 1">
        <a class="page-link" href="javascript:void(0);" aria-label="Previous"
        v-on:click.prevent="changePage(pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}" :key="page">
        <a class="page-link" href="javascript:void(0)" v-on:click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" v-if="pagination.current_page < pagination.last_page ">
        <a class="page-link" href="javascript:void(0);" aria-label="next"
          v-on:click.prevent="changePage(pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script type="text/javascript">

// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
	export default {
		props: {
			pagination: {
//				type: Array,
				required: true
			},
			offset: {
				type:Number,
				default: 4
			}
		},
		computed: {
			pagesNumber: function() {
				let from = this.pagination.current_page - this.offset;
				if(from < 1) {
					from = 1;
				}
				let to = from + (this.offset * 2);
				if(to > this.pagination.last_page) {
					to = this.pagination.last_page;
				}
				let collection = [];
				for (let page = from; page < to; page++) {
					collection.push(page);
				}
				console.log(collection);
				return collection;
			}
		},
		methods: {
			changePage: function(page) {
				this.pagination.current_page = page;
				this.$emit('paginate');
			}
		}
	}
</script>
