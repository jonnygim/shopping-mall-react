import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }

    .slick-dots {
        bottom: -50px;
        margin-top: 200px;
    }
`;

const ImageContainer = styled.div`
    margin: auto;
    transform: translate(30%, 0em);
`;

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`;

const imgUrl1 = require('../images/tech.jpg');
const imgUrl2 = require('../images/food.jpg');

const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
];


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    //   centerMode: true,
    //   centerPadding: '0px',
    };


    return (
        <div>
            <Container>
                <StyledSlider {...settings}
                >
                {items.map(item => {
                    return (
                    <div key={item.id}>
                        <ImageContainer>
                        <Image src={item.url} />
                        </ImageContainer>
                    </div>
                    );
                })}
                </StyledSlider>
            </Container>
        </div>
    );
  }
}