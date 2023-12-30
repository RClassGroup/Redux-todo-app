import styled from 'styled-components';

// styled-components 
export const AppContainer = styled.div`
  padding: 10px;
  display: flex;

`;

export const ComponentStyle = styled.div`
  margin-bottom: 20px;
  padding: 70px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 12px;
  margin: 0 auto;

  button {
    margin-top: 15px;
  }
`;

export const AddStyle = styled.div`
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  max-height: 800px;
  margin-inline: auto;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 20px;
  width: 400px; 
  height: 300px; 
`;
