import styled from 'styled-components';

interface ILoginBtn {
  hasInput: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.img`
  width: 400px;
  margin: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  height: 80px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-bottom: solid 1px #b3b3b3;
  transition: 0.4s;
  &::placeholder {
    font-size: 16px;
    color: #828282;
  }
  &:focus {
    transition: 0.2s;
    outline: none;
    border-bottom: solid 1px black;
  }
`;

const ErrorBox = styled.div`
  color: #ff585d;
  text-align: center;
  margin-top: 30px;
  height: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const LoginBtn = styled.button<ILoginBtn>`
  width: 400px;
  height: 80px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  background-color: ${({ hasInput }) => (hasInput ? '#FF585D' : '#828282')};
  transition: 0.4s;
  &:hover {
    transition: 0.2s;
    color: ${({ hasInput }) => (hasInput ? '#FF585D' : 'white')};
  }
`;

const SignupBtn = styled.button`
  width: 400px;
  height: 80px;
  margin: 10px;
  border: none;
  cursor: pointer;
  color: gray;
  transition: 0.4s;
  &:hover {
    transition: 0.2s;
    color: black;
  }
`;

const LoginStyle = {
  Container,
  LogoBox,
  InputContainer,
  Input,
  ErrorBox,
  BtnContainer,
  LoginBtn,
  SignupBtn,
};

export default LoginStyle;
