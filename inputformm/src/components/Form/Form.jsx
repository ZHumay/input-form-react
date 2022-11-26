import React,{Component} from "react";
import "./Form.css"

  state = {
        fullname: "",
        serialNumber: "",
        gender: "",
        age: "",
        email: "",
        symptoms: ""
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitChanges = () => {
        console.log(this.state);
        alert("Kart qeydiyyatdan keçdi");
    }

    render() {
        return (
            <div className="main">
                <label>
                    Xəstənin tam adı
                    <br></br>
                    <input type="text" onChange={this.handleInput} name="fullname" placeholder="Adınızı daxil edin"></input><br></br>
                </label>
                <br></br>
                <label>
                    Vəsiqə seriyası və nömrəsi
                    <br></br>
                    <input type="text" onChange={this.handleInput} name="serialNumber" placeholder="Vəsiqənizin seriyasını və nömrəsini daxil edin"></input><br></br>
                </label>
                <br></br>
                <label>
                    Cinsi
                    <br></br>
                    <select name="gender" onClick={this.handleInput}>
                        <option value="kişi">Kişi</option>
                        <option value="qadın">Qadın</option>
                    </select><br></br>
                </label>
                <br></br>
                <label>
                    Yaş
                    <br></br>
                    <input type="number" onChange={this.handleInput} name="age" placeholder="Yaşınızı daxil edin"></input><br></br>
                </label>
                <br></br>
                <label>
                    Email ünvanı
                    <br></br>
                    <input type="email" onChange={this.handleInput} name="email" placeholder="E-mailinizi daxil edin"></input><br></br>
                </label>
                <br></br>
                <label>
                    Simptomların təsviri
                    <br></br>
                    <textarea rows="5" cols="30" name="symptoms" onChange={this.handleInput}></textarea>
                </label>
                <br></br>
                <label>
                    Təkrar qəbul
                    <input className="check" type="checkbox"></input><br></br>
                </label>
                <br></br>
                <button onClick={this.submitChanges}>Göndər</button>
            </div>
        )
    }
}
export default Form
