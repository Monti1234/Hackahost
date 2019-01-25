import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={5} showControls={false} showIndicators={false} className="z-depth-1">
        <CarouselInner >
          <CarouselItem itemId="1">
            <div>
              <img className="d-block w-100" src="https://i.imgur.com/Kv9wIXE.png"  alt="First slide" />
              <Mask overlay="black-light" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="2">
            <div>
              <img className="d-block w-100" src="https://i.imgur.com/X8tRKum.png" alt="Second slide" />
              <Mask overlay="black-strong" />
            </div>
           
          </CarouselItem>
          <CarouselItem itemId="3">
            <div>
              <img className="d-block w-100" src="https://i.imgur.com/RxvlMgU.png" alt="Second slide" />
              <Mask overlay="black-strong" />
            </div>
           
          </CarouselItem>
          <CarouselItem itemId="4">
            <div>
              <img className="d-block w-100" src="https://i.imgur.com/Wdovxe2.png" alt="Second slide" />
              <Mask overlay="black-strong" />
            </div>
           
          </CarouselItem>
          <CarouselItem itemId="5">
            <div>
              <img className="d-block w-100" src="https://i.imgur.com/e5ocaZe.png" alt="Second slide" />
              <Mask overlay="black-strong" />
            </div>
           
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;