import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      console.log("ref", ref.current);
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      } else {
        handler(); //Modal이 닫히는 함수를 전달받았으니 실행한다
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
};

export default useOnClickOutside;
