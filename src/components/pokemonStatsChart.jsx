import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  return <rect x={x} y={y} width={width} height={height} fill={fill} />;
};

const PokemonStatsChart = ({ stats }) => {

  const getBarColor = (value) => {
    if (value < 30) return "#f34444"; 
    if (value < 60) return "#ff7f0f";
    if (value < 80) return "#ffdd57";
    if (value < 120) return "#a0e515";
    return "#23cd5e";
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={stats} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis type="number" domain={[0, 255]} ticks={[0, 50, 100, 150, 200, 255]}/>
        <YAxis dataKey="name" type="category" width={57} />
        <Tooltip />
        <Bar 
          dataKey="value" 
          shape={(props) => {
            const color = getBarColor(props.payload.value);
            return <CustomBar {...props} fill={color} />;
          }} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PokemonStatsChart;
