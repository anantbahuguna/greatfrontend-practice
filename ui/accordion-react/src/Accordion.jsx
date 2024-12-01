import { useState } from "react";

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set());
  return (
    <div className="accordion">
      {sections.map(({ id, title, content }, index) => {
        const isExpanded = openSections.has(id);
        return (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-item-title"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                isExpanded
                  ? newOpenSections.delete(id)
                  : newOpenSections.add(id);
                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion-item-content" hidden={!isExpanded}>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
