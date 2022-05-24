import { FC, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetContactQuery } from 'services/contactsApi';
import './UserInfo.css';

const UserInfo: FC = () => {
   const { id } = useParams();
   const { data, error } = useGetContactQuery(id!);

   useEffect(() => {
      error && toast.error('Error loading contact');
   }, [error]);

   return (
      <div style={{ marginTop: '150px' }}>
         <div className="card">
            <div className="card-header">
               <p>User Contact Detail</p>
            </div>
            <div className="container">
               <strong>ID: </strong>
               <span>{id}</span>
               <br />
               <br />
               <strong>Name: </strong>
               <span>{data?.name}</span>
               <br />
               <br />
               <strong>Email: </strong>
               <span>{data?.email}</span>
               <br />
               <br />
               <strong>Contact: </strong>
               <span>{data?.contact}</span>
               <br />
               <br />
               <Link to="/">
                  <button className="btn btn-edit">Go Back</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default UserInfo;
