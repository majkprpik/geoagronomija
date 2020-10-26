import React from 'react';
import logo from './logo.svg';
import './App.css';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import useSwr from 'swr';
// var dataFromFile = require('./assets/csvjson.json');

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

export default App;

const mapStyles = [
  {
    id: 'my_dark_map',
    label: 'Dark Streets 9',
    url: '  ',
    // icon: `${apiHost}/styles/v1/mapbox/dark-v9/static/-122.3391,37.7922,9.19,0,0/400x300?access_token=${accessToken}&logo=false&attribution=false`,
    layerGroups: [
      {
        slug: 'label',
        filter: ({id}) => id.match(/(?=(label|place-|poi-))/),
        defaultVisibility: true
      },
      {
        // adding this will keep the 3d building option
        slug: '3d building',
        filter: () => false,
        defaultVisibility: false
      }
    ]
  }
];

// function Map() {
//   const dispatch = useDispatch();
//   const { data } = useSwr("covid", async () => {
//     const response = await fetch(
//       "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json"
//     );
//     const data = await response.json();
//     return data;
//   });

//   React.useEffect(() => {
//     if (data) {
//       dispatch(
//         addDataToMap({
//           datasets: {
//             info: {
//               label: "COVID-19",
//               id: "covid19"
//             },
//             data
//           },
//           option: {
//             centerMap: true,
//             readOnly: false
//           },
//           config: {}
//         })
//       );
//     }
//   }, [dispatch, data]);

//   return (
//     <KeplerGl
//       id="covid"
//       mapboxApiAccessToken="pk.eyJ1IjoibWFqa3BycGlrIiwiYSI6ImNrZjVjY3dyZjBnYWwzNGxjdmw5dzJ3aDUifQ.oBf2k60mDsm_9kiYn76cFw"
//       width={window.innerWidth}
//       height={window.innerHeight}
//     />
//   );
// }


function Map() {
  const dispatch = useDispatch();
  const {data} = useSwr("covid", async () => {
    const response = await fetch(
        "https://gist.githubusercontent.com/majkprpik/7b597d93ec2564850e674d115a5acde2/raw/5a9e3641d55ef11bf376f77bce5ad5f3ea8892a7/test55.json"
    );
    const data = await response.json();
    let myData = {
      fields: [
        ...data.datasets[0].data.fields
      ],
      rows: [
        ...data.datasets[0].data.allData
      ]
    }
    return myData;
  })

  console.log(data);

  React.useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: 'nesto nesto nesto',
              id: 'test_data',              
            },
            data,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: {
            "version": "v1",
            "config": {
              "visState": {
                "filters": [],
                "layers": [
                  {
                    "id": "pk0cd8p",
                    "type": "geojson",
                    "config": {
                      "dataId": "bwb5szh2d",
                      "label": "zito",
                      "color": [
                        130,
                        154,
                        227
                      ],
                      "columns": {
                        "geojson": "_geojson"
                      },
                      "isVisible": true,
                      "visConfig": {
                        "opacity": 0.8,
                        "strokeOpacity": 0.8,
                        "thickness": 0.5,
                        "strokeColor": [
                          231,
                          159,
                          213
                        ],
                        "colorRange": {
                          "name": "Global Warming",
                          "type": "sequential",
                          "category": "Uber",
                          "colors": [
                            "#5A1846",
                            "#900C3F",
                            "#C70039",
                            "#E3611C",
                            "#F1920E",
                            "#FFC300"
                          ]
                        },
                        "strokeColorRange": {
                          "name": "Global Warming",
                          "type": "sequential",
                          "category": "Uber",
                          "colors": [
                            "#5A1846",
                            "#900C3F",
                            "#C70039",
                            "#E3611C",
                            "#F1920E",
                            "#FFC300"
                          ]
                        },
                        "radius": 10,
                        "sizeRange": [
                          0,
                          10
                        ],
                        "radiusRange": [
                          0,
                          50
                        ],
                        "heightRange": [
                          0,
                          500
                        ],
                        "elevationScale": 5,
                        "stroked": true,
                        "filled": true,
                        "enable3d": false,
                        "wireframe": false
                      },
                      "hidden": false,
                      "textLabel": [
                        {
                          "field": null,
                          "color": [
                            255,
                            255,
                            255
                          ],
                          "size": 18,
                          "offset": [
                            0,
                            0
                          ],
                          "anchor": "start",
                          "alignment": "center"
                        }
                      ]
                    },
                    "visualChannels": {
                      "colorField": null,
                      "colorScale": "quantile",
                      "sizeField": null,
                      "sizeScale": "linear",
                      "strokeColorField": null,
                      "strokeColorScale": "quantile",
                      "heightField": null,
                      "heightScale": "linear",
                      "radiusField": null,
                      "radiusScale": "linear"
                    }
                  }
                ],
                "interactionConfig": {
                  "tooltip": {
                    "fieldsToShow": {
                      "bwb5szh2d": [
                        {
                          "name": "ID",
                          "format": null
                        },
                        {
                          "name": "FARM_ID",
                          "format": null
                        },
                        {
                          "name": "LAND_USE_I",
                          "format": null
                        },
                        {
                          "name": "SHORT_DESC",
                          "format": null
                        },
                        {
                          "name": "HOME_NAME",
                          "format": null
                        }
                      ]
                    },
                    "compareMode": false,
                    "compareType": "absolute",
                    "enabled": true
                  },
                  "brush": {
                    "size": 0.5,
                    "enabled": false
                  },
                  "geocoder": {
                    "enabled": false
                  },
                  "coordinate": {
                    "enabled": false
                  }
                },
                "layerBlending": "normal",
                "splitMaps": [],
                "animationConfig": {
                  "currentTime": null,
                  "speed": 1
                }
              },
              "mapState": {
                "bearing": 0,
                "dragRotate": false,
                "latitude": 45.50258081354038,
                "longitude": 18.568711283666378,
                "pitch": 0,
                "zoom": 11,
                "isSplit": false
              },
              "mapStyle": {
                "styleType": "dark",
                "topLayerGroups": {},
                "visibleLayerGroups": {
                  "label": true,
                  "road": true,
                  "border": false,
                  "building": true,
                  "water": true,
                  "land": true,
                  "3d building": false
                },
                "threeDBuildingColor": [
                  9.665468314072013,
                  17.18305478057247,
                  31.1442867897876
                ],
                "mapStyles": {}
              }
            }
          },
        })
      );
    }
  }, [dispatch, data]);

  

  return (
    <KeplerGl
      id="croatia"
      mapboxApiAccessToken="pk.eyJ1IjoibWFqa3BycGlrIiwiYSI6ImNrZjVjY3dyZjBnYWwzNGxjdmw5dzJ3aDUifQ.oBf2k60mDsm_9kiYn76cFw"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
