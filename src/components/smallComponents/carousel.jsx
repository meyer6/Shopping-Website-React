import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';

class ItemsCarousel extends Component {
    state = { 
        itemsImgs: ["https://rukminim1.flixcart.com/flap/3376/560/image/7760adba4cdde874.jpg?q=50","https://rukminim1.flixcart.com/flap/1688/280/image/90cdb794821102c8.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/374a88846acf16b2.jpg?q=50"],
    };
    render() { 
        return (
            <Carousel variant="light" style={{width: '100%'}}>
                {this.state.itemsImgs.map(img =>(
                    <Carousel.Item key={this.state.itemsImgs.indexOf(img)}>                    
                        <img
                            style={{width: '100%'}}
                            src={img}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default ItemsCarousel;