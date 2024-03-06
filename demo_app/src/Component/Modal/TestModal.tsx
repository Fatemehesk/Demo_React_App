import React, { useRef, useState } from "react";
import CostumModal from "./CostumModal";
import { useOutsideHook } from "../hooks/useOutsideHook";
import { useWindowResize } from "../hooks/useWindowResize";

const TestModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);;
  const {width,height}=useWindowResize()

  useOutsideHook(modalRef, () => setShowModal(false));
  return (
    <div className="test-model">
      {showModal ? (
        <div ref={modalRef}>
          <CostumModal
            onClose={setShowModal}
            title={"Hello"}
            body={`The width of window is ${width} and the height is ${height}`}
          />
        </div>
      ) : (
        <button onClick={() => setShowModal(true)}>Open Modal Window</button>
      )}
    </div>
  );
};
export default TestModal;
