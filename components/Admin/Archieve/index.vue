<template>
    <div class="main-content-container container-fluid px-4">

        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Archieve Management</h3>
            <span class="text-uppercase page-subtitle"></span>
            </div>
        </div>
        <!-- End Page Header -->


        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Archieve Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table id="response-table" class="table mb-0" style="margin:20px;">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">From</th>
                        <th scope="col" class="border-0">Response</th>
                        <th scope="col" class="border-0"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(response, index) in archieves" :key="index">
                            <td>{{ index + 1}}</td>
                            <td>{{response.from}}</td>
                            <td><a href="#" :data-data="response.data" data-toggle="modal" data-target="#getDetails" data-remote="false" class="bs-tooltip" data-original-title="Details">{{response.data.substr(0, 100)}}</a></td>
                            <td><Adedotun :value="response.createdAt" fn="date" /></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <!-- End Default Light Table -->
        <div id="getDetails" class="modal fade" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"><i class="material-icons">detail</i> Details</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>

                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Adedotun from '../../Extra/adedotun'
export default {
    props:['archieves'],
    mounted(){
        setTimeout(() => {
            $('#response-table').DataTable({})
        },5000)
            var getDetails = $("#getDetails")

            // getDetails.on('hidden.bs.modal', function (e) {
            //     $(e.target).removeData("bs.modal").find(".loadAjax").empty();
            // });

            getDetails.on("show.bs.modal", function (e) {
                var link = $(e.relatedTarget);
                getDetails.find('p').html(link.data("data"))
            });
    },
    components:{
        Adedotun
    }
}
</script>
