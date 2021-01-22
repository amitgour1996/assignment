import React, {Component} from 'react';
import "./Assignment1.css"

class Assignment1 extends Component{
    state = {
        pipelineErrorMessage: "",
        projectNameErrorMessage: "",
        bucketNameErrorMessage: "",
        storageFilesErrorMessage: "",
        credentialsErrorMessage: "",
        runEveryErrorMessage: "",
        errorMessage: ["","Minimum length 5","Only '_' '-' ':' '.' '/' allowed","Cannot start with '-' '_' '+'"],
        badData: true
    }

    cancelHandler = ()=>{
        this.setState({
            pipelineErrorMessage: "",
            projectNameErrorMessage: "",
            bucketNameErrorMessage: "",
            storageFilesErrorMessage: "",
            credentialsErrorMessage: "",
            runEveryErrorMessage: "",
            badData: true
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.badData){
            alert('Invalid form data');
            document.querySelector('.onlyForm').scrollIntoView({behavior: 'smooth'});
        }
        else{
            alert ("Valid data");
            document.querySelector('.onlyForm').reset();
            document.querySelector('.onlyForm').scrollIntoView({behavior: 'smooth'})
        }
    }

    validate = (id) => {
        const enteredValue = document.getElementById(id).value;
        if (enteredValue.trim() === ""){
            this.setState({
                [id+"ErrorMessage"]: this.state.errorMessage[0],
                badData: true
            })
        }
        else if (enteredValue.trim().length < 5){
            this.setState({
                [id+"ErrorMessage"]: this.state.errorMessage[1],
                badData: true
            })
        }
        else{
            if(enteredValue.search(/[^a-zA-Z0-9_:/.-]/) > -1){
                this.setState({
                    [id+"ErrorMessage"]: this.state.errorMessage[2],
                    badData: true
                })
                return;
            }
            if(enteredValue.search(/^[_+-]/) > -1){
                this.setState({
                    [id+"ErrorMessage"]: this.state.errorMessage[3],
                    badData: true
                })
                return;
            }
            this.setState({
                [id+"ErrorMessage"]: this.state.errorMessage[0],
                badData: false
            })
        }
    }

    render(){
    return (
        <div className="Assignment1">
            <form className = "onlyForm" onSubmit = {this.submitHandler} onReset={this.cancelHandler}>
                <label htmlFor="source">Select your source:</label>
                <select name="source" id="source">
                    <option value="google">Google Cloud Storage</option>
                </select>
                <p></p>
                <p></p>

                <label htmlFor="pipeline">Provide a name for pipeline:</label>
                <input className={this.state.pipelineErrorMessage === ""?"":"red"} type="text" id="pipeline" placeholder="e.g., cust_shop_energy_gateway001" onBlur = {()=>this.validate("pipeline")}></input>
                <p></p>
                <p className={this.state.pipelineErrorMessage === ""?"":"red"}>{this.state.pipelineErrorMessage}</p>

                <label htmlFor="projectName">GCS project name:</label>
                <input className={this.state.projectNameErrorMessage === ""?"":"red"} type="text" id="projectName" placeholder="project-id" onBlur = {()=>this.validate("projectName")}></input>
                <p></p>
                <p className={this.state.projectNameErrorMessage === ""?"":"red"}>{this.state.projectNameErrorMessage}</p>

                <label htmlFor="bucketName">GCS Bucket name:</label>
                <input className={this.state.bucketNameErrorMessage === ""?"":"red"} type="text" id="bucketName" placeholder="gs://your-bucket" onBlur = {()=>this.validate("bucketName")}></input>
                <p></p>
                <p className={this.state.bucketNameErrorMessage === ""?"":"red"}>{this.state.bucketNameErrorMessage}</p>

                <label htmlFor="storageFiles">Input Cloud Storage File(s):</label>
                <input className={this.state.storageFilesErrorMessage === ""?"":"red"} type="text" id="storageFiles" placeholder="GCS locations of your files" onBlur = {()=>this.validate("storageFiles")}></input>
                <p></p>
                <p className={this.state.storageFilesErrorMessage === ""?"":"red"}>{this.state.storageFilesErrorMessage} Example:<br />gs://your-bucket/your-files/01.csv</p>

                <label htmlFor="credentials">GCS credentials:</label>
                <input className={this.state.credentialsErrorMessage === ""?"":"red"} type="text" id="credentials" onBlur = {()=>this.validate("credentials")}></input>
                <p></p>
                <p className={this.state.credentialsErrorMessage === ""?"":"red"}>{this.state.credentialsErrorMessage}</p>

                <label htmlFor="runEvery">Run Every:</label>
                <input className={this.state.runEveryErrorMessage === ""?"":"red"} type="text" id="runEvery" placeholder="(in minutes)" onBlur = {()=>this.validate("runEvery")}></input>
                <p></p>
                <p className={this.state.runEveryErrorMessage === ""?"":"red"}>{this.state.runEveryErrorMessage}</p>

                <input type="submit" value="Create"></input>
                <input type="reset" value="Cancel"></input>
            </form>
        </div>
    );
}
}

export default Assignment1;