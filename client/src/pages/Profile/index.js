import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";

import SavedResults from "../../components/SavedResults";


class Saved extends Component {
  state = {
    stud:[],
  };

   componentDidMount() {
    console.log("i am called")  
    this.loadStudents();
      
    }
  
     loadStudents = () => {
        console.log("i am caloadStudentslled")   
      API.getStudents()
        .then(res =>{
          console.log('api',res.data)
          this.setState({ stud: res.data })
        }
        )
        .catch(err => console.log(err));
    };

  deleteStudent = ({target}) => {
const {dataset} =target;
    API.deleteStudent(dataset.id)
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        {this.state.stud.length ? (
          <SavedResults results={this.state.stud} 
          handleDelete={this.deleteStudent}
          />
        ):(
          <h3>No Results to Display</h3>
        )}
        </Container>
      </div>
    );
  }
}
export default Saved;


//*** Card structure by NASh */

// import React, { Component } from "react";
// import Sidenav from '../../components/Sidenav';
// import ProfileCard from '../../components/ProfileCard';
// import './style.css';

// class Profile extends Component{

//     componentDidMount() {
//         /* Hook for initializing stuff */

//     }
    
//     render(){
//         return (
//             <div>
//                 {/* Profile page components go here */}
                
//                 <div className="d-flex flex-row">
//                     <div className="d-flex flex-column align-self-center mr-5">
//                         <Sidenav />   
//                     </div>
//                     <div className="d-flex flex-column mt-5">
                        
//                         <div className="row text-center mt-5" id="cardDiv">
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                             <ProfileCard />
//                         </div>
                        
//                     </div>
//                 </div>        
                    
                
//             </div>
//         )
//     }
// }

// export default Profile;
