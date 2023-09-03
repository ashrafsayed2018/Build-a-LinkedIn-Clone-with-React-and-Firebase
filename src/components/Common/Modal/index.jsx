import { Modal, Button } from "antd";
import "./index.scss";
const ModalComponent = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
}) => {
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          type="text"
          value={status}
          placeholder="what do you want to talk about ?"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
