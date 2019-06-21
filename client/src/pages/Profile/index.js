import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import ProfileCard from "../../components/ProfileCard";
import Sidenav from "../../components/Sidenav";
import SavedResults from "../../components/SavedResults";
import config from "../../config/config"
import Sidenav2 from "../../components/Sidenav2"


class Profile extends Component {
  
  state = {
    stud:[],
  };

   componentDidMount() {
    this.loadStudents();
    this.verifyLogin();
      
    }
  
     loadStudents = () => {  
      API.getStudents()
        .then(res =>{
          console.log('api',res.data)
          this.setState({ stud: res.data })
        }
        )
        .catch(err => console.log(err));
    };
verifyLogin=()=>{
API.verifyUser()
.then(res=>{
  console.log('verifylogin',res);
})
  // {config.serverHost + "/auth/google}


}

  deleteStudent = ({target}) => {
const {dataset} =target;
    API.deleteStudent(dataset.id)
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  };

  
  render() {
    return (
      
      <div className="d-flex flex-row">
                    <div className="d-flex flex-column align-self-center mr-5">
                         <Sidenav />
                         <Sidenav2 />   
                     </div>
                     <div className="d-flex flex-column mt-5">
                        
                         <div className="row text-center mt-5" id="cardDiv">
                           <ProfileCard results={this.state.stud} />

</div>
</div>

</div>

    )
  }
}

export default Profile;

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
