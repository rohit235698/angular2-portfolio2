$(document).ready(function () {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(100);

  var svgHeight = '400';
  var svgWidth = '100%';
  var barPadding = '3';

  /*var $container = $('#visualization'),
        svgWidth = $container.width(),
        svgHeight = $container.height();
*/
  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr("height", height).attr("width", width)
    .attr('viewBox','0 0 300 100');
  }

  var svg = createSvg('#visualization', svgHeight, svgWidth);

  // Create our initial D3 chart.
  svg.selectAll('rect')
     .data(frequencyData)
     .enter()
     .append('rect')
     .attr('x', function (d, i) {
        return i * (300 / frequencyData.length);
     })
     .attr('width', 500 / frequencyData.length - barPadding);

  // Continuously loop and update chart with frequency data.
  function renderChart() {
     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.
     svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
           return 200 - d;
        })
        .attr('height', function(d) {
           return d;
        })
        .attr('fill', function(d) {
          return 'rgb( 0 ,'+d+' , '+d+')';
        });
  }

  // Run the loop
  renderChart();

});