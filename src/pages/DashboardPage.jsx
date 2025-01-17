import React, { useState } from 'react';
import { useAuth, RedirectToSignIn, SignedIn, UserButton } from '@clerk/clerk-react';
import AccountIcon from '../assets/accoutIcon.svg';
import AddCircleIcon from '../assets/addIcon.svg';
import CloseIcon from '../assets/addIcon.svg';
import LogoutIcon from '../assets/logOut.svg';
import WebsiteDetails from '../components/DashboardComponents/WebsiteDetails';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
const navigate = useNavigate();
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const { isSignedIn } = useAuth(); // Check if user is signed in

  const handleAccountClick = () => {
    setIsAccountVisible(true);
  };

  const handleCloseAccount = () => {
    setIsAccountVisible(false);
  };

  const sites = [
    { name: 'Site1', url: 'www.site1.com' },
    { name: 'Site2', url: 'www.site2.com' },
    {name: 'site3', url : ''}
  ];

  // If the user is not signed in, redirect to login
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="bg-primary-color text-text-color min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full h-16 flex justify-center items-center bg-primary-color border-b border-gray-500/60 z-50">
        <div className="w-11/12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-text-color">Web</h1>
            <h1 className="text-3xl font-bold text-text-color-2">Weaver</h1>
          </div>
          {/* Navigation Items */}
          <ul className="flex space-x-8">
            <li className="hover:underline">
              <a href="#" className="text-lg text-text-color">About Us</a>
            </li>
            <li className="hover:underline">
              <a href="#" className="text-lg text-text-color">Contact</a>
            </li>
            <li className="cursor-pointer">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </div>
      </nav>

      {/* Dashboard Section */}
      <div className="flex justify-center w-full pt-20 bg-primary-color">
        <div className="w-11/12">
          <h1 className="text-4xl font-semibold text-text-color mt-8">Dashboard</h1>
          <p className="text-normal text-text-color-2 mt-2">Manage all your projects at one place</p>
        </div>
      </div>

      {/* Sites List */}
      <div className="flex justify-center w-full bg-primary-color mt-8">
        <div className="w-11/12 flex flex-col space-y-6">
          {sites.map((site, index) => (
           <WebsiteDetails key={index} name={site.name} url={site.url} />
          ))}
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end w-full bg-primary-color mt-12 p-16 absolute bottom-0 left-0">
        <a href="#">
          <img src={AddCircleIcon} onClick={() => navigate("/new")} alt="Add" className="w-12 h-12" />
        </a>
      </div>

      {/* Account Modal */}
      {isAccountVisible && (
        <div className="fixed top-0 right-0 w-64 h-80 bg-[#3991e33d] backdrop-blur-lg rounded-bl-lg rounded-br-lg shadow-lg transition-all duration-200">
          <div className="flex justify-end p-5 cursor-pointer" onClick={handleCloseAccount}>
            <img src={CloseIcon} alt="Close" className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-5 px-5">
            <img src={LogoutIcon} alt="Logout" className="w-8 h-8" />
            <h1 className="text-lg text-text-color" >Logout</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
