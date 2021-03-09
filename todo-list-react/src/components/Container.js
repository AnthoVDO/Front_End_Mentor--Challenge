import React from 'react';
import Header from './Header';
import Input from './Input';
import Todo from './Todo';

const Container = () => {
    return (
        <div className="container">
            <Header/>
            <Input/>
            <Todo/>
        </div>
    );
};

export default Container;