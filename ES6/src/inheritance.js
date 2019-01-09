class Task{
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Task creation');
    }

    get title(){
        return this._title;
    }

    set title(value){
        if(value !== undefined){
            this._title = value;
        }
        else{
            console.error('Value is undefined');
        }
    }

    static getDefaultTitle(){
        return 'Task';
    }

    complete(){
        this.done = true;
        console.log(`Task ${this.title} was done`);
    }
}

Task.count = 0;

class SubTask extends Task{
    constructor(title, parent){
        super(title);
        this.parent = parent;
        console.log('SubTask creation');
    }

    complete(){
        super.complete();
        console.log(`SubTask ${this.title} was done`);
    }
}

let task = new Task('Learn JS');
let subTask = new SubTask('Learn ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);