<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12 btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default">Yesterday</button>
        <button type="button" class="btn btn-default">MTD</button>
        <button type="button" class="btn btn-default">YTD</button>
      </div>
    </div>
    <div class="row totalTable">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">当月维度得分</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive">
            <table class="table table-hover text-center">
              <tbody>
                <tr>
                    <th rowspan="2">Hotels</th>
                    <th>Total</th>
                    <th colspan="2">Rooms</th>
                    <th colspan="2">Events</th>
                    <th colspan="2">Rooms</th>
                    <th colspan="2">Events</th>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <th>1</th>
                    <th>2</th>
                    <th>1</th>
                    <th>2</th>
                    <th>1</th>
                    <th>2</th>
                    <th>1</th>
                    <th>2</th>
                </tr>
                <tr>
                    <td rowspan="3">Shangri-la Hotel</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td rowspan="3">Shangri-la Hotel</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
                <tr>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                    <td>299</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
  </section>
</template>
<style>
  .table tr *{
    vertical-align: middle!important;
  }
  .totalTable{
    margin-top: 25px;
  }
</style>