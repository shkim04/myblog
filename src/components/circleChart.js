import React, { Component } from 'react';
import fetch from 'cross-fetch'
import * as d3 from 'd3';
import './circleChart.css';

export default class CircleChart extends Component{
    componentDidMount() {
        let API = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
      
        fetch(API)
        .then(response => response.json())
        .then(data => {
            this.circleChart(data)
        })  
    }
   
    circleChart(dataset) {
        const canvasWidth = 600;
        const canvasHeight = 400;
        const paddingLeft = 70;
        const paddingRight = 40, paddingTop = 5, paddingBottom = 20;
      
      
        const tooltip = d3.select(this.canvas)
                          .append('div')
                          .attr('id', 'tooltip')
                          .style('opacity', 0)
                             
      
        const svgCanvas = d3.select(this.canvas)
                            .append('svg')
                            .attr("preserveAspectRatio", "xMinYMin meet")
                            .attr('viewBox', '0 0 ' + canvasWidth + ' ' + canvasHeight)
      
        svgCanvas.append('text')
                 .attr('transform', 'rotate(-90)')
                 .attr('x', -180)
                 .attr('y', 20)
                 .attr('font-family', 'sans-serif')
                 .text('Time in Minutes');
     
        let color = d3.scaleOrdinal(d3.schemeCategory10);
      
        let timeFormat = d3.timeFormat('%M:%S');
      
        let yearDate = dataset.map(d => new Date(d.Year.toString()))
        let yearMin = new Date(d3.min(yearDate))
        let yearMax = new Date(d3.max(yearDate))
        
        yearMin.setFullYear(yearMin.getFullYear() - 1)
        yearMax.setFullYear(yearMax.getFullYear() + 1)
      
        let time = dataset.map(d => {
            let parsedTime = d.Time.split(':');
            return new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1])
        })
      
        const xScale = d3.scaleTime()
                         .domain([yearMin, yearMax])
                         .range([paddingLeft, canvasWidth - paddingRight])
      
        const yScale = d3.scaleTime()
                         .domain([d3.min(time), d3.max(time)])
                         .range([paddingTop, canvasHeight - paddingBottom])  
                      
      
        const xAxis = d3.axisBottom(xScale);
      
        const yAxis = d3.axisLeft(yScale)
                        .tickFormat(d => timeFormat(d));
      
        svgCanvas.selectAll('.dot')
                 .data(dataset)
                 .enter()
                    .append('circle')
                    .attr('class', 'dot')
                    .attr('data-xvalue', (d, i) => yearDate[i])
                    .attr('data-yvalue', (d, i) => time[i])
                    .attr('cx', (d, i) => xScale(yearDate[i]))
                    .attr('cy', (d, i) => yScale(time[i]))
                    .attr('r', d => 5)
                    .style('fill', (d, i) => color(d.Doping !== ''))
                    .on('mouseover', (d, i) => {
                        const svgDim = svgCanvas.node().getBoundingClientRect();
                        
                        tooltip.transition()
                               .duration(0)
                               .style('opacity', 1)
                        tooltip.html(`${i.Name} : ${i.Nationality}<br>Year : ${i.Year}<br>Time : ${i.Time}` + (!i.Doping ? '<br><br>' + i.Doping : ''))
                               .style('right', (90 * (svgDim.width/canvasWidth)) + 'px')
                               .style('top',  (5 *(svgDim.height/canvasHeight)) + 'px')
                               .style('transform', 'translateX(70px)')
                               .style('background-color', color(i.Doping !== ''))
                               .style('width', (150 * (svgDim.width/canvasWidth))+ 'px')
                               .style('height', (100 * (svgDim.width/canvasWidth))+ 'px')
                               .style('font-size', (12 * (svgDim.width/canvasWidth))+ 'px')
                               .attr('data-year', yearDate[i])
                        })
                    .on('mouseout', (d, i) => {
                        tooltip.transition()
                               .duration(0)
                               .style('opacity', 0)
                    })
                    
        svgCanvas.append("g")
                 .attr("transform", "translate(0," + (canvasHeight - paddingBottom) + ")")   
                 .attr('id', 'x-axis')
                 .call(xAxis)
     
        svgCanvas.append('g')
                 .attr("transform", "translate(" + paddingLeft + ",0)")
                 .attr('id', 'y-axis')
                 .call(yAxis)
      
        let legend = svgCanvas.selectAll('.legend')
                              .data(color.domain())
                              .enter()
                                .append('g')
                                .attr('class', 'legend')
                                .attr('id', 'legend')
                                .attr('transform', (d, i) => {
                                    return "translate(0," + (canvasHeight/2 - i * 20) + ")";
                                });
  
        legend.append('rect')
                .attr('x', canvasWidth - 50)
                .attr('width', 14)
                .attr('height', 14)
                .style('fill', color);
    
        legend.append('text')
                .attr('x', canvasWidth - 55)
                .attr('y', 9)
                .attr('dy', '.15em')
                .attr('font-size', '11px')
                .style('text-anchor', 'end')
                .text(d => {
                    if (d) return "Riders with doping allegations";
                    else {
                        return "No doping allegations";
                    };
                });
    }
  
    
    render() {
        return (
            <div id='circle-chart' className='clearfix'>
                <h3 className='sub-title'># Circle Chart</h3>
                <div className='circle-chart-box'>
                    <div className='main-canvas' ref={canvas => this.canvas = canvas} />
                </div>
                <div className='description-chart'>
                    This is what I did on <a href='http://www.freecodecamp.org' className='freecodecamp'><i>freecodecamp.org</i></a> as well.
                    This is also the last one I had worked on with freecodecamp before starting 
                    building this blog. I think D3 is very powerful and good for visualization.
                </div>
            </div>
        )
   }  
}