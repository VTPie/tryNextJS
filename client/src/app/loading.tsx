import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner
        animation="border"
        variant="primary"
        className="d-block mx-auto mt-4"
      />
      <p className="d-block text-center">Just a second ...</p>
    </div>
  );
};
export default Loading;
