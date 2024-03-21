import React, { useState ,useEffect} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {
    const navigate = useNavigate();
    
    const [inputdata,setInputdata]=useState({
        "groupNumber": "",
        "report01Marks": "",
        "report01Feedback": "",
        "proposalMarks": "",
        "proposalFeedback": "",
        "report02Marks": "",
        "report02Feedback": "",
        "logBookMarks": "",
        "logBookFeedback": "",
        "finalReportMarks": "",
        "finalReportFeedback": ""
    })
    
    //onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInputdata((prestud)=>{
            return{
                ...prestud,[name]:value
            }
        })
    }


    //get single data student
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setInputdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //update student Data
    const updatestud= async(e)=>{
        e.preventDefault();

        const {groupNumber, report01Marks, report01Feedback, proposalMarks, proposalFeedback, report02Marks, report02Feedback, logBookMarks, logBookFeedback, finalReportMarks, finalReportFeedback} =inputdata;
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                groupNumber, report01Marks, report01Feedback, proposalMarks, proposalFeedback, report02Marks, report02Feedback, logBookMarks, logBookFeedback, finalReportMarks, finalReportFeedback
            })
        });
        const data2= await res2.json();
        setInputdata(data2);
        toast.success('Please wait  !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/allstud');
          }, 3000);


    }

    return (
        <div className='container mt-5'>
            <h4>Edit Report Marks</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>


                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Group Number</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Group Number" 
                    onChange={setstud} name="groupNumber" value={inputdata.groupNumber}/>
                </div></div></div></div>
                <br></br>

                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Report 01</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Marks</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Report 01 Marks"
                    onChange={setstud} name="report01Marks" value={inputdata.report01Marks}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlInput1" placeholder="Enter Report 01 Feedback" 
                    onChange={setstud} name="report01Feedback" value={inputdata.report01Feedback}/>
                </div></div></div></div>
                <br></br>

                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Proposal</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Marks</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Proposal Marks"
                    onChange={setstud} name="proposalMarks" value={inputdata.proposalMarks}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlInput1" placeholder="Enter Proposal Feedback"
                    onChange={setstud} name="proposalFeedback" value={inputdata.proposalFeedback}/>
                </div></div></div></div>
                <br></br>


                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Report 02</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Marks</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter report02 Marks"
                    onChange={setstud} name="report02Marks" value={inputdata.report02Marks}/>
                </div><div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlInput1" placeholder="Enter report02 Feedback"
                    onChange={setstud} name="report02Feedback" value={inputdata.report02Feedback}/>
                </div></div></div></div>
                <br></br>


                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Log Book</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Marks</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter logBook Marks"
                    onChange={setstud} name="logBookMarks" value={inputdata.logBookMarks}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlInput1" placeholder="Enter logBook Feedback"
                    onChange={setstud} name="logBookFeedback" value={inputdata.logBookFeedback}/>
                </div></div></div></div>
                <br></br>


                <div className="mb-3">
                <div className="card" style={{backgroundColor: '#f0f0f0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Final Report</h5>
                        <div className="mb-3">
                            <label htmlFor="finalReportMarks" className="form-label">Marks</label>
                            <input type="text" className="form-control" id="finalReportMarks" placeholder="Enter Final Report Marks"
                                onChange={setstud} name="finalReportMarks" value={inputdata.finalReportMarks} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="finalReportFeedback" className="form-label">Feedback</label>
                            <textarea className="form-control" id="finalReportFeedback" placeholder="Enter Final Report Feedback"
                                onChange={setstud} name="finalReportFeedback" value={inputdata.finalReportFeedback}></textarea>
                        </div>
                    </div>
                </div>
                </div><br></br>



                <div className='d-flex'>
                         <button className='btn btn-primary' onClick={updatestud}>Update</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
    )
}
