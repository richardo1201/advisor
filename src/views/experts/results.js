import React from 'react'
import CanvasJSReact from './canvasjs.react'
import Header from "../../components/Headers/Header";
import {Card, CardBody, CardHeader, Container, Row} from "reactstrap";

class ResultsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inCF: this.props.location.state.inCF,
            exCF: this.props.location.state.exCF,
            senCF: this.props.location.state.senCF,
            intCF: this.props.location.state.intCF,
            thinCF: this.props.location.state.thinCF,
            feeCF: this.props.location.state.feeCF,
            perCF: this.props.location.state.perCF,
            judCF: this.props.location.state.judCF,
            types: require('./hasil_prediksi.json')
        }
    }



    showPersonality = () => {
        let res = "";
        if (this.state.inCF > this.state.exCF) res += "I";
        else res += "E";
        if (this.state.senCF > this.state.intCF) res += "S";
        else res += "N";
        if(this.state.thinCF > this.state.feeCF) res+= "T";
        else res += "F";
        if(this.state.perCF > this.state.judCF) res+= "P";
        else res+="J";
        return res;
    }

    render() {
        const InExOptions = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title:{
                text: "Extrovert vs Introvert"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.inCF, label: "Introvert" },
                    { y: this.state.exCF, label: "Extrovert" }
                ]
            }]
        };
        const SenIntOptions = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title:{
                text: "Sensing vs Intuition"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.senCF, label: "Sensing" },
                    { y: this.state.intCF, label: "Intuition" }
                ]
            }]
        };
        const FeeThinfOptions = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1",
            title:{
                text: "Thinking vs Feeling"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.thinCF, label: "Thinking" },
                    { y: this.state.feeCF, label: "Feeling" }
                ]
            }]
        };
        const PerfJudOptions =  {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1",
            title:{
                text: "Perceiving vs Judging"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.state.perCF, label: "Perceiving" },
                    { y: this.state.judCF, label: "Judging" }
                ]
            }]
        };

        let imageToPlace;

        let types = this.state.types.filter(tipe=>tipe.tipe == "ESTJ");
        console.log(types['deskripsi']);
        if(this.showPersonality() == "ESTJ"||
            this.showPersonality() == "ISTJ"||
            this.showPersonality() == "ESTP"||
            this.showPersonality() == "ISTP"){
            imageToPlace = <img src={window.location.origin+"/pragmatis.jpg"}/>;
        }else if(this.showPersonality() == "ENFJ"||
            this.showPersonality() == "INFJ" ||
            this.showPersonality() == "ENFP"||
            this.showPersonality() == "INFP"){
            imageToPlace = <img src={window.location.origin+"/empaths.jpg"}/>
        }else if(this.showPersonality() == "ESFJ" ||
            this.showPersonality() == "ISFJ" ||
            this.showPersonality() == "ESFP" ||
            this.showPersonality() == "ISFP"){
            imageToPlace = <img src={window.location.origin+"/caretakers.jpg"}/>
        }else if(this.showPersonality() == "ENTJ" ||
            this.showPersonality() == "INTJ" ||
            this.showPersonality() == "ENTP" ||
            this.showPersonality() == "INTP"){
            imageToPlace = <img src={window.location.origin+"/theorist.jpg"}/>
        }

        return(
            <>
                <Header quotes={"Our System is Indicates You"}/>
                <Container className=" mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className=" col">
                            <Card className=" shadow">
                                <CardBody>
                                    <div style={{backgroundColor: "white"}} className={"p-4"}>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <CanvasJSReact.CanvasJSChart options={InExOptions}/>
                                            </div>
                                            <div className={"col-6"}>
                                                <CanvasJSReact.CanvasJSChart options={SenIntOptions}/>
                                            </div>
                                        </div>
                                        <div className={"row mt-3"}>
                                            <div className={"col-6"}>
                                                <CanvasJSReact.CanvasJSChart options={FeeThinfOptions}/>
                                            </div>
                                            <div className={"col-6"}>
                                                <CanvasJSReact.CanvasJSChart options={PerfJudOptions}/>
                                            </div>
                                        </div>

                                        <div className={"d-flex mt-3"}>
                                            <div className={"mx-auto text-center"}>
                                                <h1>Kepribadian Mu adalah Tipe</h1>
                                                <h2 style={{fontSize: 32}} className={"text-weight-bold"}>{this.showPersonality()}</h2>
                                                {imageToPlace}
                                                <Card>
                                                    <CardBody>
                                                        <div>
                                                            <h4>TEst tsts</h4>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>

        )
    }
}

export default ResultsComponent;