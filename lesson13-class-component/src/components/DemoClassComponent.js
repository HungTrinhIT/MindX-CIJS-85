import { Component } from "react";

class DemoClassComponent extends Component {
  // Hàm khởi tạo
  constructor(props) {
    super(props);

    // Nơi khai báo state
    this.state = {
      count: 1,
    };
  }

  // = useEffect with empty deps
  componentDidMount() {
    console.log("Did mount runs");
  }


   /*
    useEffect(()=>{
        
    },[deps])
  */
  componentDidUpdate() {
    console.log("Did update runs");
  }


  /*
    useEffect(()=>{

        // Cleanup function
        return () => {
            //Component will unmount
        }
    },[])
  */
  componentWillUnmount() {
    console.log("Will Unmount runs");
  }

  onIncreaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Render runs");
    return (
      <div>
        <h1>Demo class component</h1>
        <p>{this.props.message}</p>
        <p>
          <strong>Count:</strong> {this.state.count}
        </p>
        <button onClick={this.onIncreaseCount}>Click me!!!</button>
      </div>
    );
  }
}

export default DemoClassComponent;

// OOP:
// 4 principles
// - Tính kế thừa

// Thuộc tính: chiều cao, cân nặng, lượng máu, sức mạnh
// Hành động: chiêu, chạy, về thành
