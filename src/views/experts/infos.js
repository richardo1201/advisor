import React from 'react'
import Header from "../../components/Headers/Header";
import {Card, CardBody, Row} from "reactstrap";

class InfosComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            personType: this.props.location.state.personType,
            datas: require("./hasil_prediksi"),
            title: "",
            description: "",
            jobs: [],
            tend: [],
            balancer: [],
            lead: [],
            effector: [],
            contribute: []
        }

        console.log(this.props.location.state.personType);
    }

    loadData = () =>{
        let dataToLoad = this.state.datas.filter(type => type.tipe == this.state.personType);
        console.log(dataToLoad[0]);
        this.setState({
            title: dataToLoad[0].tipe,
            description :dataToLoad[0].deskripsi,
            jobs: dataToLoad[0].bidang_karir,
            tend: dataToLoad[0].kecenderungan,
            balancer: dataToLoad[0].penyeimbang,
            lead: dataToLoad[0].cara_memimpin,
            effector: dataToLoad[0].cara_mempengaruhi,
            contribute: dataToLoad[0].kontribusi
        });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return(
            <>
                <Header quotes={"Informasi Mengenai Kepribadian "+this.state.personType}/>
                <Row>
                    <div className=" col">
                        <Card className=" shadow">
                            <CardBody>
                                <div className={"container bg-gradient-primary rounded p-3"} style={{color:"white"}}>
                                    <h1 style={{color: "white"}} className={"text-center"}>Apa itu {this.state.personType}</h1>
                                    <div className={"text-center"}>{this.state.description}</div>
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Jenis Pekerjaan Yang Cocok untuk Kepribadian itu Yakni</h1>
                                    {this.state.jobs.map((value, index)=>{
                                        return(<div>
                                           <li>{value}</li>
                                        </div>);
                                    })}
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Kecenderunagn orang ini meliputi</h1>
                                    {this.state.tend.map((value, index)=>{
                                        return(<div>
                                            <li>{value}</li>
                                        </div>);
                                    })}
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Orang ini lebih seimbang bila mereka</h1>
                                    {this.state.balancer.map((value, index)=>{
                                        return(<div>
                                            <li>{value}</li>
                                        </div>);
                                    })}
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Memimpin dengan cara</h1>
                                    {this.state.lead.map((value, index)=>{
                                        return(<div>
                                            <li>{value}</li>
                                        </div>);
                                    })}
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Mempengaruhi anggota tim dengan</h1>
                                    {this.state.effector.map((value, index)=>{
                                        return(<div>
                                            <li>{value}</li>
                                        </div>);
                                    })}
                                    <h1 style={{color: "white"}} className={"mt-3 text-center"}>Memberi Kontribusi dengan Tim dengan Cara</h1>
                                    {this.state.contribute.map((value, index)=>{
                                        return(<div>
                                            <li>{value}</li>
                                        </div>);
                                    })}

                                </div>
                           </CardBody>
                        </Card>
                    </div>
                </Row>
            </>
        )
    }
}

export default InfosComponent