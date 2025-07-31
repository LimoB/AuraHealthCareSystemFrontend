import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaFilePrescription,
  FaClipboardList,
  FaCreditCard,
  FaQuestionCircle,
  FaUserMd
} from 'react-icons/fa';
import NavbarP from '../components/patientdashboard/NavbarP';

const patientNavItems = [
  { to: '.', icon: <FaHome className="mr-3" />, label: 'Dashboard' },
  { to: 'profile', icon: <FaUser className="mr-3" />, label: 'User Profile' },
  { to: 'appointments', icon: <FaCalendarAlt className="mr-3" />, label: 'Appointments' },
  { to: 'prescriptions', icon: <FaFilePrescription className="mr-3" />, label: 'Prescriptions' },
  { to: 'complaints', icon: <FaClipboardList className="mr-3" />, label: 'Complaints' },
  { to: 'find-doctor', icon: <FaUserMd className="mr-3" />, label: 'Book-Appointment' },
  { to: 'support', icon: <FaQuestionCircle className="mr-3" />, label: 'Help/Support' },
  { to: 'payments', icon: <FaCreditCard className="mr-3" />, label: 'Payments' },
];

const PatientLayout: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <NavbarP />

      {/* Fixed Sidebar */}
      <aside className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] bg-white shadow-md p-6 hidden md:flex flex-col z-40">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Patient Panel</h2>
        <nav className="flex-grow">
          <ul className="space-y-4">
            {patientNavItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition-colors text-base font-medium ${
                      isActive
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="pt-24 md:pt-24 md:ml-64 px-4 md:px-8 pb-10">
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 min-h-[calc(100vh-10rem)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PatientLayout;
