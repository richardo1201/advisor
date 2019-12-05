import React from 'react';
import './radio.css'
import Header from "../../components/Headers/Header";

class QuestionsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // Intorver EXtrovert
            InCF: 0,
            ExCF: 0,
            // perceiving judguing
            PerCF: 0,
            JudCF: 0,
            //sensing INtuition
            SenCF: 0,
            IntCF: 0,
            //thinking feeling
            ThinCF :0,
            FeeCF :0,
            questions: [],
            answers: [],
            testScore: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.calculateCF = this.calculateCF.bind(this);
    }
    componentDidMount() {
        console.log("Test tsts");
        const json =require('./questions.json');

        //init the answers array
        let array = [];
        for(let i = 0; i < this.state.questions.length; i++)
            array.push(0);

        this.setState({
            questions: json,
            answers: array
        });
    }

    handleChange = event => {
        let targetId = event.target.id;
        let targetValue = event.target.value;
        let index = targetId.split("-")[1];
        console.log("The value " + event.target.id);
        console.log("The Value real is "+event.target.value);
        let array = this.state.answers;
        array[index] = targetValue;
        this.setState({
            answers: array
        })
    }

    calculateCF = e => {
        e.preventDefault();

        this.setState({
            testScore: 1
        });
        console.log(this.state.testScore);
        let array = [];
        for(let i=0;i<this.state.questions.length; i++){
            if(this.state.answers[i] == null){
                array.push(0);

            }else{
                array.push(parseInt(this.state.answers[i]));
            }
        }

        console.log(array);
        //
        //1 2 3 4 5
        let startCF = 0.5;
        let inCF = 0, exCF = 0, senCF = 0,
            intCF = 0, thinCF = 0, feeCF = 0, perCF=0, judCF = 0
        for(let i=0;i<this.state.questions.length; i++){

            switch(array[i]){
                case 1:
                    if (i < 9){
                        inCF+=1 * 0.109;
                        exCF+=0 * 0.09;
                    }else if(i >= 9 && i < 18){
                        senCF+=1 * 0.109;
                        intCF+= 0 * 0.09;
                    }else if(i >= 18 && i < 27){
                        thinCF+=1 * 0.109;
                        feeCF+=0 * 0.09;
                    }else {
                        perCF += 1 * 0.109;
                        judCF += 0 * 0.09;
                    }
                    break;
                case 2 :
                    if (i < 9){
                        inCF+=this.state.InCF + 0.75 * 0.109;
                        exCF+=this.state.ExCF + 0.25 * 0.09;
                    }else if(i >= 9 && i < 18){
                        senCF+=0.75 * 0.109;
                        intCF+=0.25 * 0.09;
                    }else if(i >= 18 && i < 27){
                        thinCF+=0.75 * 0.109;
                        feeCF+=0.25 * 0.09;
                    }else{
                        perCF+=0.75 * 0.109;
                        judCF+=0.25 * 0.09;
                    }
                    break;
                case 3 :
                    if (i < 9){
                        this.setState({

                        });
                        inCF+= 0.25 * 0.109;
                        exCF+= 0.25 * 0.09;
                        inCF+= 0.25 * 0.09;
                        exCF+= 0.25 * 0.109;
                    }else if(i >= 9 && i < 18){
                        senCF+=0.25 * 0.109;
                        intCF+=0.25 * 0.09;
                        senCF+=0.25 * 0.09;
                        intCF+= 0.25 * 0.109;
                    }else if(i >= 18 && i < 27){
                        thinCF+=0.25 * 0.109;
                        feeCF+=0.25 * 0.09;
                        thinCF+= 0.25 * 0.09;
                        feeCF+=0.25 * 0.109;
                    }else{
                        perCF+=0.25 * 0.109;
                        judCF+= 0.25 * 0.09;
                        perCF+= 0.25 * 0.09;
                        judCF+= 0.25 * 0.109;
                    }
                    break;
                case 4 :
                    if (i < 9){
                        inCF+=0.25 * 0.09;
                        exCF+=0.75 * 0.109;
                    }else if(i >= 9 && i < 18){
                        senCF+=0.25 * 0.09;
                        intCF+=0.75 * 0.109;
                    }else if(i >= 18 && i < 27){
                        thinCF+=0.25 * 0.09;
                         feeCF+= 0.75 * 0.109;
                    }else{
                        perCF+= 0.25 * 0.09;
                        judCF+=0.75 * 0.109;
                    }
                    break;
                case 5:
                    if (i < 9){
                        inCF+=0 * 0.09;
                        exCF+=1 * 0.109;
                    }else if(i >= 9 && i < 18){
                        senCF+=0 * 0.09;
                        intCF+=1 * 0.109;
                    }else if(i >= 18 && i < 27){
                        thinCF+=0 * 0.09;
                        feeCF+= 1 * 0.109;
                    }else{
                        perCF+= 0 * 0.09;
                         judCF+= 1 * 0.109;
                    }
                    break;
            }
        }

        console.log(inCF+","+exCF);
        console.log(perCF+","+judCF);
        console.log(thinCF+","+feeCF);
        console.log(senCF+","+intCF);

        this.props.history.push({
            pathname: "/admin/results",
            state: {
                inCF: inCF,
                exCF: exCF,
                senCF: senCF,
                intCF: intCF,
                thinCF: thinCF,
                feeCF: feeCF,
                perCF: perCF,
                judCF: judCF
            }
        });

    }

    render(){
        return(
            <>
                <Header quotes={"Didalam Kehidupan Mu, Kamu Cenderung Untuk Memilih "}/>
                <div className={"bg-gradient-success p-4"}>
                    {this.state.questions.map((value, index)=>{
                        return(
                        <div className="row mx-4 bg-primary rounded p-4 my-3" key={index} style={{color: "white"}}>
                            <div className="col-4 mt-1" style={{fontSize: 21}}>
                               <div style={{maxWidth: 120}}>{value.leftSide}</div>
                            </div>
                            <div className="col-4 d-flex flex-row">
                                <div className={"d-flex flex-column"} style={{marginLeft: "-40%"}}>
                                    <div className={"d-flex flex-row"}>
                                        <label className="container mx-4 my-auto">
                                            <input onChange={this.handleChange} type="radio" name={"radio-"+index} id={"radio-"+index} value={"1"}/>
                                            <span className="checkmark" style={{width: 40, height: 40}}></span>
                                        </label>
                                        <label className="container mx-4 my-auto">
                                            <input onChange={this.handleChange} type="radio" name={"radio-"+index} id={"radio-"+index} value={"2"}/>
                                            <span className="checkmark" style={{width: 32, height: 32, marginTop: 5}}></span>
                                        </label>
                                        <label className="container mx-4 my-auto">
                                            <input onChange={this.handleChange} type="radio" name={"radio-"+index} id={"radio-"+index} value={"3"}/>
                                            <span className="checkmark" style={{width: 24, height: 24, marginTop: 10}}></span>
                                        </label>
                                        <label className="container mx-4 my-auto">
                                            <input onChange={this.handleChange} type="radio" name={"radio-"+index} id={"radio-"+index} value={"4"}/>
                                            <span className="checkmark" style={{width: 32, height: 32, marginTop: 5}}></span>

                                        </label>
                                        <label className="container mx-4 my-auto">
                                            <input onChange={this.handleChange} type="radio" name={"radio-"+index} id={"radio-"+index} value={"5"}/>
                                            <span className="checkmark" style={{width: 40, height: 40}}></span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4 mt-1" style={{fontSize: 21}}>
                                <div className={'text-right'} style={{maxWidth: 240}}>{value.rightSide}</div>
                            </div>
                        </div>);
                    })}
                    <div className={"d-flex"}>
                        <div className={"btn-primary btn mt-3 mx-auto"} onClick={this.calculateCF}>
                            See Results
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default QuestionsComponent