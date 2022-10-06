import {MainContainer} from "../MainContainer/MainConteiner";

export const RegistrationUser=()=>{
    return
    <MainContainer children={children}>
        <h1>Create your free account</h1>
        <div>First Name <input></input></div>
        <div>Last Name <input></input></div>
        <div> Email Address <input></input></div>
        <div> Password <button></button></div>
        <button>sign in account</button>
    </MainContainer>
}