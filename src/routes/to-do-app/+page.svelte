<script>
    import SmileHappy from '$lib/icons/SmileHappy.svelte'
    import SmileSad from '$lib/icons/SmileSad.svelte'
    import { fly } from 'svelte/transition';

    let tasks = [];
    let newTask = '';

    function addTask() {
        if (newTask) {
            tasks = [...tasks, { content: newTask, checked: false }];
            newTask = '';
        }
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        tasks = [...tasks];
    }
</script>

<div class="todo-list h-screen flex items-center justify-center">
    <div class="todo-wrapper w-full shadow-l">
        <div class="todo-wrapper__date text-center">
            <div class="todo-wrapper__month font-semibold">December</div>
            <div class="todo-wrapper__day">Tuesday, December 22</div>
        </div>
        <div class="task-wrapper">
            <ul class="task-list">
             {#if tasks.length}
                {#each tasks as task, index (task)}
                    <li class="task-item">
                        <div class={task.checked ? 'task-item__wrapper flex items-center justify-between checked-item' : 'task-item__wrapper flex items-center justify-between'}>
                            <input class="task-item__checkbox w-full h-full" type="checkbox" bind:checked={task.checked}>
                            <div class="task-item__content">{task.content}</div>
                            <div class="smile-box">
                                <div class="smile-box__icons">
                                    <SmileSad />
                                    <SmileHappy />
                                </div>
                            </div>
                        </div>
                    </li>
                {/each}
            {:else}
                <div class="text-center">No tasks for today!</div>
            {/if}
            </ul>
            <div class="add-task flex items-center flex-col">
                <input class="task-input w-full" bind:value={newTask} placeholder="Add task" />
                <button class="add-btn font-semibold rounded-3xl" on:click={addTask}>Add</button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.todo-list {
    background: #F0EFEA;
}
.todo-wrapper {
    max-width: 340px;
    background: #ffffff;
    padding: 40px 0 0 0;
    transition: height .3s linear;
    &__date {
        padding-bottom: 45px;
        border-bottom: 4px solid #F5F6FB;
    }
    &__month {
        color: #605F6F;
        font-size: 46px;
        line-height: 1;
    }
    &__day {
        color: #ABAFD5;
        margin-top: 16px;
        font-size: 20px;
        letter-spacing: .8;
    }
}
.task-input {
    border: 1px solid #D5D5ED;
    padding: 10px 5px 10px 15px;
}
.add-task {
    margin-top: 35px;
}
.add-btn {
    background: #3DCE6A;
    color: #ffffff;
    min-width: 60px;
    padding: 8px 40px;
    letter-spacing: 1px;
    transition: .3s linear;
    transform: translateY(50%);
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background: #0be64f;
        }
    }
}
.task-wrapper {
    margin-top: 35px;
    padding: 0 15px;
}
.task-item {
    margin-top: 12px;
    position: relative;
    overflow: hidden;
    &__wrapper {
        animation-name: fadeIn;
        animation-delay: .3s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transform: translateY(100%);
        opacity: 0;
    }
    &:first-child {
        margin: 0;
    }
    &__checkbox {
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 10;
    }
    &__text {
        position: relative;
    }
    &__content {
        transition: .3s linear;
        position: relative;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: calc(100% - 32px);
    }
}
.smile-box {
    width: 30px;
    height: 30px;
    overflow: hidden;
    &__icons {
        transition: .3s linear;
    }
}
.checked-item {
    .task-item__content {
        color: #C2BCC8;
        &:after {
            content: '';
            position: absolute;
            display: block;
            animation-name: widthLine;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            width: 0;
            height: 1px;
            position: absolute;
            left: 0;
            top: 50%;
            background: #C2BCC8;
        }
    }
    .smile-box {
        &__icons {
            transform: translateY(-50%);
        }       
    }
}
@keyframes widthLine {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}
@keyframes fadeIn {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>