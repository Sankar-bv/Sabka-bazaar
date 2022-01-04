import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoriesId } from '../redux/Actions';
import Categories from '../server/categories/index.get.json';
import './Home.css';
import Carouselview from '../Carousel';

const Home = (props) => {
    const data = Categories;
    const history = useHistory();
    return (
        <div className='container-home'>
            <Carouselview />
            {data.map(item => {
                if (item.order > 0)
                    return <div key={item.key} className='category'>
                        <img src={window.location.origin + item.imageUrl} alt='noimage'></img>
                        <div className='content'>
                        <div>{item.name}</div>
                        <div className='paragraph'>{item.description}</div>
                        <button onClick={()=>{history.push(`/${item.key}`); props.setCategoriesId(item.id)}}>Explore {item.key}</button>
                        </div>
                    </div>
            }
            )}
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    setCategoriesId : id => dispatch(setCategoriesId(id))
})

export default connect(null, mapDispatchToprops)(Home);