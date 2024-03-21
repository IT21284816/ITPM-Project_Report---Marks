import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
export default function View() {

    const [getstud, SetGetstud] = useState([]);

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
            SetGetstud(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    return (
        <div className='container mt-5'>
             <h4>All Student Information</h4>
            <div className='underline'></div>
            <ul className="list-group w-50 mt-4">
                <li className="list-group-item active" aria-current="true">Group Number</li>
                <li className="list-group-item">Group Number:- {getstud.groupNumber}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Report 01</li>
                <li className="list-group-item">Marks:- {getstud.report01Marks}</li>
                <li className="list-group-item">Feedback:- {getstud.report01Feedback}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Proposal</li>
                <li className="list-group-item">Marks:- {getstud.proposalMarks}</li>
                <li className="list-group-item">Feedback:- {getstud.proposalFeedback}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Report 02</li>
                <li className="list-group-item">Marks:- {getstud.report02Marks}</li>
                <li className="list-group-item">Feedback:- {getstud.report02Feedback}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">Log Book</li>
                <li className="list-group-item">Marks:- {getstud.logBookMarks}</li>
                <li className="list-group-item">Feedback:- {getstud.logBookFeedback}</li>
                <br></br>

                <li className="list-group-item active" aria-current="true">FinalReport</li>
                <li className="list-group-item">Marks:- {getstud.finalReportMarks}</li>
                <li className="list-group-item">Feedback:- {getstud.finalReportFeedback}</li>
                <br></br>



                
                
            </ul>
            <Link className='btn btn-primary mt-5' to="/allstud">Back</Link>
        </div>
    )
}
