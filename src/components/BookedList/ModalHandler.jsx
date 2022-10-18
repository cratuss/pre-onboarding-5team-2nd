import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function ModalHandler({ message, modalUpBtn }) {
  return (
    <ModalHandlerBlock>
      <div className='modalBody' onClick={e => e.stopPropagation()}>
        <header className='layer-header'>
          <p className='tit'>알 림</p>
        </header>
        <p style={{ textAlign: 'left', paddingTop: '35px', color: 'black' }}>{message}</p>

        <button id='modalCloseBtn' onClick={modalUpBtn}>
          확인
        </button>
        <button className='btn-layer-close' onClick={modalUpBtn}>
          레이어 닫기
        </button>
      </div>
    </ModalHandlerBlock>
  );
}

const ModalHandlerBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  /* modal창 */
  .modalBody {
    position: absolute;
    width: 400px;
    padding: 25px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }

  #modalCloseBtn {
    line-height: 38px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    color: #333;
    box-sizing: border-box;
    text-align: center;
    background-color: #0a58ca;
    width: 60px;
    color: #fff;
    margin-top: 16px;
    cursor: pointer;
  }

  #modalCloseBtn:hover {
    cursor: pointer;
  }

  .layer-header {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background: #0a58ca;
    color: white;
    padding-left: 20px;
    padding-top: 7px;
    text-align: left;
  }

  .tit {
    font-size: 17px;
    padding-top: 6px;
  }

  .btn-layer-close {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    width: 16px;
    height: 15px;
    margin: 0;
    padding: 0;
    border: 0;
    text-indent: -9999px;
    background: url(https://img.megabox.co.kr/static/pc/images/common/btn/btn-layer-close.png) no-repeat center;
    cursor: pointer;
  }
`;

export default ModalHandler;
