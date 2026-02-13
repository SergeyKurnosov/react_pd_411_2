// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Length from './Length';
import Range from './Range';
import Form from './Form';
import Posts from './posts/Posts';
import React from 'react';

class App extends React.Component {

state={
  posts :
  [
    { id: '1', title: 'C++ proc', content: 'Процедурное программирование  на языке C++' },
    { id: '2', title: 'C++ OOP', content: 'Обьектно ориентированное программирование  на языке C++' },
    { id: '3', title: 'Windows Desktop Devolpment', content: 'Разработка настольных приложений для операционной системы Windows' }
  ]
}
removePost = (id) => {
 // posts = posts.filter(post => post.id !== id);
  this.setState({posts : this.state.posts.filter(post => post.id !== id)})
}

render() {
  return (
    <div className="App">
      {/* <Header/>
      <Hello/>
      <Length/>
      <Range/>
      <Form/> */}
      <Posts posts={this.state.posts} removePost={this.removePost} />
    </div>
  );
}
}
export default App;
