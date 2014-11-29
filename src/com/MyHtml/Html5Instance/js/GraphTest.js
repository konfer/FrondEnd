$(document).ready(function(){
    var bar=new RGraph.Bar('test',[50,25,15,10]);
    bar.Set('chart.gutter',50);
    bar.Set('chart.colors',['red']);
    bar.Set('chart.title',"A bar graph of my favorite pies");
    bar.Set('chart.labels',["Banana Creme","Pumpkin","Apple","cherry"]);
    bar.Draw();
});