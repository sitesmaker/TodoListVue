<template>
    <div class="todo__item">
        <div class="todo__item-title">{{ item.title }}</div>
        <div class="todo__item-description">{{ item.description }}</div>
        <button class="button button_delete" @click="$emit('deleteItem', id)">x</button>
        <button class="button button_update" @click="$emit('updateItem', { id:id, data:item })">&#8635;</button>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
            id: {
                type: Number,
            }
        }
    }
</script>

<style>
    .todo__item {
        margin-bottom: 20px;
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        display: grid;
        grid-template-areas: 'title update delete'
                              'description description description';
        grid-template-columns: .8fr .1fr .1fr;

        &:last-child {
            margin-bottom: 0;
        }

        .button_delete {
            grid-area: delete;
        }

        .button_update {
            grid-area: update;
        }
    }

    .todo__item-title {
        font-size: 24px;
        line-height: 110%;
        margin-bottom: 5px;
        grid-area: title;
    }

    .todo__item-description {
        font-size: 16px;
        line-height: 110%;
        color: #333;
        grid-area: description;
    }
</style>