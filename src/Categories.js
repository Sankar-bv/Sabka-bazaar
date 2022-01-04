import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoriesId } from './redux/Actions';
import itemslist from './server/categories/index.get.json';
import './Categories.css';

const Categories = (props) => {
    const history = useHistory();

    const setItem = () => {
        var selectBox = document.getElementById('category-link-mobile');
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        itemslist.map(item => {
            if(item.name === selectedValue){
                props.setCategoriesId(item.id);
                history.push(`/${item.key}`);
            }
        })
    }

    return (
        <><div className='category-link'>
        {itemslist.map(item => {
            if (item.order > 0)
            return <div key={item.key} className='link'>
                <Link to={`/${item.key}`}onClick={()=>{props.setCategoriesId(item.id)}}>{item.name}</Link>
            </div>
        })}</div>
        <select id='category-link-mobile' onChange={setItem}>
        {itemslist.map(item => {
            if (item.order > 0)
            return <option>{item.name}</option>
        })}</select></>
    )
}

const mapDispatchToprops = dispatch => ({
    setCategoriesId : id => dispatch(setCategoriesId(id))
})

export default connect(null, mapDispatchToprops)(Categories);