import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import {
    DirectionalLightHelper,
    HemisphereLightHelper,
    PointLightHelper,
    SpotLightHelper,
} from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
function Light({ type }) {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const rectAreaLightRef = useRef();
  const spotLightRef = useRef();
  const helper = () => {
    switch (type) {
      case "directionalLight":
        return useHelper(directionalLightRef, DirectionalLightHelper, 1);
      case "hemisphereLight":
        return useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
      case "pointLight":
        return useHelper(pointLightRef, PointLightHelper, 1);
      case "rectAreaLight":
        return useHelper(rectAreaLightRef, RectAreaLightHelper, 1);
      case "spotLight":
        return useHelper(spotLightRef, SpotLightHelper, 1);

      default:
        return null;
    }
  };
  helper();
  return (
    <>
      {(() => {
        switch (type) {
          case "directionalLight":
            return (
              <directionalLight
                castShadow
                ref={directionalLightRef}
                intensity={1.5}
                position={[0, 5, -2]}
              />
            );
          case "hemisphereLight":
            return (
              <hemisphereLight
                ref={hemisphereLightRef}
                intensity={1.5}
                position={[0, 5, 2]}
              />
            );
          case "pointLight":
            return (
              <pointLight
                castShadow
                ref={pointLightRef}
                intensity={1.5}
                position={[0, 5, -2]}
              />
            );
          case "rectAreaLight":
            return (
              <rectAreaLight
                ref={rectAreaLightRef}
                intensity={1.5}
                position={[0, 5, 2]}
              />
            );
          case "spotLight":
            return (
              <spotLight
                castShadow
                ref={spotLightRef}
                intensity={1.5}
                position={[0, 5, -2]}
              />
            );

          default:
            return <></>;
        }
      })()}
    </>
  );
}

export default Light;
