import React from "react";
import Header from "../../components/Headers/Header";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <>
        <Header  quotes={"What Kind of Jobs That Suits To You?"}/>
        <img src={window.location.origin+"/cover-full.jpg"}
             style={{width: "80.4vw", height: "auto"}}/>
      </>

    );
  }
}

export default HomePage;
