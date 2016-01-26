import {mount} from 'react-mounter';
import Modal from 'react-modal';
import Home from './home/index.jsx';
import RoomKey from './roomkey/index.jsx';
import TrackExpenses from './trackexpenses/index.jsx';

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
    Modal.setAppElement(document.body);
    mount(RoomKey, {params: queryParams})
  }
});

FlowRouter.route('/trackexpenses', {
  name: 'trackexpenses',
  action: function(params, queryParams){
    Modal.setAppElement(document.body);
    mount(TrackExpenses, {params: queryParams})
  }
});