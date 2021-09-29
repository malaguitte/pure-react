import Layer from "../layer/Layer";

function Dialog({ title, content, onHandleCancelClick, onHandleOkClick }) {
  return (
    <Layer>
      <div className="dialog">
        <h2 className="title">{title}</h2>
          <div className="content">{content}</div>
          <button className="cancelButton" onClick={onHandleCancelClick}>Cancel</button>
          <button className="okButton" onClick={onHandleOkClick}>OK</button>
      </div>
    </Layer>
  );
}

export default Dialog;