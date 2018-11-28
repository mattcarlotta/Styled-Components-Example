import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background: #f8f8f8;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;

    input {
      height: 40px;
      max-width: 500px;
      font: inherit;
      width: 100%;
      padding: 0 10px;
      background: #fff;
      color: #666;
      border: 1px solid #e5e5e5;
      transition: 0.2s ease-in-out;
      transition-property: color, background-color, border;
      margin-bottom: 10px;
    }

    button {
      cursor: pointer;
      margin-top: 10px;
      border: none;
      overflow: visible;
      font: inherit;
      color: inherit;
      text-transform: none;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 30px;
      vertical-align: middle;
      font-size: 14px;
      line-height: 38px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.1s ease-in-out;
      transition-property: color, background-color, border-color;
      background-color: #0e6dcd;
      color: #fff;

      &:hover {
        background-color: #0f7ae5;
        color: #fff;
      }
    }

    h1 {
      color: #0f7ae5;
    }
  }
`;

export default Container;
