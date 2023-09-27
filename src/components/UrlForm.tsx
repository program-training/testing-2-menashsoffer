import { useState } from "react";

const UrlForm = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button type="submit">Generate your QR Code</button>
    </form>
  );
};

export default UrlForm;
