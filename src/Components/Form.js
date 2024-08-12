import React from "react";
import "../styles/index.scss";

const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Votre texte" />
          <input type="submit" value="Soumettre" />
        </form>
        <div className="btn-sort-container">
          <div id="goodToBad">
            top
            <span>
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
          <div id="badToGood">
            Flop
            <span>
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
