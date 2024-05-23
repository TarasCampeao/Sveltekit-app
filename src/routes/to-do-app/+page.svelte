<script>
    import SmileHappy from '$lib/icons/SmileHappy.svelte'
    import SmileSad from '$lib/icons/SmileSad.svelte'

    let tasks = [];
    let newTask = '';

    function addTask() {
        if (newTask) {
            tasks = [...tasks, newTask];
            newTask = '';
        }
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        tasks = [...tasks];
    }
</script>

<div class="todo-list h-screen flex items-center justify-center">
    <div class="todo-wrapper shadow-l">
        <div class="todo-wrapper__date text-center">
            <div class="todo-wrapper__month font-semibold">December</div>
            <div class="todo-wrapper__day">Tuesday, December 22</div>
        </div>
        <div class="task-wrapper">
            <ul class="task-list">
             {#if tasks.length}
                {#each tasks as task, index (task)}
                    <li class="task-item flex justify-between">
                        <div>{task}</div>
                        <div>
                            <SmileHappy />
                            <SmileSad />
                            <!-- <button class="remove-button" on:click={() => removeTask(index)}>
                                <SmileHappy />
                                <SmileSad />
                            </button> -->
                        </div>
                    </li>
                {/each}
            {:else}
                <div class="text-center">No tasks for today!</div>
            {/if}
            </ul>
            <div class="add-task flex items-center flex-col">
                <div>
                    <input class="task-input" bind:value={newTask} placeholder="Add task" />
                </div>
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
    width: 100%;
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
.task-list {
    margin-top: 35px;
    padding: 0 15px;
}
.task-item {
    margin-top: 5px;
    &:first-child {
        margin: 0;
    }
}
</style>