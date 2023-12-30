// src/pages/Work.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todos } from '../shared/data';
import { clearContentCreator } from '../redux/modules/todos';
import { BoxContainer, CenteredContainer } from '../shared/styled';

function Work() {
    // useParams를 사용하여 URL의 파라미터를 추출
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // URL 파라미터에 해당하는 작업을 todos 배열에서 찾음
    const work = todos.find((work) => work.id === parseInt(id));

    // main으로 이동 버튼을 눌렀을 때 실행되는 핸들러
    const handleMainButtonClick = () => {
        // Redux 액션을 dispatch하여 할 일 내용을 초기화
        dispatch(clearContentCreator());
        // main 페이지로 이동
        navigate("/");
    };

    return (
        <div>
            <CenteredContainer>
                <BoxContainer>
                    <h2>작업 상세보기</h2>
                    <p>작업 ID: {work.id}</p>
                    <p>제목: {work.title}</p>
                    <p>내용: {work.detail}</p>
                    <button onClick={handleMainButtonClick}>
                        main으로 이동
                    </button>
                </BoxContainer>
            </CenteredContainer>
        </div>
    );
}

export default Work;
