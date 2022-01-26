import useFetch from "./hooks/useFetch";
import Chart from "./components/Chart";

const Crypto = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/crypto/");

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <Chart data={data} />}
    </div>
  );
};

export default Crypto;
