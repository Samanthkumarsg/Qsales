import React from 'react'
import ReactStars from 'react-stars'

function Product(props) {

    const {title} = props

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return (
        <React.Fragment>
            <div className=" product p-3 rounded mx-1">
                <img src="https://rukminim1.flixcart.com/image/416/416/jpsnma80/dining-set/4/f/j/4-seater-beige-rubber-wood-830054681001-hometown-dark-walnut-original-imafbynpedyjgpt4.jpeg?q=70" className="img-fluid product-image"/>
                <div className="pt-3 product-description">
                <h6 className="p-0 m-0 mb-1">{title}</h6>
                <p className="p-0 m-0 text-secondary fs-12">4 Seater dinning set</p>
                </div>
                <div className="d-flex flex-column">
                    <ReactStars count={5} onChange={ratingChanged} size={20} color2={'#ffd700'}/>
                    <p className="primary-color p-0 m-0 mt-1 small">₹ 14,000</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product
