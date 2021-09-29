import Dialog from "../dialog/Dialog"
import RegistrationForm from "./RegistrationForm";

function RegistrationDialog({onHandleCancelClick, onHandleOkClick}) {
  return (
    <Dialog
      title="Basic Modal"
      content={<RegistrationForm></RegistrationForm>}
      onHandleCancelClick={onHandleCancelClick}
      onHandleOkClick={onHandleOkClick}       
    >
    </Dialog>
  );
}

export default RegistrationDialog;