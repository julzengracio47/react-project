import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      content: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, content } = this.state;

    axios.post('/api/create', { title, content })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand navig-brand"> NBA Insider - React</Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create" className="active">Write an Article</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title article-title">
                Write an Article
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Back to Article List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
                <div class="form-group">
                  <label for="content">Content:</label>
                  <textArea className="form-control" name="content" onChange={this.onChange} placeholder="Content" cols="80" rows="30">{content}</textArea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <footer className="custom-footer">
        <hr/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Copyright @ NBA Insider</h2>
                <p>Institute of Art Design &amp; Technology</p>
              </div>
            </div>
            <div className="row details">
                <div className="col-md-12">Julz Engracio - N00145647
                  <p>email@email.com</p>
                  <img src={ require('../assets/facebook.png') } className="logo img responsive"/>
                  <img src={ require('../assets/twitter.png') } className="logo img responsive"/>
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Create;