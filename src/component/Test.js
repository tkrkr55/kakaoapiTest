import React, { useState } from 'react'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
export default function Test() {
  const [isPopupOpen,setIsPopupOpen] = useState(false)

  const  closePostCode = ()=>{
    setIsPopupOpen(false)
  }
  return (
    <div>
      <button type='button'>우편번호 찾기</button>
      <div id='popupDom'>
      {isPopupOpen && (
        <PopupDom>
          <PopupPostCode onClose={closePostCode}></PopupPostCode>
        </PopupDom>
      )}
      </div>
    </div>
  )
}
