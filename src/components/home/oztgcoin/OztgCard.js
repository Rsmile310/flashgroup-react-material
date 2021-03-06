import { Box } from "@mui/system";

export default function OztgCard() {
  return (
    <div className="card">
      <div className="top-data">
        <Box
          component="img"
          src="/assets/images/oztg_hexagon.svg"
          sx={{ background: "transparent !important" }}
        />
        <h3 className="crypto-name">OZTG</h3>
        <h4 className="crypto-price">
          $1.05<span className="positive">+0.20%</span>
        </h4>
      </div>
      <div className="chart">
        <Box component="img" src="/assets/images/chart.svg" />
      </div>
    </div>
  );
}
