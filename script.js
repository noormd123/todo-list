$(document).ready(function() {
	var $todo = Todo();
	$todo.displayList();
	
	$('#addToList').on('click', function() {
		var $val = $('#item').val();		
		if ($val)
		{
			var $todoItem = $val;		
			$todo.addItem($todoItem);
		}
		else
		{
			alert('Enter the To-do Item');
		}
	});
	
	$('#item').keyup(function(e){
		var $keycode = e.which || e.keyCode;
		if($keycode == 13)
		{
			$('#addToList').click();
		}
	});
	
	$(document).on('click', '.delete' , function(e) {
		e.preventDefault();
		
		var $row = $(this).closest('tr');
		var $rowId = $($row).attr('rowid');
		$($row).remove();
		$todo.deleteItem($rowId);
	});
	
	$('#selectAll').change(function() {		
		$('.selectItem').prop('checked', $(this).prop('checked'));		
	});
	
	$('#markComplete').click(function() {
		$('.selectItem').each(function() {
			if($(this).prop('checked'))
			{
				var $rowId = $(this).closest('tr').attr('rowid');
				$todo.updateItem($rowId);
				location.reload();
			}
		});
	});
});
