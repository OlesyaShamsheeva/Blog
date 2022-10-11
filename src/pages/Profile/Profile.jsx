import styles from "./Profile.module.css"
import {PhotoUser} from "../../components/PhotoUser";
import {NoPhoto} from "../../components/PhotoUser/NoPhoto";
import {ActivePhoto} from "../../components/PhotoUser/ActivePhoto";
import {useContext, useState} from "react";
import {MyContext} from "../../App";
import {TextField} from "../../components/TextField";

export const Profile = () => {
    const [stateProf, setStateProf] = useState({
        firstName: '',
        lastName: '',
        description:'',
    })
    const {user,setUser} = useContext(MyContext)
    const inputProfile = [
        {
            label: "First Name",
            value: stateProf.firstName,
            description: stateProf.description,
        },
        {
            label: "Last Name",
            value: stateProf.lastName,
            description: stateProf.description,
        },
    ]
    const handleChangeAut = (e) => setStateProf((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    return (
        <div>
            <h3 className={styles.caption}>Profile</h3>
            <div className={styles.block}>
                <PhotoUser src={user}>
                    {user.avatar ?
                        <ActivePhoto src={user.avatar}/>
                        :
                        <NoPhoto src={user.avatar}/>
                    }
                </PhotoUser>
                <form className={styles.form}>
                    {inputProfile.map((input)=>

                            <TextField name={input.label} input={input} value={input.value}  description={input.description } onChange={handleChangeAut}/>)}

                    <div className={styles.div} >
                        Description
                        <textarea></textarea>
                    </div>
                    <button>Save Changes</button>
                </form>

            </div>

        </div>
    )
}