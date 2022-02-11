import styled from 'styled-components';
import { SEND_MESSAGE_ICON } from '../../utils/ImageUtil';

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 50px;
  border: 1px solid gray;
`;

const TextArea = styled.textarea`
  margin-left: 10px;
  resize: none;
  width: 100%;
  height: 80%;
  border: none;
  font-size: 15px;
`;

const SendButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  width: 50px;
  height: 50px;
`;

const SendIcon = styled.img<{ isDisabled: boolean }>`
  width: 30px;
  height: 30px;
  filter: ${(props) => (props.isDisabled ? 'invert(50%)' : '')};
`;
const ChatInputStyle = { InputWrapper, TextArea, SendButton, SendIcon };

export default ChatInputStyle;
