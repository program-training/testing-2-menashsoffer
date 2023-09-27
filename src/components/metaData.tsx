const Metadata = ({ data }) => {
  const { url, size, time } = data;

  return (
    <div>
      <p>URL: {url}</p>
      <p>Size: {size}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default Metadata;
