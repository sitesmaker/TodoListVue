export default {
  namespaced: true,
  state: {
    TodoList: localStorage.getItem("TodoList"),
  },
  getters: {
    getTodoList(state) {
        return JSON.parse(state.TodoList);
    }
  },
  mutations: {
    ADD_TODO_ITEM(state, payload) {
        let data = [];
        
        if (state.TodoList) {
            JSON.parse(state.TodoList).forEach(element => {
                data.push(element)
            });
            data.push(payload);
            localStorage.setItem('TodoList', JSON.stringify(data));
        } else {
            data.push(payload);
            localStorage.setItem('TodoList', JSON.stringify(data));
        }

        this.commit("Todo/UPDATE_TODO_LIST");
        data = [];
    },
    DELETE_TODO_ITEM(state, id) {
      let list = JSON.parse(state.TodoList);

      list = list.filter((elem, index) => index != id);
      localStorage.setItem('TodoList', JSON.stringify(list));
      this.commit("Todo/UPDATE_TODO_LIST");
    },
    UPDATE_TODO_LIST(state) {
      state.TodoList = localStorage.getItem("TodoList");
    },
    UPDATE_TODO_ITEM(state, updateData) {
      let list = JSON.parse(state.TodoList),
          updateElem = list[updateData.updateItemId];

      updateElem.title = updateData.title;
      updateElem.description = updateData.description;

      localStorage.setItem('TodoList', JSON.stringify(list));
      this.commit("Todo/UPDATE_TODO_LIST");
    }
  },
  actions: {
    addTodoItem({ commit }, payload) {
      commit("ADD_TODO_ITEM", payload);
    },
    deleteTodoItem({ commit }, payload) {
      commit("DELETE_TODO_ITEM", payload);
    },
    updateTodoItem({ commit }, payload) {
      commit("UPDATE_TODO_ITEM", payload);
    }
  },
};