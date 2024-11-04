import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [], //main tasks array
    filteredTask: [] //array in which filtered tasks will be stored
}

//function for parsing start date and end date to compare in sort 
//the dates are strings so have to change it into date
const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // Month is zero-based
};

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        //adding task into state
        add: (state, action)=>{
            state.tasks.push(action.payload);
            
        },
        //editing the tasks
        edit: (state, action)=>{
            const {id, priority, status} = action.payload;
            const index = state.tasks.findIndex(task=>task.id === id);

            if(index !== -1){
                const currentTask = {...state.tasks[index]};

                currentTask.priority = priority;
                currentTask.status = status;

                //removing end date if the task status becomes pending or in progress
                if(status !== 'pending' && status !== 'in progress'){
                    const currentDate = new Date();
                    const year = currentDate.getFullYear();
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const day = String(currentDate.getDate()).padStart(2, '0');

                    const formattedDate = `${year}-${month}-${day}`;

                    currentTask.endDate = formattedDate;
                }else  {
                    currentTask.endDate = null;
                }

                state.tasks[index] = currentTask;
            }

        },
        //deleting the task
        delete: (state, action)=>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        //filtering the tasks based on the filters
        filterTask: (state, action)=>{
            const {assigneeName, priority, startDate, endDate} = action.payload;
            state.filteredTask = state.tasks.filter(task => {
                const assigneeMatch = (assigneeName ) ? task.assignee === assigneeName : true;
                const priorityMatch = (priority) ? task.priority === priority : true;
                const startDateMatch = (startDate) ? task.startDate === startDate : true;
                const endDateMatch = (endDate) ? task.endDate === endDate : true;

                return assigneeMatch && priorityMatch && startDateMatch && endDateMatch;
            });
        },
        //reseting filters array when no filters are applied / new tasks are added/edited
        resetFilter : (state, action)=>{
            state.filteredTask = [...state.tasks];
        },

        //sorting tasks
        sortTask: (state,action)=>{
            const {property} = action.payload;
            state.tasks.sort((a,b)=>{
                if(property === 'priority'){
                    const priorityOrder = {'p0': 0, 'p1': 1, 'p2': 2};
                    return priorityOrder[a[property]] - priorityOrder[b[property]];
                }else if(property === 'startDate' || property === 'endDate'){
                    if(property === null){
                        return 0;
                    }
                    const dateA = parseDate(a[property]);
                    const dateB = parseDate(b[property]);
                    return dateA - dateB
                }
                return 0;
            })
        }
        
    }
});

export const taskReducer = taskSlice.reducer;
export const actions = taskSlice.actions;
export const taskSelector = (state)=>state.taskReducer;