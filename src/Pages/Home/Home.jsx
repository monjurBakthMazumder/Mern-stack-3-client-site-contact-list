import { useLoaderData } from "react-router-dom";
import ContactCard from "../../Component/ContactCard";
import { useState } from "react";

const Home = () => {
    const loadedContacts = useLoaderData()
    const [contacts , setContacts] = useState(loadedContacts)
    return (
        <div>
            {
                contacts?.map(contact => 
                    <ContactCard
                        key={contact._id}
                        contact={contact}
                        contacts={contacts}
                        setContacts={setContacts}
                    />
                )
            }
        </div>
    );
};

export default Home;