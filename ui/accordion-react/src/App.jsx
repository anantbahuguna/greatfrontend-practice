import "./App.css";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="wrapper">
      <Accordion
        sections={[
          {
            id: "html",
            title: "HTML",
            content:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            id: "css",
            title: "CSS",
            content:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            id: "javascript",
            title: "JavaScript",
            content:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
        ]}
      />
    </div>
  );
}

export default App;
