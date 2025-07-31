// src/routes/adminRoutes.ts

import { Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoutes";
import AdminLayout from "../layouts/AdminLayout";

// Pages
import AdminProfile from "../components/Admindashboard/adminprofile";
import Alldoctors from "../components/Admindashboard/Alldoctors";
import AllPatients from "../components/Admindashboard/AllPatients";
import AllAppointments from "../components/Admindashboard/ManageAppointments/AllAppointments";
import AllPrescriptions from "../components/Admindashboard/ManagePrescription/AllPrescriptions";
import AdminComplaintsPage from "../components/Admindashboard/AllComplaints";
import AdminPaymentsPage from "../components/Admindashboard/PaymentsPage";
import DonationsPage from "../components/Admindashboard/DonationsPage";
import ChartsPage from "../components/Admindashboard/ChartsPage";
import ManagementHub from "../components/Admindashboard/ManagementHub";
import HRPage from "../components/Admindashboard/HRPage";

export const adminRoutes = {
  path: "admindashboard",
  element: (
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
    // 👇 Default landing page
    { index: true, element: <ManagementHub /> },

    // Profile
    { path: "profile", element: <AdminProfile /> },

    // Management
    { path: "management", element: <ManagementHub /> },
    { path: "hr", element: <HRPage /> },

    // Data views
    { path: "doctors", element: <Alldoctors /> },
    { path: "patients", element: <AllPatients /> },
    { path: "appointments", element: <AllAppointments /> },
    { path: "prescriptions", element: <AllPrescriptions /> },
    { path: "complaints", element: <AdminComplaintsPage /> },

    // Financial
    { path: "payments", element: <AdminPaymentsPage /> },
    { path: "donations", element: <DonationsPage /> },

    // Analytics
    { path: "charts", element: <ChartsPage /> },

    // Fallback
    { path: "*", element: <Navigate to="." replace /> }
  ]
};
