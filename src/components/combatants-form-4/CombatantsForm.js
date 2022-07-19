import React from "react";
import { Formik } from "formik";
import PlayerForm from "./PlayersForm";
import EnemyForm from "./EnemyForm";
import ButtonBar from "../ButtonBar";

const CombatantForm = ({ submitEnemiesForm, submitPlayersForm }) => {
  const handleSubmitPlayers = (e) => {
    if (submitEnemiesForm) {
      submitEnemiesForm(e);
    }
  };

  function handleSubmitEnemies(e) {
    if (submitPlayersForm) {
      submitPlayersForm(e);
    }
  }

  const submitPlayers = (submitForm) => {
    submitEnemiesForm = submitForm;
  };

  const submitEnemeies = (submitForm) => {
    submitPlayersForm = submitForm;
  };

  function handleBothSubmits() {
    handleSubmitPlayers();
    handleSubmitEnemies();
  }

  return (
    <div>
      <button onClick={handleBothSubmits}>Submit from outside</button>
      <PlayerForm bindSubmitForm={submitPlayers} />
      <EnemyForm bindSubmitForm={submitEnemeies} />
      <ButtonBar></ButtonBar>
    </div>
  );
};

export default CombatantForm;
