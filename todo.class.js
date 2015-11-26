(function() {
	
	/**
	 * Constructor.
	 * Initialize all the global variables
	*/
	TodoList = function() {
		this.list = JSON.parse(localStorage.getItem("TodoList")) || [];		
	},
	
	TodoList.prototype = {
		/**
		* Add the item to the list
		*/
		addItem: function($item) {
			var $total = (parseInt(this.list.length)-1) > 0 ? (parseInt(this.list.length)-1) : 0;			
			var $param = {
				'rowId': this.list[$total] ? this.list[$total].rowId : 0,
				'item': '',
				'status': 'Open'
			}
			
			$param.rowId = parseInt($param.rowId) + 1;
			$param.item = $item;
			this.list.push($param);
			
			localStorage.setItem("TodoList", JSON.stringify(this.list));
			this.createRow($param);
		},
		/**
		* Update the status of the item to the list
		*/
		updateItem: function($rowId) {
			for (var i = 0; i < this.list.length; i++) {				
				if (this.list[i].rowId == $rowId) {
					this.list[i].status = 'Completed';
				}
			}
			localStorage.TodoList = JSON.stringify(this.list);
		},
		/**
		* Delete the item from the list
		*/
		deleteItem: function($rowId) {
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].rowId == $rowId) {
					this.list.splice(i,1);
				}
			}
			localStorage.TodoList = JSON.stringify(this.list);
		},
		/**
		* Create Table Row
		*/
		createRow: function($obj) {			
			var $row = $('<tr></tr>').attr('rowid', $obj.rowId);
			var $cols = $('<td class="align-center"><input type="checkbox" class="selectItem" name="check" value="' + $obj.rowId + '" /></td><td>' + $obj.item + '</td><td>' + $obj.status + '</td><td class="align-center"><a href="#" class="delete"></a></td>');
			$($row).append($cols);	
			$("#ToDoList tbody").append($row);
		},
		/**
		* Get the List of all Items
		*/
		getList: function() {
			return JSON.parse(localStorage.getItem("TodoList"));
		},		
		/**
		* Display the List of all Items
		*/
		displayList: function() {			
			if(this.list != null) {
				for(var i = 0; i < this.list.length; i++) {
					var $obj = this.list[i];
					this.createRow($obj);
				}
			}
		}
	}
	
	Todo = function() {
		var $Todo = new TodoList();
		return $Todo;
	}
	
})();
