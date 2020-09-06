import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

List.propTypes = {
    list: PropTypes.any.isRequired
};

const renderRow = (list,deleteClick) => {
    return (
        list.map((item, index) => {
            return (
                <ListItem key={index} listItem={item} deleteClick={deleteClick}>
                </ListItem>
            );
        }));
};

function List(props) {
    const { list,deleteClick } = props;
    return (
        renderRow(list,deleteClick)
    );
}

export default List;