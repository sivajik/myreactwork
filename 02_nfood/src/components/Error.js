import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!!!</h1>
      <h2>Something went wrong</h2>
      {err.error.message}
    </div>
  );
};

export default Error;
