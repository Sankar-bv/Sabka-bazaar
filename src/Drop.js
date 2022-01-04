import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoriesId } from './redux/Actions';
import itemslist from './server/categories/index.get.json';
// import { useHistory } from 'react-router-dom';
// import '../Categories.css';
import './Drop.css'

const Drop = (props) => {
    const history = useHistory();

    const setItem = () => {
        var selectBox = document.getElementById('category-link-mobile');
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        // alert(selectedValue);
        itemslist.map(item => {
            if(item.name === selectedValue){
                props.setCategoriesId(item.id);
                history.push(`/${item.key}`);
            }
        })
    }
    
    return (
        <>
        <div className='category-link'>
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
                // {/* <option> */}{item.name}
                {/* <Link to={`/${item.key}`}onClick={()=>{props.setCategoriesId(item.id)}}>{item.name}</Link> */}
               
        })}</select></>
    )
}


const mapDispatchToprops = dispatch => ({
    setCategoriesId : id => dispatch(setCategoriesId(id))
})

export default connect(null, mapDispatchToprops)(Drop);