import { Navigate, Route, Routes } from "react-router-dom";
import {
  Pengaturan,
  Santri,
  Profile as SantriProfile,
} from "../pages/dashboard-santri";
import {
  Ustadz,
  Profile as UstadzProfile,
  TambahSantri,
  DataSantri,
  SkillSantri,
  Hafalan,
} from "../pages/dashboard-ustadz";
import { Footer, Header, Sidebar } from "../components/ui";
import BottomBar from "../components/ui/BottomBar";
import ModalLogout from "../components/modal/ModalLogout";
import { useStateContext } from "../context/StateContext";
import {
  Profile as StaffProfile,
  StaffUstadz,
  AbsensiSantri,
} from "../pages/dashboard-staff-ustadz";
import {
  AllDataSantri,
  Kategori,
  Pondok,
  Profile as PondokProfile,
} from "../pages/dasboard-pondok";
import DataUstadz from "../pages/dasboard-pondok/DataUstadz";
import {
  Information,
  MasjidData,
  Pusat,
  Profile as PusatProfile,
} from "../pages/dashboard-pusat";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // Mengambil token dari localStorage
  return token ? element : <Navigate to="/" replace />;
};

const Routing = () => {
  const { showModal, setShowModal } = useStateContext();

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Sidebar />
      <Header handleLogoutClick={handleLogoutClick} />
      <Routes>
        {/* PUSAT */}
        <Route path="/pusat/*" element={<Pusat />} />
        <Route path="/profile/pusat" element={<PusatProfile />} />
        <Route path="/informasi/pusat" element={<Information />} />
        <Route path="/data-masjid/pusat" element={<MasjidData />} />
        {/* PONDOK */}
        {/* <Route path="/pondok/*" element={<PrivateRoute element={<Pondok />} />} /> */}
        <Route path="/pondok/*" element={<Pondok />} />
        <Route path="/profile/pondok" element={<PondokProfile />} />
        <Route path="/data-ustadz/pondok" element={<DataUstadz />} />
        <Route path="/data-santri/pondok" element={<AllDataSantri />} />
        <Route path="/data-Kategori/pondok" element={<Kategori />} />
        {/* SANTRI */}
        {/* <Route path="/santri/*" element={<PrivateRoute element={<Santri />} />} /> */}
        <Route path="/santri/*" element={<Santri />} />
        <Route path="/profile/santri" element={<SantriProfile />} />
        <Route path="/pengaturan/santri" element={<Pengaturan />} />
        {/* USTADZ */}
        {/* <Route path="/ustadz/*" element={<PrivateRoute element={<Ustadz />} />} /> */}
        <Route path="/ustadz/*" element={<Ustadz />} />
        <Route path="/profile/ustadz" element={<UstadzProfile />} />
        <Route path="/input-tambah-santri/ustadz" element={<TambahSantri />} />
        <Route path="/input-hafalan-santri/ustadz" element={<Hafalan />} />
        <Route path="/input-data-santri/ustadz" element={<DataSantri />} />
        <Route path="/input-skill-santri/ustadz" element={<SkillSantri />} />
        {/* STAFF USTADZ */}
        {/* <Route path="/staff-ustadz/*" element={<PrivateRoute element={<StaffUstadz />} />} /> */}
        <Route path="/staff-ustadz/*" element={<StaffUstadz />} />
        <Route path="/profile/staff-ustadz" element={<StaffProfile />} />
        <Route
          path="/input-absensi-santri/staff-ustadz"
          element={<AbsensiSantri />}
        />
      </Routes>
      {showModal && <ModalLogout onClose={handleCloseModal} />}
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Routing;
