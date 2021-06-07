import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="grid grid-flow-col gap-4 h-auto">
        <img
          className="row-span-3 rounded-full"
          src={images[active]}
          alt="animal"
        />
        <div className="col-span-2 grid grid-cols-3 p-5">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "" : "opacity-70"}
              alt="animal thumbnail"
              onClick={() => {
                this.setState({ active: index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
