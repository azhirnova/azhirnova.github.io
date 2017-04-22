(function() {

    alert("anna")

    // Create a new todo and add it to the page
    function createTodo(text) {
    	if (!text) {
      	alert('Todo items should not be empty!');
        return;
      }

      var todoHtml = getTodoHtml(text);
      var $todo = $(todoHtml)
      	.on('click', toggleTodoStatus)
        .on('click', '.remove-todo', removeTodo);

      $('#todo-container').append($todo);
    }

    // Update the status of the todo
    function toggleTodoStatus(event) {
    	var $todo = $(event.target);
      if ($todo.hasClass('done')) {
      	$todo.removeClass('done');
      } else {
      	$todo.addClass('done');
      }
    }

    // Remove the todo from the page
    function removeTodo(event) {
    	var $todoItem = $(event.target).closest('.todo-item');
      $todoItem.remove();
    }

    // When the user submits the new form
    $('#todo-form').on('submit', function(event) {
    	event.preventDefault();
      var $input = $('input');
      var todoText = $input.val();
    	createTodo(todoText);
    	$input.val('');
    });


    /*
     * Helper methods
     */

    // HTML element for the given todo text
    function getTodoHtml(text)  {
    	return '<div class="todo-item well">' +
        '<span class="todo-text">' + text + '</span>' +
        '<a class="remove-todo" href="#"><span class="glyphicon glyphicon-remove"></a>' +
        '</div>';
    }

}());
