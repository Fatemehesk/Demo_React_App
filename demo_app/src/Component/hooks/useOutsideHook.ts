import { useEffect } from "react";

export const useOutsideHook = (ref, handler) => {

  useEffect(() => {
    const listener = (event) => {
      console.log(ref.current.contains(event.target),!ref.current );
      if (!ref.current || ref.current.contains(event.target)) {
      
        return;
      }
      handler(event);
    };

    const cleanup = () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return cleanup;
  }, [ref, handler]);
};
