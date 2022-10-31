export function validateForm(name: string, value: string) {
  let err = '';
  switch (name) {
    case 'name':
      if (!value) {
        err = 'Name cannot be empty';
      } else if (!value.match(/^[а-яё]{3,50}|[a-z]{3,50}$/iu)) {
        err = 'This name must be from 3 to 50 of alphabetical characters only!';
      } else err = '';
      break;
    case 'birth':
    case 'death':
    case 'spouse':
    case 'realm':
    case 'hair':
    case 'heiht':
      if (!value) {
        err = 'Name cannot be empty';
      } else err = '';
      break;
    case 'wikiURL':
      if (!value) {
        err = 'Name cannot be empty';
      } else if (!value.match(/^https?:\/\/\S+$/i)) {
        err = 'WikiUrl must contain https://...!';
      } else err = '';
      break;
    default:
      err = '';
  }
  return err;
}
