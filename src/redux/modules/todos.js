// todoReducer.js
import { todos } from "../../shared/data";

// action value
export const ADD_TODO = "todos/ADD_TODO";
export const SET_CONTENT = "todos/SET_CONTENT";
export const CLEAR_CONTENT = "todos/CLEAR_CONTENT";
export const DELETE_CONTENT = "todos/DELETE_CONTENT";
export const COMPLETE_TODO = "todos/COMPLETE_TODO";

// 초기 상태 정의
const initialState = {
    todos, // 할 일 목록
    content: {
        title: "",
        detail: "",
    },
};

// action creator

// 새로운 할 일 추가
export const clickAddButtonCreator = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo,
    };
};

// 할 일 내용 설정
export const setContentCreator = (title, detail) => {
    return {
        type: SET_CONTENT,
        payload: { title, detail },
    };
};

// 할 일 내용 초기화
export const clearContentCreator = () => ({
    type: CLEAR_CONTENT,
});

// 할 일 삭제
export const deleteTodoCreator = (todoId) => {
    return {
        type: DELETE_CONTENT,
        payload: todoId,
    }
}

// 할 일 완료 표시
export const completeTodoCreator = (todoId) => {
    return {
        type: COMPLETE_TODO,
        payload: todoId,
    }
}

// reducer
const todoReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case ADD_TODO:
            // 새로운 할 일을 추가한 상태를 반환
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case SET_CONTENT:
            // 할 일 내용을 설정한 상태를 반환
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.payload.title]: action.payload.detail,
                },
            };
        case CLEAR_CONTENT:
            // 할 일 내용을 초기화한 상태를 반환
            return {
                ...state,
                content: { title: "", detail: "" },
            }; 
        case DELETE_CONTENT:
            // 선택한 할 일을 삭제한 상태를 반환
            return {
                ...state,
                todos: action.payload.deletedTodos,
            }
        case COMPLETE_TODO:
            // 선택한 할 일을 완료로 표시한 상태를 반환
            return {
                ...state,
                todos: action.payload.completedTodos,
            }
        default:
            // 기본 상태 유지
            return state;
    }
};

export default todoReducer;
