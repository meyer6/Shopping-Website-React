import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import styles from './styles/cardStyles.module.css';

class ItemCard extends Component{
  state={
    stars: ["black","black","orange","orange","orange"]
  }
  render(){
    return (
        <Card className={styles.classContainer}>
            <div align='center' className={styles.imageContainer}>
                <Card.Img className={styles.image} variant="top" src="https://m.media-amazon.com/images/I/819ERfM4wzL._AC_UL480_FMwebp_QL65_.jpg"/>
            </div>
            <Card.Body style={{paddingBottom:'7px'}}>
                <Card.Title style={{fontSize: '15px', marginBottom:'2px'}}>Bic Cristal Original Ballpoint Pens, Smudge-free with ...</Card.Title>
                <div style={{height:"5px"}}></div>
                <p className={styles.costText}>
                    <sup>£</sup>1<sup style={{fontSize: '15px'}}>34</sup>
                </p>
                <small style={{float: 'right', paddingTop:'7px', color:'#007185'}}>⠀- 202</small>
                {this.state.stars.map(star =>(
                    <span className="fa fa-star" style={{color: star, paddingTop:'10px', float: 'right'}} key={(Math.random() + 1).toString(36).substring(7) + this.state.stars.indexOf(star)}></span>
                ))}
                
                <br></br><br></br>
                <p style={{marginBottom:'0px', fontSize: '12px'}}>Get it delivered by: <b>Friday, Nov 25</b></p>
                <p style={{marginBottom:'0px', fontSize: '12px'}}>Free Returns</p>

            </Card.Body>
        </Card>
    );
  }
}

export default ItemCard;