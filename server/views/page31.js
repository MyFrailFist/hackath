$(function() {
    var Aladdin = new blk.API({});
  var $table = $('#displayTable');
  var $rows = $('#rows');
  var $search = $('#search');
  var table;

 function submit(query, rows, skipColumns, columnOrder) {

   if (table) {
      table.destroy();
            table = null;
    }
    
      var securities = $document.findElementById('ourmom').value;
      var securities = [{"name":"ngee hung","loiter":"yes", "class":"mom"},{"name":"Jesus", "loiter":"no","class":"hun"},{"name":"jun","loiter":"no", "class":"class"}]
      var skipCols = skipColumns || [];
      var startingColumns = columnOrder || [];
      var columns = [];
      securities.forEach(function(sec) {
        for (var field in sec) {
          if ((typeof sec[field] === 'string' || typeof sec[field] === 'number') && !skipCols.includes(field) && !startingColumns.includes(field) && !columns.includes(field)) {
            columns.push(field);
          }
        }
      });
      columns = startingColumns.concat(columns.sort());
      var tableData = securities.map(function(sec) {
        return columns.map(function(col) {
          return col == 'score' ? sec[col] : sec[col] || '-';
        });
      });
            if (table) {
                table.destroy();
            }
      $table.empty();
      table = $table.DataTable({
        data: tableData,
        columns: columns.map(function(col) {
          return {
            title: StringUtil.camelToHuman(col) + '\n(' + col + ')'
          }
        }),
        order: [
          [0, 'desc']
        ]
      });
    
 }

 var skipCols = ['@type'];
  
 var searchTimeout;

 function delayedSearch(delay) {
    window.clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(submit.bind(this, $search.val(), $rows.val(), skipCols), delay);
  }
  $search.on('input', delayedSearch.bind($search[0], 250));
  $('#submit').click(delayedSearch.bind($search[0], 0));

 submit($search.val(), $rows.val(), skipCols);

});