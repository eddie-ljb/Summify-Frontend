import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="p-10 min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold text-primary">
        Eddies Theme läuft 🚀
      </h1>

      <button className="btn btn-secondary mt-6">
        DaisyUI Button
      </button>

      <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="card-title">Eine DaisyUI Card</h2>
          <p>Sieht dein Theme richtig aus? Dann ist alles perfekt.</p>
          <button className="btn btn-primary">Klick mich</button>
        </div>
      </div>
    </div>
  );
}

