import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Hase" />
    </div>
  );
}

// das hier ist eine component
function Greeting({ name }) {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
}
