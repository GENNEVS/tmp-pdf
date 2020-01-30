import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from "reactstrap";

class App extends React.Component {

  handlePrint =(e) =>{
    e.preventDefault();
   let input = document.getElementById("renderPDF");
    html2canvas(input)
      .then((canvas) => {
        let imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p');
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save( localStorage.getItem('reviewPolicy'));  
    });
  }
  render() {
    return (
      <div id="main">
        <div id="renderPDF">
          <h3>PDF</h3>
        </div>
        <Button 
          className="btn-round"
          color="info"
          style={{ float: "center" }}
          type="submit"
          onClick={this.handlePrint}>
          Print
        </Button>
      </div>
    );
  }
}

export default App;
