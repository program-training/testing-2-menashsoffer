import "./Main.css";
import { useState } from "react";
import UrlForm from "./UrlForm";
import QrCode from "./QrCode";
import Metadata from "./metaData";

const Main = () => {
  const [qrCode, setQrCode] = useState();
  const [metaData, setMetaData] = useState();

  const handleSubmit = async (url) => {
    const imgSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=100x100`;
    setQrCode(imgSrc);

    const response = await fetch(imgSrc);
    const metadata = {
      size: "100x100",
      time: new Date().toLocaleString(),
    };
    setMetaData(metadata);
  };

  return (
    <>
      <div>
        <h1>Welcome to my site</h1>
        <UrlForm onSubmit={handleSubmit} />
        {qrCode && <QrCode imgSrc={qrCode} />}
        {metaData && <Metadata data={metaData} />}
      </div>
    </>
  );
};

export default Main;
