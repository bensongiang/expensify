import authReducer from '../../reducers/auth';

test('Should set uid state for Login', () => {
  const uid = '123456';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});


test('Should return empty object for Logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
