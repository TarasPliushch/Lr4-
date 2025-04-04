const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const newTodo = ref('');
    const todos = ref([]);
    const editingId = ref(null);
    const editedTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({
          id: Date.now(),
          text: newTodo.value.trim(),
          completed: false
        });
        newTodo.value = '';
      }
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const startEditing = (todo) => {
      editingId.value = todo.id;
      editedTodo.value = todo.text;
    };

    const finishEditing = (id) => {
      const todo = todos.value.find(t => t.id === id);
      if (todo) {
        todo.text = editedTodo.value;
      }
      editingId.value = null;
    };

    const activeTodos = computed(() => {
      return todos.value.filter(todo => !todo.completed);
    });

    const completedTodos = computed(() => {
      return todos.value.filter(todo => todo.completed);
    });

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
      editingId,
      editedTodo,
      startEditing,
      finishEditing,
      activeTodos,
      completedTodos
    };
  }
}).mount('#app');
