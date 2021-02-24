import { useEffect, useRef } from 'react'

export default function PotreeComponent () {
  // const ref = useRef()
      
  const Potree = window.Potree
  const THREE = window.THREE
  const TWEEN = window.TWEEN

  useEffect(() => {
    // const viewerElement = ref.current
    const viewerElement = document.getElementById("potree_render_area")
    const viewer = new Potree.Viewer(viewerElement)
  
    viewer.setEDLEnabled(false);
    viewer.setFOV(60);
    viewer.setPointBudget(1_000_000);
    // viewer.setClipTask(Potree.ClipTask.SHOW_INSIDE);
    viewer.loadSettingsFromURL();
    viewer.setBackground("skybox");
  
    viewer.setDescription("Spybee Project");
  
    // viewer.setControls( viewer.earthControls ) 

    viewer.loadGUI(() => {
        viewer.setLanguage('en');
        $("#menu_tools").next().show();
        $("#menu_clipping").next().show();
        viewer.toggleSidebar();
    });
  
  
    // Load and add point cloud to scene
    // const url1 = "./pointclouds/vol_total/cloud.js"
    // Potree.loadPointCloud(url1, "sigeom.sa").then(event => {
    //   console.log('1', event)

    //   let scene = viewer.scene;
    //   let pointcloud = event.pointcloud;

    //   let material = pointcloud.material;
    //   // material.activeAttributeName = "rgba";
    //   material.size = 1;
    //   // material.minSize = 2;
    //   material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
    //   // material.pointSizeType = Potree.PointSizeType.FIXED;
    //   material.shape = Potree.PointShape.SQUARE;

    //   scene.addPointCloud(pointcloud);

    //   viewer.fitToScreen();
    //   // scene.view.setView(
    //   // 	[589974.341, 231698.397, 986.146],
    //   // 	[589851.587, 231428.213, 715.634],
    //   // );

    //   console.log(scene, material)
    // }).catch(err => console.error('1 Error: ', err))

    const url2 = "./pointclouds/lion_takanawa_normals/cloud.js"
    Potree.loadPointCloud(url2, "lion").then(event => {
      console.log('2', event)

      let scene = viewer.scene;
      let pointcloud = event.pointcloud;

      let material = pointcloud.material;
      // material.activeAttributeName = "rgba";
      material.size = 1;
      // material.minSize = 2;
      material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
      // material.pointSizeType = Potree.PointSizeType.FIXED;
      material.shape = Potree.PointShape.SQUARE;

      scene.addPointCloud(pointcloud);

      viewer.fitToScreen();
      // scene.view.setView(
      // 	[589974.341, 231698.397, 986.146],
      // 	[589851.587, 231428.213, 715.634],
      // );

      console.log(scene, material)
      setRender(true)
    }).catch(err => console.error('2 Error: ', err))
  }, [Potree, THREE, TWEEN]);

  return (null
    // <div style={{
    //   position: 'relative',
    //   height: '50rem',
    //   width: '100%'
    // }}>
    //   <div 
    //     id="potree-root" 
    //     className="potree_container"
        
    //     style={{
    //       position: "absolute", width: "100%", height: "100%", left: "0px", top: "0px"
    //     }}>

    //     <div 
    //       id="potree_render_area" 
    //       // ref={ref}
    //       style={{ 
    //         backgroundImage: "url('./potree-build/potree/resources/images/background.jpg')"
    //       }} 
    //     />

    //     <div id="potree_sidebar_container" />
    //   </div>
    // </div>
  )
}