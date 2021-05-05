import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addList, dropModal } from "../../store/actions/";
import { AiOutlineClose } from "react-icons/ai";

function Modal(props) {
  const [value, setValue] = useState("");
  const status = useSelector((state) => state.modalReducer.modal);
  const lists = useSelector((state) => state.listReducer);
  console.log(lists);

  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(dropModal());
    setValue("");
  };

  const onInputChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  const test = () => {
    console.log("안녕");
  };

  return (
    <>
      {status && (
        <ModalContainer toggle={status} onClick={onModalClose}>
          <ModalBody
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalTitle>
              <h1>Favorite List</h1>
              <AiOutlineClose
                className='close'
                size={20}
                onClick={onModalClose}
              />
            </ModalTitle>
            <ModalContent>
              {lists?.map((item) => {
                return <div key={item.id}>{item.text}</div>;
              })}
            </ModalContent>
            <ModalFooter>
              <h2>Name</h2>
              <ModalInput
                placeholder='Input your name, please.'
                value={value}
                onChange={onInputChange}
              />
            </ModalFooter>
            <button onClick={test}>만들기</button>
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
}

export default React.memo(Modal);

export const ModalContainer = styled.article`
  ${({ theme }) => theme.flexCenter};
  display: ${(props) => (props.toggle ? `flex` : `none`)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  button {
    color: #0074d9;
    padding: 5%;
    position: relative;
    left: 75%;
  }
`;

export const ModalTitle = styled.div`
  ${({ theme }) => theme.flexCenter};
  padding: 2rem 2rem;

  h1 {
    padding-right: 5rem;
    font-size: 1.5rem;
  }

  .close {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0.5rem;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 5% 5%;

  h2 {
    padding-bottom: 1rem;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 3% 1%;
`;
