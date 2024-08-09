import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Flower = () => {
    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            // customDot={<CustomDot />}

            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}

            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            autoPlay={true}
            slidesToSlide={1}
            swipeable
        >
            <img
                src="client_large.jpg"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    borderRadius: '5px',
                }}
            />
            <img
                src="large_bouquet.webp"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    borderRadius: '5px',
                }}
            />
            <img
                src="small_bouquet.png"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    borderRadius: '5px',
                }}
            />
            <img
                src="client_large.jpg"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    borderRadius: '5px',
                }}
            />
            <img
                src="calt.avif"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    borderRadius: '5px',
                }}
            />
        </Carousel>
    )
};

export default Flower;
