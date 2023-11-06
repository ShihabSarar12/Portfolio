const pointGridVertexShader = `
uniform float time;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float elevation = sin(modelPosition.x * 1.2 + time * 1.25) *
                      sin(modelPosition.z * 1.2 + time * 1.25) *
                      0.33;
    modelPosition.y = elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}
`;

export default pointGridVertexShader;