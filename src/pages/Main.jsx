import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    clickAddButtonCreator,
    setContentCreator,
    clearContentCreator,
    deleteTodoCreator,
    completeTodoCreator
} from '../redux/modules/todos';
import { AppContainer, ComponentStyle, AddStyle, Container } from '../shared/styled';
import "../App.css";

function Main() {
    // Redux에서 상태와 액션 디스패치를 위한 훅 사용
    const todos = useSelector((state) => state.todos.todos);
    const content = useSelector((state) => state.todos.content);
    const dispatch = useDispatch();

    // 입력 값 변화 시 컨텐츠 업데이트
    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(setContentCreator(name, value));
    };

    // 할 일 추가 핸들러
    const handleAddButtonClick = () => {
        const newWorking = {
            id: uuidv4(),
            title: content.title,
            detail: content.detail,
            isDone: false,
        };
        dispatch(clickAddButtonCreator(newWorking));
        dispatch(clearContentCreator());
    }

    // 할 일 삭제 핸들러
    const clickRemoveButtonHandler = (event) => {
        const newWorking = todos.filter((work) => work.id !== event.id);
        dispatch(deleteTodoCreator({ deletedTodos: newWorking }));
    }

    // 할 일 완료 핸들러
    const clickCompleteButtonHandler = (work) => {
        const newWorking = {
            id: uuidv4(),
            title: work.title,
            detail: work.detail,
            isDone: true,
        };
        dispatch(completeTodoCreator({ completedTodos: [...todos.filter(todo => todo.id !== work.id), newWorking] }));
    }

    // 할 일 취소 핸들러
    const clickCancelButtonHandler = (work) => {
        const newWorking = {
            id: uuidv4(),
            title: work.title,
            detail: work.detail,
            isDone: false,
        };
        dispatch(completeTodoCreator({ completedTodos: [...todos.filter(todo => todo.id !== work.id), newWorking] }));
    }

    return (
        <Container>
            {/* 할 일 추가 입력 폼 */}
            <AddStyle>
                제목 &nbsp;
                <input
                    name='title'
                    value={content.title}
                    onChange={handleChange}
                />
                내용 &nbsp;
                <input
                    name='detail'
                    value={content.detail}
                    onChange={handleChange}
                />
                <button onClick={handleAddButtonClick}>추가</button>
            </AddStyle>

            <hr />
            <h2>할일!</h2>
            {/* 할 일 목록 생성*/}
            <AppContainer>
                {todos.filter((work) => !work.isDone)
                    .map((work) => (
                        <ComponentStyle key={work.id}>
                            <Link to={`/works/${work.id}`}>
                                <span style={{ cursor: 'pointer' }}>상세보기</span>
                            </Link>
                            <h2>{work.title}</h2>
                            {work.detail}
                            <button onClick={() => clickRemoveButtonHandler(work)}>삭제</button>
                            <button onClick={() => clickCompleteButtonHandler(work)}>완료</button>
                        </ComponentStyle>
                    ))}
            </AppContainer>

            <hr />
            <h2>끝냄!</h2>
            <AppContainer>
                {/* 완료된 할 일 목록 생성 */}
                {todos.filter((work) => work.isDone)
                    .map((work) => (
                        <ComponentStyle key={work.id}>
                            <h2>{work.title}</h2>
                            {work.detail}
                            <button onClick={() => clickRemoveButtonHandler(work)}>삭제</button>
                            <button onClick={() => clickCancelButtonHandler(work)}>취소</button>
                        </ComponentStyle>
                    ))}
            </AppContainer>
        </Container>
    )
}

export default Main;
