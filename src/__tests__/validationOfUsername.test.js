import Validator from '../validation';

test('Ник записан по правилам', () => {
  const newUserName = new Validator('Max-im_us7B');
  const expected = newUserName.validateUserName();
  expect(expected).toBeTruthy();
});

test('Ник с недопустимыми символами', () => {
  const newUserName = new Validator('Mak$imus');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});


test('У ника цифры на конце', () => {
  const newUserName = new Validator('Maximus77');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});

test('У ника цифры в начале', () => {
  const newUserName = new Validator('77Maximus');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});

test('У ника символы в начале', () => {
  const newUserName = new Validator('-Maximus');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});

test('У ника символы в конце', () => {
  const newUserName = new Validator('Maximus__');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});

test('У ника более трех цифр подряд', () => {
  const newUserName = new Validator('Maxi7777mus');
  const expected = newUserName.validateUserName();
  expect(expected).toBeFalsy();
});
