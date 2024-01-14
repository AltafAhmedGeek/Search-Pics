import "../styles/custom.css";

function ImageShow({ image }) {
  return (
    <div>
      {console.log(image)}
      <img src={image.urls.small} alt={image.alt_description} key={image.id} />
    </div>
  );
}

export default ImageShow;
