import { Audio } from "react-loader-spinner";
export const SunspotLoaderComponent = () => {
  return (
    <div className="loader-container">
      <Audio
        height="90"
        width="90"
        radius="9"
        color="#c1c1c1"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
