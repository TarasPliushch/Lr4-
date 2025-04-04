// ... (попередній код setup)

template: `
  <h1>Todo App</h1>
  
  <div class="todo-form">
    <input 
      v-model="newTodo" 
      @keyup.enter="addTodo" 
      class="todo-input" 
      placeholder="Add a new task..."
    >
    <button @click="addTodo" class="todo-button">Add</button>
  </div>
  
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item" :class="{ completed: todo.completed }">
      <input type="checkbox" v-model="todo.completed">
      
      <template v-if="editingId === todo.id">
        <input 
          v-model="editedTodo" 
          @keyup.enter="finishEditing(todo.id)" 
          @blur="finishEditing(todo.id)" 
          class="edit-input"
        >
      </template>
      <template v-else>
        <span @dblclick="startEditing(todo)">{{ todo.text }}</span>
      </template>
      
      <button @click="removeTodo(todo.id)" class="todo-button" style="margin-left: auto; background-color: #f44336;">Delete</button>
    </li>
  </ul>
  
  <div v-if="todos.length">
    <h3>Summary</h3>
    <p>Active: {{ activeTodos.length }}</p>
    <p>Completed: {{ completedTodos.length }}</p>
  </div>
`
