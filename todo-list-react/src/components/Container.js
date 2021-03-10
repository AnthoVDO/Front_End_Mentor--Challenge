import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Input from './Input';
import Todo from './Todo';

const Container = () => {
    return (
        <div className="container">
            <Header/>
            <Input/>
            <Todo/>
            <Filter/>

        </div>
    );
};

export default Container;