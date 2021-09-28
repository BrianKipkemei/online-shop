import React from 'react'

export const Error = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">
            404
          </h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>the requested URL was not found</h3>
            {/* <span className="text-danger">
              {props.location.pathname}
            </span>{""} */}
            
        </div>
      </div>
    </div>
  )
}





















// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// export const Error = () => {
//   return (
//   <div className="container">
//     <div className="row">
//       <div className="col-10 mx-auto mt-40">
//         <ErrorWrapper>
//           <h1>Oops The URL entered does not exist.</h1>
//           <Link to='/'>
//               <button className="btn btn-outline-primary text-uppercase mb-3 px-5" type='button'>Back Home
//               </button>
//           </Link>
//           <div className="animated-divs">

//             <div className="animated-div">

//             </div>
//             <div className="animated-div">

//             </div>
//             <div className="animated-div">

//             </div>
//             <div className="animated-div">

//             </div>
//           </div>  
//         </ErrorWrapper>
//       </div>
//     </div>
//   </div>
//   )
// }
// const ErrorWrapper=styled.div`
// width: 100%;
// margin-top: 30%;
// display: grid;
// place-items: center;
// background: linear-gradient(to right, lightseagreen,var(--mainBlue));
// .animated-div{
//   width: 40px;
//   background: lightblue;
//   animation: anime 1.5s linear forwards infinite;
// }
// .animated-div::not(::last-child){
//   margin-right: 20px;
// }
// @keyframes anime{
//   0%{
//   .animated-div:first-child{
//     height: 20px;
//   }
//   .animated-div::nth-child(2){
//     height: 40px;
//   }
//   .animated-div::nth-child(3){
//     height: 100px;
//   }
//   .animated-div:last-child{
//     height: 20px;
//   }
// }
//   25%{
//   .animated-div:first-child{
//     height: 40px;
//   }
//   .animated-div::nth-child(2){
//     height: 60px;
//   }
//   .animated-div::nth-child(3){
//     height: 80px;
//   }
//   .animated-div:last-child{
//     height: 40px;
//   }
// }
//   50%{
//   .animated-div:first-child{
//     height: 60px;
//   }
//   .animated-div::nth-child(2){
//     height: 80px;
//   }
//   .animated-div::nth-child(3){
//     height: 60px;
//   }
//   .animated-div:last-child{
//     height: 60px;
//   }
// }
//   75%{
//   .animated-div:first-child{
//     height: 80px;
//   }
//   .animated-div::nth-child(2){
//     height: 20px;
//   }
//   .animated-div::nth-child(3){
//     height: 40px;
//   }
//   .animated-div:last-child{
//     height: 80px;
//   }
// }
//   100%{
//     .animated-div:first-child{
//     height: 100px;
//   }
//   .animated-div::nth-child(2){
//     height: 0px;
//   }
//   .animated-div::nth-child(3){
//     height: 20px;
//   }
//   .animated-div:last-child{
//     height: 100px;
//   }
//   }
// }
// `

// export default Error
