import React, { useEffect, useState } from 'react';
import ChatInputStyle from 'assets/styles/ChatInputStyle';
import 'assets/images/sendMessage.png';
import { SEND_MESSAGE_ICON } from 'utils/ImageUtil';
import moment from 'moment';

const { ChatInputContainer, InputWrapper, TextArea, SendButton, SendIcon } =
  ChatInputStyle;

interface MessageInfoProps {
  text: string;
  date: string;
}

interface ChatInputProps {
  replyData: { userName: string; content: string };
  onChange: (chatInfo: object) => void;
}

export default function ChatInput({ replyData, onChange }: ChatInputProps) {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [messageText, setMessageText] = useState(String);
  const WriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setButtonDisabled(false);
    setMessageText(e.target.value);
    if (e.target.value === '') {
      setButtonDisabled(true);
    }
  };

  const sendMessage = () => {
    if (messageText) {
      const chatInfo: MessageInfoProps = {
        text: messageText,
        date: moment(new Date()).format('yyyy-mm-dd hh:MM:ss'),
        // date: new Date(),
      };
      console.log(chatInfo);
      onChange(chatInfo);
      setMessageText('');
      setButtonDisabled(true);
    }
  };

  const pressSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) {
      sendMessage();
      e.preventDefault();
    }
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (replyData.content !== '') {
      setMessageText(
        replyData.userName +
          '\n' +
          replyData.content +
          '\n' +
          '회신:\n' +
          messageText
      );
    }
  }, [replyData]);

  return (
    <ChatInputContainer>
      <InputWrapper method="post" onSubmit={submit}>
        <TextArea
          onChange={WriteMessage}
          value={messageText}
          onKeyPress={pressSendMessage}
        />
        <SendButton onClick={sendMessage} disabled={buttonDisabled}>
          <SendIcon
            alt="전송 아이콘"
            src={SEND_MESSAGE_ICON}
            isDisabled={buttonDisabled}
          />
        </SendButton>
      </InputWrapper>
    </ChatInputContainer>
  );
}
