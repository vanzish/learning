class Task{
    constructor(title = Task.getDeafultTitle()){
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Task is creating...');
        
    }

    get done() {
        return this._done === true ? 'Done' : 'Undone';
    }

    set done(value){
        if(value !== undefined && typeof value === 'boolean'){
            this._done = value;
        }else{
            console.error('Error. true or false are possible');
        }
    }

    complete(){
        this._done = true;
        Task.count -= 1;
        console.log(`Task ${this.title} was done`)
    }

    static getDeafultTitle(){
        return 'Task';
    }
}

Task.count = 0;

let task = new Task('Clean');
// let task2 = new Task('Buy');
// let task3 = new Task();

// console.log(typeof task);
// console.log(task instanceof Task);

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log(Task.count);
console.log(task.done);
task.complete();
console.log(task.done);

// console.log(Task.count);