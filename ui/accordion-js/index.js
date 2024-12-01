// accordion function which takes root element and sections
// it calls attachEvents() and init()

//init function sets up DOM elements
//attachEvents function using Event Delegation
(() => {
  function accordion(root, { sections }) {
    function attachEvents() {
      root.addEventListener("click", (event) => {
        const target = event.target;
        if (
          target.tagName !== "BUTTON" ||
          !target.classList.contains("accordion-item-title")
        ) {
          return;
        }

        const accordionIcon = target.querySelector(".accordion-icon");
        accordionIcon.classList.toggle("accordion-icon--rotated");

        const accordionContent = target.nextSibling;
        accordionContent.hidden = !accordionContent.hidden;
      });
    }

    function init() {
      root.classList.add("accordion");
      const accordionSections = document.createDocumentFragment();
      sections.forEach(({ id, title, contents }) => {
        //create div of class accordion-item
        const accordionSection = document.createElement("div");
        accordionSection.classList.add("accordion-item");

        //create button of class accordion-item-title
        const accordionItemBtn = document.createElement("button");
        accordionItemBtn.classList.add("accordion-item-title");
        accordionItemBtn.type = "button";
        accordionItemBtn.setAttribute("data-id", id);

        const accordionIcon = document.createElement("span");
        accordionIcon.classList.add("accordion-icon");
        accordionIcon.setAttribute("aria-hidden", "true");

        accordionItemBtn.append(title, accordionIcon);

        //create div of class accordion-item-content
        const accordionContent = document.createElement("div");
        accordionContent.classList.add("accordion-item-content");
        accordionContent.hidden = true;
        accordionContent.textContent = contents;
        accordionSection.append(accordionItemBtn, accordionContent);

        //append to accordionSections
        accordionSections.append(accordionSection);
      });

      root.appendChild(accordionSections);
    }

    init();
    attachEvents();
  }
  accordion(document.getElementById("accordion"), {
    sections: [
      {
        id: "html",
        title: "HTML",
        contents:
          "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        id: "css",
        title: "CSS",
        contents:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      },
      {
        id: "javascript",
        title: "JavaScript",
        contents:
          "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      },
    ],
  });
})();
