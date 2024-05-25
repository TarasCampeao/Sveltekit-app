<script>
    import SmileHappy from '$lib/icons/SmileHappy.svelte'
    import SmileSad from '$lib/icons/SmileSad.svelte'
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let tasks = [];
    let newTask = '';
    let animateToDo = false

    onMount(() => {
        animateToDo = true
    })

    function addTask() {
        if (newTask) {
            tasks = [...tasks, { content: newTask, checked: false }];
            newTask = '';
        }
    }
</script>

<div class="todo-list h-screen flex items-center justify-center">
    {#if animateToDo}
        <div transition:fade={{
                delay: 500,
                duration: 800
            }} class="todo-wrapper w-full shadow-l">
            <div class="todo-wrapper__date text-center">
                <div class="todo-wrapper__month font-semibold overflow-hidden">
                    <div transition:fly={{
                        delay: 1800,
                        duration: 1000,
                        x: 0,
                        y: 50
                    }}>December</div>
                </div>
                <div class="todo-wrapper__day overflow-hidden">
                    <div transition:fly={{
                        delay: 1900,
                        duration: 1000,
                        x: 0,
                        y: 50
                    }}>Tuesday, December 22</div>
                </div>
            </div>
            <div class="divider-box relative w-full flex">
                <div class="divider-line overflow-hidden">
                    <div transition:fly={{
                        delay: 1200,
                        duration: 1000,
                        x: 100,
                        y: 0 }}
                        class="divider-box__first divider-line__animate h-full">
                    </div>
                </div>
                <div class="divider-line overflow-hidden">
                    <div transition:fly={{
                        delay: 1200,
                        duration: 1000,
                        x: -100,
                        y: 0 }} class="divider-box__second divider-line__animate h-full">
                    </div>
                </div>
            </div>
            <div class="task-wrapper">
                <div class="overflow-hidden">
                    <ul transition:fly={{
                            delay: 2000,
                            duration: 1000,
                            x: 0,
                            y: 50
                        }} class="task-list">
                        {#if tasks.length}
                            {#each tasks as task, index (task)}
                                <li class="task-item relative overflow-hidden">
                                    <div class={task.checked ? 'task-item__wrapper flex items-center justify-between checked-item' : 'task-item__wrapper flex items-center justify-between'}>
                                        <input
                                            class="task-item__checkbox w-full h-full absolute cursor-pointer"
                                            type="checkbox"
                                            bind:checked={task.checked}
                                        >
                                        <div class="task-item__content overflow-hidden relative">{task.content}</div>
                                        <div class="smile-box overflow-hidden">
                                            <div class="smile-box__icons">
                                                <SmileSad />
                                                <SmileHappy />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        {:else}
                            <div class="text-center overflow-hidden">No tasks for today!</div>
                        {/if}
                    </ul>
                </div>
                <div class="add-task flex items-center flex-col">
                    <div class="overflow-hidden w-full">
                        <input transition:fly={{
                            delay: 2100,
                            duration: 1000,
                            x: 0,
                            y: 50 }}
                            class="task-input w-full"
                            bind:value={newTask}
                            placeholder="Add task"
                        />
                    </div>
                    <div class="overflow-hidden btn-wrapper">
                        <button transition:fly={{
                            delay: 2200,
                            duration: 1000,
                            x: 0,
                            y: 50 }}
                            class="add-btn font-semibold rounded-3xl"
                            on:click={addTask}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
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
        padding-bottom: 40px;
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
.divider-line {
    width: 50%;
    height: 4px;
    &__animate {
        background: #F5F6FB;
    }
}
.task-input {
    border: 1px solid #D5D5ED;
    padding: 10px 5px 10px 15px;
}
.add-task {
    margin-top: 35px;
}
.btn-wrapper {
    transform: translateY(50%);
}
.add-btn {
    background: #3DCE6A;
    color: #ffffff;
    min-width: 60px;
    padding: 8px 40px;
    letter-spacing: 1px;
    transition: .3s linear;
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
    &:nth-of-type(n+2) {
        margin-top: 12px;
    }
    &__wrapper {
        animation-name: fadeIn;
        animation-delay: .3s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transform: translateY(100%);
        opacity: 0;
    }
    &__checkbox {
        opacity: 0;
        z-index: 10;
    }
    &__content {
        transition: .3s linear;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: calc(100% - 32px);
    }
}
.task-item__wrapper {
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            .task-item__content {
                color: #C2BCC8;
            }
        }
    }
}
.smile-box {
    width: 30px;
    height: 30px;
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