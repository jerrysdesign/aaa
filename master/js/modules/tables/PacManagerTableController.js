/**=========================================================
 * Module: PacManagerTableController.js
 * Controller for ngTables
 =========================================================*/

App.controller('PacManagerTableController', PacManagerTableController);

function PacManagerTableController($scope, $filter, ngTableParams) {
  'use strict';
  var vm = this;

  // SORTING
  // ----------------------------------- 

  var data = [
      {
      "title": "台北市立南門國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "啟用",
      "edit": "編輯"
    },
    {
      "title": "台北市立仁愛國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "啟用",
      "edit": "編輯"
    },
    {
      "title": "台北市立金華國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "啟用",
      "edit": "編輯"
    },
    {
      "title": "高雄市私立樂育國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "停用",
      "edit": "編輯"
    },
    {
      "title": "高雄市立鳳西國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "停用",
      "edit": "編輯"
    },
    {
      "title": "台北市立南門國民中學",
      "type": "一般",
      "share1": 50,
      "share2": 30,
      "upperlimit": 5000,
      "enablestate": "停用",
      "edit": "編輯"
    }
  ];

  vm.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {
          name: 'asc'     // initial sorting
      }
  }, {
      total: data.length, // length of data
      getData: function($defer, params) {
          // use build-in angular filter
          var orderedData = params.sorting() ?
                  $filter('orderBy')(data, params.orderBy()) :
                  data;
  
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
  });

  // FILTERS
  // ----------------------------------- 

  vm.tableParams2 = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
          name: '',
          age: ''
          // name: 'M'       // initial filter
      }
  }, {
      total: data.length, // length of data
      getData: function($defer, params) {
          // use build-in angular filter
          var orderedData = params.filter() ?
                 $filter('filter')(data, params.filter()) :
                 data;

          vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(vm.users);
      }
  });

  // SELECT ROWS
  // ----------------------------------- 

  vm.data = data;

  vm.tableParams3 = new ngTableParams({
      page: 1,            // show first page
      count: 10          // count per page
  }, {
      total: data.length, // length of data
      getData: function ($defer, params) {
          // use build-in angular filter
          var filteredData = params.filter() ?
                  $filter('filter')(data, params.filter()) :
                  data;
          var orderedData = params.sorting() ?
                  $filter('orderBy')(filteredData, params.orderBy()) :
                  data;

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
  });

  vm.changeSelection = function(user) {
      // console.info(user);
  };

  // EXPORT CSV
  // -----------------------------------  

  // var data4 = [{name: "Moroni", age: 50},
  //     {name: "Tiancum", age: 43},
  //     {name: "Jacob", age: 27},
  //     {name: "Nephi", age: 29},
  //     {name: "Enos", age: 34},
  //     {name: "Tiancum", age: 43},
  //     {name: "Jacob", age: 27},
  //     {name: "Nephi", age: 29},
  //     {name: "Enos", age: 34},
  //     {name: "Tiancum", age: 43},
  //     {name: "Jacob", age: 27},
  //     {name: "Nephi", age: 29},
  //     {name: "Enos", age: 34},
  //     {name: "Tiancum", age: 43},
  //     {name: "Jacob", age: 27},
  //     {name: "Nephi", age: 29},
  //     {name: "Enos", age: 34}];

  // vm.tableParams4 = new ngTableParams({
  //     page: 1,            // show first page
  //     count: 10           // count per page
  // }, {
  //     total: data4.length, // length of data4
  //     getData: function($defer, params) {
  //         $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
  //     }
  // });

  // SetSelected
  // function setSelectedXXX( start=0 , end=10 ){
  //   for(var i=start ;i<=end; i++){
  //     table.tableParams3.data[i].$selected = true
  //   } 
  // }

}
