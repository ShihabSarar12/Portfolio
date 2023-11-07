const pointGridVertexShader = /*glsl*/`
uniform float uTime;
void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float elevation = sin(modelPosition.x * 1.2 + uTime * 1.25) *
      sin(modelPosition.z * 1.2 + uTime * 1.25) *
      0.40;

    modelPosition.y = elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    gl_PointSize *= (1.0 / -(viewPosition.z)) * 12.5; 
    vec4 projectedMatrix = projectionMatrix * viewPosition;
    gl_Position = projectedMatrix;
}
`;

export default pointGridVertexShader;