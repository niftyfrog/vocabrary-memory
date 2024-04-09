import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import VocabList from "./VocabList";
import RegisterVocab from "./RegisterVocab";
import VocabDisabled from "./VocabDisabled";
const Home = () => {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const showModal = () => {
    setModal(true);
  };
  const addToList = (newVocab) => {
    setList([...list, newVocab]);
  };

  return (
    <div className="home">
      <h1>単語帳アプリ Vocablist</h1>
      <Button onClick={showModal}>単語を登録する</Button>
      <RegisterVocab showFlag={modal} setModal={setModal} setList={addToList} />
      <VocabList list={list} setList={setList} />
    </div>
  );
};

export default Home;
