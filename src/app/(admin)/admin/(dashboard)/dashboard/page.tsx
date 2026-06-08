export default function AdminDashboard() {
  return (
    <div className="space-y-6 md:space-y-10 relative z-10 font-sans">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-rns-blue to-rns-light rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
        <div className="absolute right-0 top-0 p-8 transform rotate-12 opacity-10 pointer-events-none">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">PT. Sebatas Web Project</h1>
          <p className="text-blue-100 text-xs md:text-sm font-normal opacity-90 leading-relaxed max-w-xl">Selamat Datang di Panel Manajemen!</p>
        </div>

        <div className="relative z-10 flex flex-col md:items-end gap-4 mt-4 md:mt-0">
          <div className="text-left md:text-right">
            <div className="text-blue-200 text-sm font-medium mt-1">Sistem Manajemen Internal</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white text-rns-blue rounded-xl font-medium hover:bg-blue-50 transition-all shadow-sm flex items-center gap-2 text-xs md:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Laporan Baru
            </button>
            <button className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all shadow-sm flex items-center gap-2 text-xs md:text-sm backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Statistik
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Grid (Big Premium Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-rns-blue text-white shadow-lg shadow-blue-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">Aktivitas</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-3xl font-medium text-gray-900 leading-none mb-1">142</h3>
              <p className="text-gray-500 text-xs font-normal">Total Interaksi</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">Kinerja</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-medium text-gray-900 leading-none mb-1">85%</h3>
              <p className="text-gray-500 text-xs font-normal">Tingkat Keberhasilan</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">Pengguna</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-medium text-gray-900 leading-none mb-1">2,4k</h3>
              <p className="text-gray-500 text-xs font-normal">Pengguna Aktif</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="absolute right-0 top-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V15m0 1H10m4 0h-2"></path></svg>
              </div>
              <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">Laporan</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-medium text-gray-900 leading-none mb-1">56</h3>
              <p className="text-gray-500 text-xs font-normal">Laporan Pending</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
