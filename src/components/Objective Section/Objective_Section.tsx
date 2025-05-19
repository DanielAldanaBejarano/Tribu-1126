import React, { forwardRef } from "react";
import Card from "react-bootstrap/Card"
import patron from "../../assets/patron_1.png";

const Objective_Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div ref= {ref}>
      <h1 className="m-5">Conoce más sobre Tribu 1126</h1>
      <Card className=""> MISIÓN </Card>
      <div className="">La misión de nuestra tribu es, más que llevar un estudio webcam, crear una tribu de colaboradores que cosechan juntos</div>
      <img src={patron} className="separador" alt="Separador" />
    </div>
  );
});

export default Objective_Section;
