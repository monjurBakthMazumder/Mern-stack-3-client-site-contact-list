import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ContactCard = ({contact, contacts, setContacts}) => {
    const {_id, name, email, phone} = contact || {};
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/contacts/${_id}`, {
                    method: 'DELETE',
                })
                .then(res=> res.json())
                .then(data =>{
                    if(data.deletedCount){
                        Swal.fire(
                          'Deleted!',
                          'The contact has been deleted.',
                          'success'
                        )
                        const remaining = contacts.filter?.(item => item._id !== _id)
                        setContacts(remaining)
                    }
                })
            }
          })
          
    }
    return (
        <div className="flex justify-between items-center gap-5 border dark:text-white rounded mb-5 p-5">
            <div className="flex-1">
                <h2 className="card-title">{name}</h2>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
            </div>
                <div className="space-y-2 text-xl">
                    <Link to={`/update/${_id}`}>
                        <AiFillEdit className='cursor-pointer h-7 w-7 rounded border border-green-600 p-1 text-white bg-green-600  hover:text-green-600  hover:bg-transparent'/>
                    </Link>
                    <AiFillDelete onClick={handleDelete} className='cursor-pointer h-7 w-7 rounded border border-red-600 p-1 text-white bg-red-600  hover:text-red-600  hover:bg-transparent'/>
                </div>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object,
    contacts: PropTypes.array,
    setContacts: PropTypes.func
};

export default ContactCard;