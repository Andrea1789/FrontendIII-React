import {useState} from 'react'

export const Form = () => {
    const [user, setUser] = useState({
        email: '',
        pass: '',
    });
    
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true);
    };


  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
                type="email"
                onChange={(event) => setUser({...user, email:event.target.value})}
            />
            <label>Password</label>
            <input 
            type="password" 
            onChange={(event) => setUser({...user, pass:event.target.value})}
            />
            <button>Enviar</button>
        </form>
            {   
                show
                &&
                <>
                <h4>Email: {user.email}</h4>
                <h4>Password: {user.pass}</h4>
                </>
                }

    </>
  )
}
