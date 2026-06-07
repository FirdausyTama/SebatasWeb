"use client";

import { useState } from "react";
import { addPortfolio, updatePortfolio, deletePortfolio } from "./actions";

type Portfolio = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

export default function PortfolioManager({ initialData }: { initialData: Portfolio[] }) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Portfolio | null>(null);
  
  const [imageType, setImageType] = useState<"link" | "upload">("link");
  const [imageUrl, setImageUrl] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const handleOpenModal = (item?: Portfolio) => {
    if (item) {
      setEditingItem(item);
      setImageUrl(item.imageUrl);
      setImageType(item.imageUrl.startsWith("data:image") ? "upload" : "link");
    } else {
      setEditingItem(null);
      setImageUrl("");
      setImageType("link");
    }
    setError("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      setError("Ukuran gambar maksimal 1MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("imageUrl", imageUrl); // Use state value (link or base64)

    let result;
    if (editingItem) {
      result = await updatePortfolio(editingItem.id, formData);
    } else {
      result = await addPortfolio(formData);
    }

    if (result.error) {
      setError(result.error);
      setIsPending(false);
    } else {
      window.location.reload(); // Refresh to get fresh server data
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus portofolio ini?")) {
      await deletePortfolio(id);
      window.location.reload();
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h2 style={{ margin: 0, color: 'var(--dark)' }}>Kelola Portofolio</h2>
        <button onClick={() => handleOpenModal()} className="admin-btn-save">
          + Tambah Portofolio Baru
        </button>
      </div>

      {portfolios.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'white', borderRadius: '12px' }}>
          Belum ada portofolio.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {portfolios.map(item => (
            <div key={item.id} className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '180px', backgroundColor: '#e2e8f0', backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{item.category}</span>
                <h4 style={{ margin: '4px 0 8px 0' }}>{item.title}</h4>
                <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.description}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleOpenModal(item)} className="admin-btn-action">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="admin-btn-action" style={{ color: '#ef4444', backgroundColor: '#fee2e2' }}>Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '500px', margin: 0, maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 className="admin-card-title">{editingItem ? "Edit Portofolio" : "Tambah Portofolio"}</h3>
            
            {error && <div style={{ color: 'red', marginBottom: '15px', fontSize: '0.9rem' }}>{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="admin-form-group">
                <label className="admin-label">Nama Projek</label>
                <input type="text" name="title" defaultValue={editingItem?.title || ""} required className="admin-input" />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Kategori</label>
                <input type="text" name="category" defaultValue={editingItem?.category || ""} required className="admin-input" placeholder="Contoh: E-Commerce, Landing Page" />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Deskripsi</label>
                <textarea name="description" defaultValue={editingItem?.description || ""} required className="admin-input" rows={3}></textarea>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Pilih Tipe Gambar</label>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                    <input type="radio" checked={imageType === 'link'} onChange={() => setImageType('link')} /> Link URL
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                    <input type="radio" checked={imageType === 'upload'} onChange={() => setImageType('upload')} /> Upload File Lokal
                  </label>
                </div>

                {imageType === 'link' ? (
                  <input 
                    type="url" 
                    placeholder="https://..." 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    className="admin-input" 
                    required 
                  />
                ) : (
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="admin-input" 
                    required={!imageUrl} 
                  />
                )}

                {imageUrl && (
                  <div style={{ marginTop: '10px' }}>
                    <img src={imageUrl} alt="Preview" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>
                <button type="button" onClick={handleCloseModal} className="admin-btn-action">Batal</button>
                <button type="submit" disabled={isPending} className="admin-btn-save">{isPending ? "Menyimpan..." : "Simpan"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
