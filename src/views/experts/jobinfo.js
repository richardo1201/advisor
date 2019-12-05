import React from "react";
import Header from "../../components/Headers/Header";

class JobInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("This "+Number(0.1399).toFixed(2));
  }

  render() {
    return (
      <>
        <Header quotes={"About Myers Briggs Theory"}/>
        <div className="">
          <div className="bg-gradient-indigo d-flex p-3">
            <div className="mx-auto my-auto p-4 text-center rounded" style={{backgroundColor: "#8AD1DC", width: "80%"}}>
              <h1>What Kind Of Careers That Suits To You?</h1>
              <p>Sometime people don't know they potention
                or miss estimate their real potention. Their are a bunch of methods
                that can give you an answer to the question "What is my real potention?
                What I will be to be in the future?". One of the method is MBTI - Myers Briggs
                Type Indicator. </p>
              <h1 className={"mt-2"}>What is Myers Briggs Type Indicator?</h1>
              <p>
                The Myers–Briggs Type Indicator is an introspective self-report questionnaire
                indicating differing psychological preferences in
                how people perceive the world and make decisions.
                Source: Wikipedia.com
              </p>
              <img src={window.location.origin+"/cover.jpg"} style={{width:"80%", height: "auto"}}/>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default JobInfoPage;
