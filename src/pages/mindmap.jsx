import Highcharts from 'highcharts';
import HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
import HighchartsReact from 'highcharts-react-official';
import dictionary from '../terms.json';

HighchartsNetworkgraph(Highcharts);

export default function Mindmap() {
  const data = [];
  for (const term of dictionary) {
    for (const related of term.related) {
      const relatedTerm = dictionary.find((term) => term.id === related);

      if (relatedTerm) {
        data.push([term.title, relatedTerm.title]);
      }
    }
  }

  const options = {
    chart: {
      type: 'networkgraph',
      marginTop: 80
    },
    title: {
      text: 'Mindmap'
    },
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to']
      }
    },
    series: [
      {
        marker: {
          radius: 30
        },
        dataLabels: {
          enabled: true,
          linkFormat: '',
          allowOverlap: true
        },
        data
      }
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
