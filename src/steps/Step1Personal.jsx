import React from 'react';

export default function Step1Personal({ formData, updateFormData }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-base font-bold text-slate-700">Personal Information</h3>
      </div>
      
      {/* First Name Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <input
          type="text"
          value={formData.firstName || ''}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="First Name"
        />
      </div>

      {/* Last Name Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <input
          type="text"
          value={formData.lastName || ''}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="Last Name"
        />
      </div>

      {/* Email Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
}