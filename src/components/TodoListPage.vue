<template>
    <div class="row">
        <div class="list-page">
            <form @submit.prevent="!updateMode ? addDataItem({ title, description }) : updateDataSend({ updateItemId, title, description })">
                <input type="text" name="title" v-model="title" placeholder="Введите заголовок">
                <textarea name="description" cols="30" rows="10" v-model="description" placeholder="Введите описание"></textarea>
                <div class="button-wrapper">
                    <button type="submit" :disabled="title && description ? false : true">{{ !updateMode ? "Добавить" : "Изменить" }}</button>  
                    <button class="button button_cancel" v-if="updateMode" @click="cancel">Отмена</button>
                </div>
            </form>

            <h3 :class="getTodoList.length ? 'not-empty' : ''">
                {{ getTodoList.length ? "Список задач" : "Список задач пуст" }}
            </h3>
            <ul class="todo">
                <TodoListItem v-for="item, index in getTodoList"
                    :key="index"
                    :item="item"
                    :id="index"
                    @updateItem="updateItem"
                    @deleteItem="(id) => { deleteTodoItem(id) }"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoListItem from "@/components/TodoListItem.vue";

export default {
    data() {
        return {
            title: '',
            description: '',
            updateItemId: null,
            updateMode: false,
        }
    },
    components: {
        TodoListItem,
    },
    methods: {
        ...mapActions("Todo", ["addTodoItem", "deleteTodoItem", "updateTodoItem"]),
        addDataItem(data){
            this.addTodoItem(data);
            this.cancel();
        },
        updateItem(arr) {
            this.updateMode = true;
            this.title = arr.data.title;
            this.description = arr.data.description;
            this.updateItemId = arr.id;
        },
        updateDataSend(data){
            this.updateTodoItem(data);
            this.cancel();
        },
        cancel() {
            this.updateMode = false;
            this.title = '';
            this.description = '';
            this.updateItemId = null;
        }
    },
    computed: {
        ...mapGetters("Todo", ["getTodoList"]),
    }
}

</script>

<style lang="scss">
    .list-page {
        display: flex;
        flex-direction: column;
        background-color: #fafafa;
        display: flex;
        height: calc(100vh - 80px);
        width: 100%;
        padding-top: 80px;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;

        input {
            padding: 10px;
            outline: none;
        }

        textarea {
            padding: 10px;
            resize: none;
            outline: none;
        }

        button {
            padding: 15px 10px;
            color: #fafafa;
            font-size: 16px;
            line-height: 100%;
            font-weight: 700;
            background-color: #4cbb17;
            outline: none;
            border: none;
            cursor: pointer;
            border-radius: 0 0 10px 10px;
            transition: all ease-in-out .4s;

            &:disabled {
                background-color: #ccc;
                color: #333;
            }
        }
    }

    .button-wrapper {
        display: flex;

        button {
            width: 100%;
        }
    }

    h3 {
        margin-top: 40px;
        padding-bottom: 10px;


        &.not-empty {
            border-bottom: 3px solid orange;
        }
    }

    .todo {
        margin-top: 10px;
    }
</style>