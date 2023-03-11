import React, { Component } from 'react';
import styles from './styles/homeItemCardStyles.module.css';

class HomeItemCard extends Component {
    render() { 
        return (
            <div>
                <br></br>
                <div className={styles.masterContainer}>
                    <h4><b>{this.props.name}</b></h4>
                    <div className={styles.horizontalScroll}>
                        {this.props.data.map(data =>(
                            <div align='center' className={styles.imageContainer} key={this.props.data.indexOf(data)}>
                                <img 
                                    src={data[0]}
                                    style={{height:'210px'}}
                                ></img>
                                <p style={{marginLeft:"10px", marginTop:"3px", fontSize: '18px'}}>
                                    <span style={{color: 'red'}}><b>
                                        £{data[1]}<sup>{data[2]}⠀</sup>
                                        </b>
                                    </span> 
                                    <sub>
                                        Was:
                                        <del>
                                            £{data[3]}.{data[4]}
                                        </del>
                                    </sub>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
    
export default HomeItemCard;