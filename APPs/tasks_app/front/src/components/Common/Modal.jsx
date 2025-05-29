import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const { modalType, task } = useSelector((state) => state.modal);
  console.log(task);

  // 모달 타입에 따라 모달 내용 변경
  const showModalContents = (modalType, str1, str2, str3) => {
    switch (modalType) {
      case 'update':
        return str1;
      case 'details':
        return str2;
      default:
        return str3;
    }
  };

  const modalTitle = showModalContents(
    modalType,
    '할일 수정하기',
    '할일 상세보기',
    '할일 추가하기'
  );
  return (
    <div className="modal fixed bg-black bg-opacity-50 flex items-center justify-center w-full h-full left-0 top-0 z-50">
      <div className="form-wrapper bg-gray-700 rounded-md w-1/2 flex flex-col items-center relative p-4">
        <h2 className="text-2xl py-2 border-b border-gray-300 w-fit font-semibold">
          {modalTitle}
        </h2>
        <form className="w-full">
          <div className="input-control">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="제목을 입력해 주세요..."
            />
          </div>
          <div className="input-control">
            <label htmlFor="description">내용</label>
            <textarea
              id="description"
              name="description"
              placeholder="내용을 입력해 주세요..."
            ></textarea>
          </div>
          <div className="input-control">
            <label htmlFor="date">입력 날짜</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="input-control toggler">
            <label htmlFor="isCompleted">완료 여부</label>
            <input type="checkbox" id="isCompleted" name="isCompleted" />
          </div>
          <div className="input-control toggler">
            <label htmlFor="isImportant">중요성 여부</label>
            <input type="checkbox" id="isImportant" name="isImportant" />
          </div>
          <div className="submit-btn flex justify-end">
            <button
              type="submit"
              className="flex justify-end bg-black py-3 px-6 rounded-md hover:bg-slate-900"
            >
              할일 추가하기
            </button>
          </div>
        </form>

        <IoMdClose
          className="absolute right-10 top-10 cursor-pointer"
          onClick={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Modal;
