import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="Ponga su nombre"
        ref={inputRef}
      />
  
      <button className="button" onClick={handleClick}>
      Comenzar
</button>
       
    </div>
  );
}