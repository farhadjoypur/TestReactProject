import React, { useRef, useState } from "react";
import CSVReader from "../UploadCSV/CSVReader";
import style from "./SecForm.module.css";
import { jsPDF } from "jspdf";
import LineCharts from "../LineChart/LineChart";


const SecondForm = ({data}) => {
    const [ cSVdata, setCSVdata ] = useState([]);
    const inputEl = useRef(null);
    let Xheight;
    let Xlowest;
    let yheight;
    let ylowest;
    let zheight;
    let zlowest;



    // const sumofsth = datas.reduce(
    //     (previousValue, currentValue) => previousValue + Number(currentValue.eth_price), 0);

    if(cSVdata.data){
        const numLength = Number(cSVdata.data.length -1);
        const xheightNum = cSVdata.data.slice(1, numLength).map(num => Number(num[1]))
        Xheight = Math.max(...xheightNum);
        Xlowest = Math.min(...xheightNum);

        const yheightNum = cSVdata.data.slice(1, numLength).map(num => Number(num[2]))
        yheight = Math.max(...yheightNum);
        ylowest = Math.min(...yheightNum);

        const zheightNum = cSVdata.data.slice(1, numLength).map(num => Number(num[3]))
        zheight = Math.max(...zheightNum);
        zlowest = Math.min(...zheightNum);

    }
    const generatePDF = () => {
        const doc = new jsPDF("p", "pt", "a4");
        doc.html(inputEl.current, {
            callback: function(pdf){
                pdf.save("mypdf.pdf")
            }
        })
    }

    
    
  return (
    <div className={`${style.parent_container} container`}>
        <div ref={inputEl} className={style.child_container}>
           {/* <h4><span>Project Name: </span> {data.projectName}</h4>
           <h4><span>Project Description: </span>{data.projectDescription}</h4>
           <h4><span>Client: </span>{data.client}</h4>
           <h4><span>Contractor: </span>{data.contractor}</h4> */}
            <table className={style.styled_table}>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Project Description</th>
                    <th>Client</th>
                    <th>Contractor</th>
                </tr>
            </thead>
            <tbody>
                <tr className={style.active_row}>
                    <td>{data.projectName}</td>
                    <td>{data.projectDescription}</td>
                    <td>{data.client}</td>
                    <td>{data.contractor}</td>
                </tr>
            </tbody>
        </table>


            <div>
                <CSVReader cSVdata={cSVdata} setCSVdata={setCSVdata} />
            </div>
            {/* <div>
                
                    
                    { cSVdata.length === 0 ?
                    <></> :
                    cSVdata.data.slice(0,4).map((data, index) => (
                            <div key={index}>
                                <table className={style.styled_table}>
                                    <tbody>
                                        <tr className={style.active_row}>
                                            <td>{data[0]}</td>
                                            <td>{data[1]}</td>
                                            <td>{data[2]}</td>
                                            <td>{data[3]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                
            </div> */}
            <table className={style.styled_table}>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>Z</th>
                </tr>
            </thead>
            <tbody>
                <tr className={style.active_row}>
                    <td>Height</td>
                    <td>{Xheight}</td>
                    <td>{yheight}</td>
                    <td>{zheight}</td>
                </tr>
                <tr className={style.active_row}>
                    <td>Lowest</td>
                    <td>{Xlowest}</td>
                    <td>{ylowest}</td>
                    <td>{zlowest}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={generatePDF}>Generate PDF</button>

        </div>
        <div className={style.chart_div}>
        {cSVdata.length === 0 ?
                    <></> :
            <LineCharts cSVdata={cSVdata} />
            }
        </div>
        
     

        
    </div>
  )
}

export default SecondForm