export default Ember.Helper.helper(function (percent) {
  switch (percent) {
    case percent < 30:
      return 'progress-bar-danger';
      break;
    case percent > 30 && percent < 75:
      return 'progress-bar-warning';
      break;
    case percent > 75:
      return 'progress-bar-success';
      break;
    default:
      return 'progress-bar-primary';
  }
});
