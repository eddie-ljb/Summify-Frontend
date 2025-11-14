import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DashboardPage} from "./pages/DashboardPage.jsx";
import {SettingsPage} from "./pages/SettingsPage.jsx";
import {SummariesPage} from "./pages/SummariesPage.jsx";
import {CoursesPage} from "./pages/CoursesPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <AppLayout>
              <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/summaries" element={<SummariesPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
              </Routes>
          </AppLayout>
      </BrowserRouter>
  );
}

