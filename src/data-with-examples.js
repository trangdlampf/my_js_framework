export const EXAMPLES = {
  dashboard: {
    title: 'React Component',
    link: `http://trangdoanlam.com/portfolio/animalcrossing/build/index.html`,
    description:
      'As building blocks for React, a component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
      export default function MyApp(props) {
        return (
          <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </li>
        );
      } 
    `,
  },
  map: {
    title: 'Map Projection',
    link: `http://trangdoanlam.com/portfolio/d3mapFrance.html`,
    description:
      'D3.js is a Mapping Library that creates maps using projects and other mapping attributes and features.',
    code: `
      var projection = d3.geo.mercator() 
        .scale(3610) 
        .rotate([-2.8, -46.6, 0]) 
        .translate([mapWidth/2, mapHeight/2]);
    `,
  },
  vanilla: {
    title: 'Vanilla JavaScript',
    link: `http://trangdoanlam.com/portfolio/vue_stickyAnimation.html`,
    description:
      'Plain vanilla JavaScript can be used to create a To-Do List.',
    code: `
      checkTask: function(e){
        const taskElement = e.target.parentNode
        taskElement.classList.toggle('checked')
      }
    `,
  },
  weather: {
    title: 'Weather API Call',
    link: `http://trangdoanlam.com/portfolio/writings/index_weatherApp.html`,
    description:
      'Using APIs like the Weather API allows you to get the weather of specific cities.',
    code: `
      const cityDetails = data.cityDetails;
      int fahrenheitConvert = ((weather.main.temp - 273.15) * 9/5) + 32;
      let celsiusConvert = Math.round(cityDetails.main.temp - 273.15);
    `,
  },
  lidar: {
    title: 'LiDAR 3D',
    link: `http://trangdoanlam.com/portfolio/Lidar_Demo.html`,
    description:
      'Using Light Detection and Range (LiDAR), 3D, and OpenTopography API to show geometric shapes.',
    code: `
      point_data = np.stack([las.X, las.Y, las.Z], axis=0).transpose((1, 0))
      geom = o3d.geometry.PointCloud()
      geom.points = o3d.utility.Vector3dVector(point_data)
      o3d.visualization.draw_geometries([geom])
    `,
  },
};