import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
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



const SimpleSlider=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    const items = [
      { id: 1, url: imgUrl1 },
      { id: 2, url: imgUrl2 },
    ];

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

export default SimpleSlider;