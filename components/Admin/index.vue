<template>
    <div class="container">
      <h1>Gmail API demo</h1>

      <button id="authorize-button" class="btn btn-primary hidden">Authorize</button>

      <table class="table table-striped table-inbox hidden">
        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
</template>
