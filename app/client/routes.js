import {mount} from 'react-mounter';
import Modal from 'react-modal';
import Home from './home/index.jsx';
import RoomKey from './roomkey/index.jsx';

FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams){
    Modal.setAppElement(document.body);
    mount(Home, {params: queryParams})
  }
});

FlowRouter.route('/roomkey', {
  name: 'roomkey',
  action: function(params, queryParams){
    mount(RoomKey, {params: queryParams})
  }
});