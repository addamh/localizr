export default Ember.Component.extend({
  content: null,
  init: function() {
    this._super();
  },
  didInsertElement: function() {
    this._super();
    this.draw();
  },
  contentDidChange: Ember.observer('content', function() {
    this.clean();
    this.draw();
  }),
  draw: function() {
    var content = this.get('content'),
      title = this.get('title'),
      series_name = this.get('series_name'),
      height = this.get('height'),
      self = this,
      elementId = this.get('elementId');

    var doughnutData = [{
      value: this.get('percent'),
      color: "#a3e1d4",
      highlight: "#1ab394",
      label: "Complete"
    }, {
      value: (100 - this.get('percent')),
      color: "#dedede",
      highlight: "#1ab394",
      label: "Incomplete"
    }];

    var doughnutOptions = {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 45, // This is 0 for Pie charts
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true
    };

    Chart.defaults.global.tooltipTemplate =
      "<%=label%>: <%= value %>%"
    ;

    var ctx = document.getElementById(elementId).getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
  },
  clean: function() {
    $(this.get('element')).empty();
  }
});
