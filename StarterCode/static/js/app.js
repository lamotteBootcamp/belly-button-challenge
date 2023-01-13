// Establishing url
function optionChanged(selectedID) {
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    //Read the data from url
    d3.json(url).then(function(data) {
    //Extract data for plotting
    let samples = data.samples;
// Filter the data for the selected ID
    let sampleArray = samples.filter(sampleObject => sampleObject.id == selectedID);
    let sampleResult = sampleArray[0];
    let otu_Ids = sampleResult.otu_ids;
    let otu_Labels = sampleResult.otu_labels;
    let sampleValues = sampleResult.sample_values;


    });

};
function bar_chart(otu_Ids){
    let bar_info = [
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation:"h",
        },
      ];
    
      let bar_Layout = {
        margin: { t: 25, l: 125 }
      };
    
      Plotly.newPlot("bar", bar_info, bar_Layout);
    };









init();
