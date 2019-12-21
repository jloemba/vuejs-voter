<!--

Links:
  Object attr: https://www.w3schools.com/xml/dom_attribute.asp
  Scopes css: https://github.com/vuejs/vue-loader/blob/master/docs/en/features/scoped-css.md
  .vue files: https://vuejs.org/v2/guide/single-file-components.html
  D3.append: https://github.com/d3/d3-selection/blob/master/src/selection/index.js
  Installation of SASS tutorial: https://www.youtube.com/watch?v=fIpLr04f8Ms
  SASS: http://sass-lang.com/guide

-->

<template> 
          <svg width="500" height="300"></svg>
</template>

<script>
import * as d3 from "d3";


export default {
  name:"Chart",
  props:{
    artists: {
        type: Array
    }
  },
  mounted: function() {
      //console.log(this.artists)

    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');

    var metricsA = this.artists.filter(el => el === "POUR").length; 

    var metricsB = this.artists.filter(el => el === "CONTRE").length;


    var data = [
      {name: 'one', val: metricsA },
      {name: 'two', val: metricsB},
    ];

    var x = d3.scaleBand()
      .rangeRound([0, width]).padding(0.1)
      .domain(data.map(d => d.name));
    var y = d3.scaleLinear()
      .rangeRound([height * 0.3 - 20, 0])
      .domain([0, d3.max(data, d => d.val)])

    function addRectsWithName(elem, name) {
      elem
        .append('text')
        .text(name)
        .attr('x', width / 2)
        .attr('y', 5)
        .attr('text-anchor', 'middle');
      elem.selectAll('rect')
        .data(data)
        .enter()
          .append('rect')
          // We add attr here
          .attr('x', d => x(d.name))
          .attr('class', d => d.name)
          .attr('y', d =>  y(d.val))
          .attr('width', x.bandwidth())
          .attr('height', d => y.range()[0] - y(d.val))
    }


    svg
      .append('g')
      .attr('id', 'bars-style')
      .attr('transform', `translate(0, 20)`)
      .call(addRectsWithName, '');


  }
}
</script>

<style>
#bars-style .one {
  fill: #ffc300
}
#bars-style .two {
  fill: #c70039
}


</style>

<style scoped>
.one {
  fill: #154890
}
.two {
  fill: #e1d4c0
}

</style>
