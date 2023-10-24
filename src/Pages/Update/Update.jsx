import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const navigate = useNavigate()
    const loadedContact = useLoaderData()
    const {_id, name, email, phone} = loadedContact || {}
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const updatedContact = {name, email, phone}
        fetch(`http://localhost:5000/contacts/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedContact)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.modifiedCount){
                navigate('/')
                Swal.fire(
                    'Update Successful!',
                    'The contact updated successfully!',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <form className="text-xl dark:text-white border rounded p-5 md:p-10" onSubmit={handleSubmit}>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-5">Update the contact</h1>
                <label htmlFor="name">Name:
                    <input type="text" placeholder="Name" name="name" defaultValue={name} required className="input input-bordered input-accent w-full mt-3
                     mb-5 bg-transparent" />
                </label>
                <label htmlFor="phone">Phone:
                    <input type="phone" placeholder="Phone" name="phone" defaultValue={phone} required className="input input-bordered input-accent w-full mt-3
                     mb-5 bg-transparent" />
                </label>
                <label htmlFor="email">Email:
                    <input type="email" placeholder="Email" name="email" defaultValue={email} required className="input input-bordered input-accent w-full mt-3
                     mb-5 bg-transparent" />
                </label>
                <div className="text-center">
                    <input type="submit" value={"Update"} className="btn btn-outline btn-success rounded-none my-5" name="" id="" />
                </div>
            </form>
        </div>
    );
};

export default Update;