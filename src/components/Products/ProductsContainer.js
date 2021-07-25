import React from 'react'
import Product from './Product'
import Carousel from 'react-elastic-carousel'

function ProductsContainer(props) {
    const {title} = props;
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 4 },
        { width: 1150, itemsToShow: 7, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    return (
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 mx-auto pt-4 ">
                {/* Product Container */}
                <div className="p-4 bg-white">
                    {/* Title of Product Container */}
                    <div className="py-4">
                        <h4 className="p-0 m-0">{title}</h4>
                    </div>
                    {/* List of product */}
                    <div className="d-flex flex-row justify-content-between flex-wrap flex-md-nowrap">
                    <Carousel breakPoints={breakPoints}>
                        <Product title="Helios Fairmount"/>
                        <Product title="Pels Fairmount"/>
                        <Product title="Fairmount"/>
                        <Product title="Fairmount a"/>
                        <Product title="Fairmount b"/>
                        <Product title="Fairmount c"/>
                        <Product title="Fairmount d"/>
                        <Product title="Fairmount e"/>
                    </Carousel>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsContainer
