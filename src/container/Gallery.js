import React, { useRef } from "react";
import styled from "styled-components";
import { Subheading } from "../components/import";
import { images } from "../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const galleyimages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <Container>
      <Content>
        <Subheading title="Instagram" />
        <h1>Photos Gallery</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quia
          sequi accusantium veritatis repudiandae voluptas mollitia! Molestias,
          quis repellendus consectetur harum excepturi nisi ea autem, veritatis
          doloremque sed inventore! Ipsa.
        </p>
        <button>Explore Now</button>
      </Content>

      <AppImages>
        <ImageContainer ref={scrollRef}>
          {galleyimages.map((image, index) => (
            <GalleyPhotos key={index + 1}>
              <img src={image} alt="Galley" />
              <BsInstagram className="instagram" />
            </GalleyPhotos>
          ))}
        </ImageContainer>

        <ImagesArrows>
          <LeftArrow onClick={() => scroll("left")} />
          <RightArrow onClick={() => scroll("right")} />
        </ImagesArrows>
      </AppImages>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--color-black);
  padding: 4rem 0 4rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }
  p {
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    margin: 32px 0px;
  }
  button {
    align-self: center;
    margin-bottom: 20px;
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 500px;
  padding-right: 32px;

  @media (max-width: 768px) {
    min-width: 300px;
  }
`;

const AppImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 50%;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleyPhotos = styled.div`
  position: relative;
  min-width: 300px;
  height: 447px;
  margin-right: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    transition: 0.5s ease-in-out;

    &:hover {
      opacity: 0.35;
    }
  }

  .instagram {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 32px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

const ImagesArrows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5%;
`;

const LeftArrow = styled(BsArrowLeftShort)`
  color: white !important;
  font-size: 32px;
  cursor: pointer;
  margin-left: 2rem;
  border: 1px solid orange;
  background: black;
`;

const RightArrow = styled(BsArrowRightShort)`
  color: black !important;
  font-size: 32px;
  cursor: pointer;
  margin-right: 2rem;
  border: 1px solid orange;
  background: white;
`;
export default Gallery;
