import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import { Chart } from "react-google-charts";

export const Statistics = () =>{
    const data = [
        ["Cheveneta", "Hours per Day"],
        ["Manuel", 11],
        ["Amilcarneta", 2],
        ["Carlos y leo", 2],
        ["picheeell", 2],
        ["paletaa", 7],
      ];
    const options = {
        title: "Votaciones",
        backgroundColor: "#000",
        titleTextStyle: {
          color: 'white', 
        },
        legend: {
          textStyle: {
            color: '#fff',
          },
        },
      }
    return(
        <>
        <Navbar/>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        <Footer/>
        </>
    );
}