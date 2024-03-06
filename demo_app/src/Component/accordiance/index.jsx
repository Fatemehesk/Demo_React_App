import { dummyData } from "./data";
import { useState } from "react";
import "./style.css";
const Accordiance = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleAccordion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="accordion">
      {dummyData.map((item) => (
        <div key={item.id}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(item.id)}
            style={{ cursor: "pointer" }}
          >
            <strong>Question:</strong> {item.item}
          </div>
          {expandedIds.includes(item.id) && (
            <div className="accordion-content">
              <strong>Answer:</strong> {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordiance;
