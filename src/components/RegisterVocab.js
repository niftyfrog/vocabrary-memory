import { useState } from "react";

const RegisterVocab = (props) => {
  const [registerVocabrary, setRegisterVocabrary] = useState("");
  const [mean, setMean] = useState("");
  const closeModal = () => {
    props.setModal(false);
  };
  const eventHandle = (e) => {
    const newVocabrary = { 単語: registerVocabrary, 意味: mean };
    e.preventDefault();
    props.setList(newVocabrary);
    props.setModal(false);
  };
  const modalContent = {
    background: "white",
    width: "200px",
    padding: "10px",
    borderRadius: "3px",
    alignItems: "center",
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      {props.showFlag ? (
        <div className="overlay" style={overlay}>
          <div className="modalContent" style={modalContent}>
            <input type="button" value="close" onClick={closeModal} />
            <form action="submit">
              <label>english</label>
              <input type="text" onChange={(e) => setRegisterVocabrary(e.target.value)} />
              <label>意味</label>
              <input type="text" onChange={(e) => setMean(e.target.value)} />
              <input type="submit" value="登録" onClick={eventHandle} />
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RegisterVocab;
