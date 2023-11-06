const pointGridFragmentShaders = `
void main(){
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = step(0.5, strength);
    strength = 1.0 - strength;
    gl_FragColor = vec4(0.0, 0.67 * strength, 1.0 * strength, 1.0);
}
`;
export default pointGridFragmentShaders;