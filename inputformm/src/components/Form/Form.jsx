import React,{Component} from "react";
import "./Form.css"

class Form extends Component{
    state={
        fullname:"",
        text:"",
        gender:"",
        age:"",
        email:"",
        symptoms:""
    }
    
    submitChanges=()=>{
        alert("Kart qeydiyyatdan keçdi");
        const data = new FormData(event.target);
        console.log(data.get('fullname'));
        console.log(data.get('number'));
        console.log(data.get('gender'));
        console.log(data.get('age'));
        console.log(data.get('email'));
        console.log(data.get('symptoms'))
    }

    render(){
        return(
            <div>
        <label>
        Xəstənin tam adı
        <br></br>
        <input type="text" name="fullname" placeholder="Adınızı daxil edin"></input><br></br>
    </label>
        <br></br>
        <label>
        Vəsiqə seriyası və nömrəsi
        <br></br>
        <input type="text" name="number" placeholder="Vəsiqənizin seriyasını və nömrəsini daxil edin"></input><br></br>
    </label>
        <br></br>
        <label>
        Cinsi
        <br></br>
        <select name="gender">
            <option value="kişi">Kişi</option>
            <option value="qadın">Qadın</option>
        </select><br></br>
    </label>
        <br></br>
        <label>
        Yaş
        <br></br>
        <input type="number" name="age" placeholder="Yaşınızı daxil edin"></input><br></br>
    </label>
        <br></br>
        <label>
        Email ünvanı
        <br></br>
        <input type="email" name="email" placeholder="E-mailizi daxil edin"></input><br></br>
    </label>
        <br></br>
        <label>
        Simptomların təsviri
        <br></br>
        <textarea rows="5" cols="30" name="symptoms"></textarea>
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