import { signal } from "@preact/signals";
import "./style.css";

const contador = signal(0);

export function Page() {
  return (
    <div>
      <h1>Hola mundo desde Preact!</h1>
      <button onClick={() => contador.value++}>{contador}</button>
    </div>
  );
}
