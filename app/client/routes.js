import {mount} from 'react-mounter';
import Modal from 'react-modal';
import Home from './home/Home.jsx';

FlowRouter.route('/', {
  name: 'home',
  action: function(query, queryParams){
    Modal.setAppElement(document.body);
    mount(Home, {name: 'home'})
  }
});