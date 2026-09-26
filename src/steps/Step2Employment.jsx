import React from 'react';

export default function Step2Employment({ formData, updateFormData }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-base font-bold text-slate-700">Employment Details</h3>
      </div>

      {/* Status Select */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <select
          value={formData.employmentStatus || ''}
          onChange={(e) => updateFormData({ employmentStatus: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all appearance-none"
        >
          <option value="">Select Employment Status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>

      {/* Income Input */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[#7dc2c2]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <input
          type="number"
          value={formData.annualIncome || ''}
          onChange={(e) => updateFormData({ annualIncome: e.target.value })}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7dc2c2] focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all"
          placeholder="Annual Income (₹)"
        />
      </div>
    </div>
  );
}