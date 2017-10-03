$j(function () {
  var matrixTables = $j(".nqMatrixTable");
  var labelW = 0;
  
  matrixTables.each(function () {
    if ($j(this).find('input[type=radio]').length > 0) {
			var nqMatrixTable = $j(this);

			// Check if has text on the right side
      var matrixRows = nqMatrixTable.find('tr').not('.nqRowMatrixHeader');			
			var hasText = false;
			for(var i = 0; i < matrixRows.length; i++){
				if(hasText) break;
				var lastTd = $j(matrixRows[i]).find('td:last');
				hasText = !(lastTd.hasClass('nqMatrixCell') || lastTd.find('input:radio').length > 0);
			}
			if (hasText) return;
			
      // Table rows
      var rows = nqMatrixTable.find("tr");
      
      // Header row
      var header = rows.filter('.nqRowMatrixHeader').find('> td');
      
      // First default option
      var options = "<option value='0'>--Select--</option>";
      
      // Check if radio groups span in the row or column:
      //  First column is question and first row is options or
      //  First column is option and first row is question
      var isTransposed = header.filter(function(){
        return this.className.match(/nqCol\d+/);
      }).length == 0;
      
      var row;
      
      // Transpose current table layout to normal layout (radio groups span in the row)
      if(isTransposed){
        // First column is option
        var $opt;
        var $rHeader = rows.filter('.nqRowMatrixHeader').addClass('transposed');
        for (i = 0; i < rows.length; i++) {
          row = $j(rows[i]);
          $opt = row.find('> td').first()
            .addClass('transposed')
            .removeClass('nqMatrixCellLabel').removeClass('nqmatrixodd').removeClass('nqmatrixeven')
            .css('width', i == 0 ? 'auto' : '80px');
          $rHeader.append($opt);
        }
        
        // First row is question
        for(i = rows.length; i < header.length - 1; i++)
          nqMatrixTable.append('<tr />');
        
        for(i = 1; i < header.length; i++){
          row = $j(rows[i]);
          $opt = $j(header[i])
            .removeClass('nqoption')
            .addClass('transposed').addClass('nqMatrixCellLabel')
            .removeAttr('valign').removeAttr('align')
            .css('width', 'auto');
          // Question
          row.append($opt); 
        }
        
        for(i = 1; i < header.length; i++){
          row = $j(rows[i]).addClass('nqRow' + i).addClass('transposed');
          row.append(rows.find('> td.nqRow' + i)
            .addClass('transposed').removeClass('nqRow' + i)
            .removeAttr('valign').removeAttr('align'));
        }
        
        // Remove empty rows/cells
        nqMatrixTable.find('tr, td').not('.transposed').remove();
        
        // Retrieve header and rows
        rows = nqMatrixTable.find("tr");
        header = rows.filter('.nqRowMatrixHeader').find('> td');
      }
      
      // Hide pc layout (table)
			$j(".nqRowMatrixHeader", this).hide();
      $j("input:radio", nqMatrixTable).hide();
      
      // First column is question
      for (i = 1; i < header.length; i++)
        options += "<option value='" + i.toString() + "'>" + $j(header[i]).html() + "</option>";
        
      // First row is options
      for (i = 1; i < rows.length; i++) { 
        row = $j(rows[i]);
        // Hide all columsn except question and the first answer
        row.find("td:gt(1)").hide();
        // Set select in the 2nd column
        $j(row.find("td").get(1)).append($j("<select class='radioSelect'>" + options + "</select>"));
        // Set colspan
        $j(row.find("td").get(1)).attr("colspan", $j(rows[i]).find("td").length - 1).css("text-align", "left");
        // Make default selection
        row.find("select").val(row.find("input:checked").val());
      }
      
      // Styling
      rows.each(function(){
        var label = $j(this).find('>td:first');
        label.html(label.html().replace(/&nbsp;/, ''));
        labelW = Math.max(label.width(), labelW);
      });
    }
  });
  
  // Set radio when select changes
  matrixTables.on("change", ".radioSelect", function () {
    var $this = $j(this);    
    $this.parentsUntil("tr").parent().find("input:radio[value=" + $this.val() + "]").attr('checked', 'checked');
  });
  
  // Table alignment
  matrixTables.each(function(){
    var rows = $j(this).find('tr');
    rows.each(function(){
      $j(this).find('td:first').width(labelW);
    });
  });
  
  // Make textfields full width
  $j('.nqinput').each(function () {
    var $this = $j(this);
    var deviceWidth = $j(window).width();
    if (($this.width() + 20) > deviceWidth) {
      $this.css({
        width: '90%',
        marginLeft: '3%'
      });
    }
  });
});