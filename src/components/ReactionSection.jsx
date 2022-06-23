import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSmile } from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';

const ReactionSection = ({ commentInput, onChange, onKeyDown, onClick }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSmile} size="lg" />
      <Form>
        <Label>
          <InputComment
            type="text"
            placeholder="댓글달기..."
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={commentInput}
          />
        </Label>
        <Submit type="button" onClick={onClick}>
          게시
        </Submit>
      </Form>
    </Container>
  );
};

export default ReactionSection;

const Container = styled.section`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const Form = styled.section`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.label``;
const InputComment = styled.input``;
const Submit = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: small;
  font-weight: 700;
  color: deepskyblue;
`;
