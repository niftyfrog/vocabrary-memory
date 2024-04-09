import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const VocabList = (props) => {
  const [vocabView, setVocabView] = useState(true);
  const [meanView, setMeanView] = useState(true);

  const deleteHandle = (index) => {
    const newList = [...props.list];
    newList.splice(index, 1);
    props.setList(newList);
  };
  const handleSwitch = (setToggle, state) => {
    setToggle(!state);
  };

  return (
    <div className="vocablist">
      <div className="check-filter">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="単語を表示"
            checked={vocabView}
            onChange={() => handleSwitch(setVocabView, vocabView)}
          />
        </Form>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="意味を表示"
            checked={meanView}
            onChange={() => handleSwitch(setMeanView, meanView)}
          />
        </Form>
      </div>
      <div className="list-title">
        <div className="japanese">
          <h3>日本語</h3>
          <ul>
            {props.list.map((vocab, index) => (
              <div className="list">
                <li key={index}>
                  <div className="vocablist">{vocabView && `${vocab.単語}`}</div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="english">
          <h3>English</h3>
          <ul>
            {props.list.map((vocab, index) => (
              <div className="list">
                <li key={index}>
                  <div className="meanlist">{meanView && `${vocab.意味}`}</div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="delete-button">
          <h3>削除</h3>
          <ul>
            {props.list.map((vocab, index) => (
              <div className="list">
                <li key={index + 1}>
                  <button className="td-button" onClick={() => deleteHandle(index)}>
                    削除
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* {
        <ul>
          {props.list.map((vocab, index) => (
            <div className="list">
              <li key={index}>
                <div className="vocablist">{vocabView && `${vocab.単語}`}</div>
                <div className="meanlist">{meanView && `${vocab.意味}  `}</div>
                <Button variant="outline-primary" onClick={() => deleteHandle(index)}>
                  削除
                </Button>
              </li>
            </div>
          ))}
        </ul>
      } */}
    </div>
  );
};

export default VocabList;
