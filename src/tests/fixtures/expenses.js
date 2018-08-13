import moment from 'moment';

export default [{
  id: '1',
  description: 'Cheesecake',
  note: '',
  amount: 295,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 10000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Cheese',
  note: '',
  amount: 100,
  createdAt: moment(0).add(4, 'days').valueOf()
}];