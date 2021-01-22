import React, {Component} from 'react';
import "./Assignment2.css"

class Assignment2 extends Component{
    state = {
        //Data retrieved from the server can be stored in this state
        //Whenever the JSON file changes the state will automatically change and hence table will be re-rendered

        JSONdata : `[
            ["machine_name", "machine_id", "current", "voltage", "power_factor", "active_power", "apparent_power", "reactive_power", "daily_energy", "monthly_energy", "yearly_energy", "idle_daily", "idle_monthly", "idle_yearly"],
            ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
            ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
        ]`
    }

    render(){
        return(
            <div className="Assignment2">
                <p>Equipment-wise Details</p>
                <table>
                    <tbody>
                        {JSON.parse(this.state.JSONdata).map((row, index) => {
                            return <tr key={index}>{row.map((cellData, index)=> <td key = {index}>{cellData.toString().toUpperCase()}</td>)}</tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Assignment2;