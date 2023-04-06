import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState } from "react";
import Door from "./Door";
import Floor from "./Floor";
import Light from "./Light";

export default function Experience() {
  const PATH = "/static/textures/door/";
  const [typeLight, setTypeLight] = useState("directionalLight");
  const props = useTexture({
    map: PATH + "metallic.jpg",
  });
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Light type={typeLight} />
      <ambientLight />

      <mesh castShadow scale={0.5} position={[0, 0, -1]}>
        <sphereGeometry />
        <meshStandardMaterial {...props} />
      </mesh>

      <Door />
      <Floor />
      <Html position={[1.5, 0, -3]}>
        <div style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Select the light type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeLight}
              onChange={(event) => {
                setTypeLight(event.target.value);
              }}
            >
              <MenuItem value={"directionalLight"}>DirectionalLight</MenuItem>
              <MenuItem value={"hemisphereLight"}>HemisphereLight</MenuItem>
              <MenuItem value={"pointLight"}>PointLight</MenuItem>
              <MenuItem value={"rectAreaLight"}>RectAreaLight</MenuItem>
              <MenuItem value={"spotLight"}>SpotLight</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Html>
    </>
  );
}
